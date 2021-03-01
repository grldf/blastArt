import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as set_data_dev, p as noop, G as null_to_empty, q as validate_each_argument, H as listen, I as svg_element, J as action_destroyer, B as listen_dev, x as transition_in, y as transition_out, C as check_outros, D as destroy_each, E as run_all, A as query_selector_all, K as empty, r as create_component, u as claim_component, w as mount_component, z as destroy_component, F as group_outros } from './client.c03e15cf.js';
import { t } from './snarkdown.es.257e5e6b.js';
import { s as src, D as DefaultClient } from './bundle.esm.da9dac77.js';

var SlimScroll = (function () {
    function $(el) {
        if (!(this instanceof $)) {
            return new $(el)
        }
        if (typeof el === 'string') {
            var r = /<(\w+)><\/\1>$/.exec(el);
            if (r) {
                el = document.createElement(r[1]);
            } else {
                el = document.querySelector(el);
            }
        }
        this.el = (el && el.nodeType === 1) ? el : document.documentElement;
        return this
    }

    $.prototype = {
        parent: function () {
            return $(this.el.parentNode || this.el.parentElement)
        },
        closest: function (selector) {
            if (!selector) return $(document)
            var parent = this.parent();

            while (parent.el.className != $(selector).el.className) {

                parent = parent.parent();
            }
            return parent
        },
        is: function (obj) {
            if (this.el === obj.el) {
                return true
            }
            return false
        },
        hasClass: function (className) {
            if (this.el.className.indexOf(className) >= 0) {
                return true
            }
            return false
        },
        addClass: function (className) {
            if (!className || typeof className === 'undefined') return
            if (this.hasClass(className)) return
            var cls = this.el.className.split(' ');
            cls.push(className);
            this.el.className = cls.join(' ').trim();
            return this
        },
        css: function (styleObj) {
            if (typeof styleObj === 'string') {
                return this.el.style[styleObj].replace('px', '')
            }
            for (var key in styleObj) {
                if (typeof styleObj[key] === 'number' && parseInt(styleObj[key])) styleObj[key] = parseInt(styleObj[key]) + 'px';
                if (key === 'zIndex') styleObj[key] = parseInt(styleObj[key]);
                this.el.style[key] = styleObj[key];
            }
            return this
        },
        show: function () {
            this.el.style.display = 'block';
        },
        hide: function () {
            this.el.style.display = 'none';
        },
        wrap: function (obj) {
            this.parent().el.insertBefore(obj.el, this.el);
            obj.append(this);
            return this
        },
        append: function (obj) {
            this.el.appendChild(obj.el);
            return this
        },
        scrollTop: function (y) {
            if (typeof y !== 'undefined') {
                this.el.scrollTop = parseInt(y);
                return this
            }
            return this.el.scrollTop
        },
        outerHeight: function () {
            return this.el.offsetHeight || this.el.clientHeight
        },
        hover: function (hoverIn, hoverOut) {
            this.bind('mouseenter', hoverIn);
            this.bind('mouseleave', hoverOut);
        },
        bind: function (type, fn, capture) {
            var el = this.el;

            if (window.addEventListener) {
                el.addEventListener(type, fn, capture);

                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(type, capture || false, false);
                // 在元素上存储创建的事件，方便自定义触发
                if (!el['ev' + type]) {
                    el['ev' + type] = ev;
                }

            } else if (window.attachEvent) {
                el.attachEvent('on' + type, fn);
                if (isNaN(el['cu' + type])) {
                    // 自定义属性，触发事件用
                    el['cu' + type] = 0;
                }

                var fnEv = function (event) {
                    if (event.propertyName === 'cu' + type) {
                        fn.call(el);
                    }
                };

                el.attachEvent('onpropertychange', fnEv);

                // 在元素上存储绑定的propertychange事件，方便删除
                if (!el['ev' + type]) {
                    el['ev' + type] = [fnEv];
                } else {
                    el['ev' + type].push(fnEv);
                }
            }

            return this;
        },
        trigger: function (type) {
            var el = this.el;
            if (typeof type === 'string') {
                if (document.dispatchEvent) {
                    if (el['ev' + type]) {
                        el.dispatchEvent(el['ev' + type]);
                    }
                } else if (document.attachEvent) {
                    // 改变对应自定义属性，触发自定义事件
                    el['cu' + type]++;
                }
            }
            return this;
        },
        unbind: function (type, fn, capture) {
            var el = this.el;
            if (window.removeEventListener) {
                el.removeEventListener(type, fn, capture || false);
            } else if (document.attachEvent) {
                el.detachEvent('on' + type, fn);
                var arrEv = el['ev' + type];
                if (arrEv instanceof Array) {
                    for (var i = 0; i < arrEv.length; i += 1) {
                        // 删除该方法名下所有绑定的propertychange事件
                        el.detachEvent('onpropertychange', arrEv[i]);
                    }
                }
            }
            return this;
        }
    };

    $.extend = function (deep) {
        var start = 1;
        if (typeof deep === 'object') {
            start = 0;
        }
        var objs = Array.prototype.slice.call(arguments, start),
            newObj = {};

        for (var i = 0; i < objs.length; i++) {
            if (typeof objs !== 'object') return
            for (var key in objs[i]) {
                newObj[key] = typeof objs[i][key] === 'object' && deep === true ? $.extend(true, objs[i][key]) : objs[i][key];
            }
        }
        return newObj
    };

    $.isPlainObject = function (obj) {
        return typeof obj === 'object' && !(obj instanceof Array)
    };

    function SlimScroll(el, options) {
        var defaults = {

            // width in pixels of the visible scroll area
            width: 'auto',

            // height in pixels of the visible scroll area
            height: '250px',

            // width in pixels of the scrollbar and rail
            size: '7px',

            // scrollbar color, accepts any hex/color value
            color: '#000',

            // scrollbar position - left/right
            position: 'right',

            // distance in pixels between the side edge and the scrollbar
            distance: '1px',

            // default scroll position on load - top / bottom / $('selector')
            start: 'top',

            // sets scrollbar opacity
            opacity: 0.4,

            // enables always-on mode for the scrollbar
            alwaysVisible: false,

            // check if we should hide the scrollbar when user is hovering over
            disableFadeOut: false,

            // sets visibility of the rail
            railVisible: false,

            // sets rail color
            railColor: '#333',

            // sets rail opacity
            railOpacity: 0.2,

            // whether  we should use jQuery UI Draggable to enable bar dragging
            railDraggable: true,

            // defautlt CSS class of the slimscroll rail
            railClass: 'slimScrollRail',

            // defautlt CSS class of the slimscroll bar
            barClass: 'slimScrollBar',

            // defautlt CSS class of the slimscroll wrapper
            wrapperClass: 'slimScrollDiv',

            // check if mousewheel should scroll the window if we reach top/bottom
            allowPageScroll: false,

            // scroll amount applied to each mouse wheel step
            wheelStep: 20,

            // scroll amount applied when user is using gestures
            touchScrollStep: 200,

            // sets border radius
            borderRadius: '7px',

            // sets border radius of the rail
            railBorderRadius: '7px'
        };



        var o = $.extend(defaults, options);

        // do it for every element that matches selector
        // this.each(function () {

        var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
            barHeight, percentScroll, lastScroll,
            divS = '<div></div>',
            minBarHeight = 30,
            releaseScroll = false;

        // used in event handlers and for better minification
        // var me = $(this);
        var me = $(el);


        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass)) {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options)) {
                // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
                if ('height' in options && options.height === 'auto') {
                    me.parent().css({ height: 'auto' });
                    me.css({ height: 'auto' });
                    var height = me.parent().parent().outerHeight();
                    me.parent().css({ height: height });
                    me.css({ height: height });
                } else if ('height' in options) {
                    var h = options.height;
                    me.parent().css({ height: h });
                    me.css({ height: h });
                }

                if ('scrollTo' in options) {
                    // jump to a static point
                    offset = parseInt(o.scrollTo);
                }
                else if ('scrollBy' in options) {
                    // jump by value pixels
                    offset += parseInt(o.scrollBy);
                }
                else if ('destroy' in options) {
                    // remove slimscroll elements
                    bar.remove();
                    rail.remove();
                    me.unwrap();
                    return;
                }

                // scroll content by the given offset
                scrollContent(offset, false, true);
            }

            return;
        } else if ($.isPlainObject(options)) {
            if ('destroy' in options) {
                return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height === 'auto') ? me.parent().outerHeight() : o.height;

        // wrap content
        var wrapper = $(divS)
            .addClass(o.wrapperClass)
            .css({
                position: 'relative',
                overflow: 'hidden',
                width: o.width,
                height: o.height
            });

        // update style for the div
        me.css({
            overflow: 'hidden',
            width: o.width,
            height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
            .addClass(o.railClass)
            .css({
                width: o.size,
                height: '100%',
                position: 'absolute',
                top: 0,
                display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
                'border-radius': o.railBorderRadius,
                background: o.railColor,
                opacity: o.railOpacity,
                zIndex: 998
            });

        // create scrollbar
        var bar = $(divS)
            .addClass(o.barClass)
            .css({
                background: o.color,
                width: o.size,
                position: 'absolute',
                top: 0,
                opacity: o.opacity,
                display: o.alwaysVisible ? 'block' : 'none',
                'border-radius': o.borderRadius,
                BorderRadius: o.borderRadius,
                MozBorderRadius: o.borderRadius,
                WebkitBorderRadius: o.borderRadius,
                zIndex: 999
            });

        // set position
        var posCss = (o.position === 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);


        //all binding events callback
        var events = {
            touchStart: function (e, b) {
               
                if (e.touches.length) {
                    // record where touch started
                    touchDif = e.touches[0].pageY;
                }
            },
            touchMove: function (e) {
                // prevent scrolling the page if necessary
                if (!releaseScroll) {
                    e.preventDefault();
                }
                if (e.touches.length) {
                    // see how far user swiped
                    var diff = (touchDif - e.touches[0].pageY) / o.touchScrollStep;
                    // scroll content
                    scrollContent(diff, true);
                    touchDif = e.touches[0].pageY;
                }
            },
            hoverIn: function () {
                isOverPanel = true;
                showBar();
                hideBar();
            },
            hoverOut: function () {
                isOverPanel = false;
                hideBar();
            },
            barHoverIn: function () {
                isOverBar = true;
            },
            barHoverOut: function () {
                isOverBar = false;
            },
            railHoverIn: function () {
                showBar();
            },
            railHoverOut: function () {
                hideBar();
            },
            barMouseDown: function (e) {
                var $doc = $(document);
                var t = parseFloat(bar.css('top'));
                var pageY = e.pageY;
                isDragg = true;

                function mousemove(e) {
                    var currTop = t + e.pageY - pageY;
                    bar.css({ top: currTop });
                    scrollContent(0, currTop, false);// scroll content
                }

                function mouseup(e) {
                    isDragg = false; hideBar();
                    $doc.unbind('mousemove', mousemove);
                    $doc.unbind('mouseup', mouseup);
                }

                $doc.bind('mousemove', mousemove);

                $doc.bind('mouseup', mouseup);
                return false;
            },
            barSelectedStart: function (e) {
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
        };

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable) {
            bar.bind('mousedown', events.barMouseDown).bind('selectstart', events.barSelectedStart);
        }

        // on rail over
        rail.hover(events.railHoverIn, events.railHoverOut);

        // on bar over
        bar.hover(events.barHoverIn, events.barHoverOut);

        // show on parent mouseover
        me.hover(events.hoverIn, events.hoverOut);

        // support for mobile
        me.bind('touchstart', events.touchStart);

        me.bind('touchmove', events.touchMove);

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom') {
            // scroll content to bottom
            bar.css({ top: me.outerHeight() - bar.outerHeight() });
            scrollContent(0, true);
        }
        else if (o.start !== 'top') {
            // assume jQuery selector
            scrollContent($(o.start).position().top, null, true);

            // make sure bar stays hidden
            if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(el);

        function _onWheel(e) {
            // use mouse wheel only when mouse is over
            if (!isOverPanel) { return; }

            e = e || window.event;

            var delta = 0;
            if (e.wheelDelta) { delta = -e.wheelDelta / 120; }
            if (e.detail) { delta = e.detail / 3; }

            var target = e.target || e.srcTarget || e.srcElement;
            if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
                // scroll content
                scrollContent(delta, true);
            }

            // stop window scroll
            if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
            if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump) {
            releaseScroll = false;
            var delta = y;
            var maxTop = me.outerHeight() - bar.outerHeight();

            if (isWheel) {
                // move bar with mouse wheel
                delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

                // move bar, make sure it doesn't go out
                delta = Math.min(Math.max(delta, 0), maxTop);

                // if scrolling down, make sure a fractional change to the
                // scroll position isn't rounded away when the scrollbar's CSS is set
                // this flooring of delta would happened automatically when
                // bar.css is set below, but we floor here for clarity
                delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

                // scroll the scrollbar
                bar.css({ top: delta + 'px' });
            }

            // calculate actual scroll amount
            percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
            // delta = percentScroll * (me[0].scrollHeight - me.outerHeight());
            delta = percentScroll * (me.el.scrollHeight - me.outerHeight());

            if (isJump) {
                delta = y;
                // var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                var offsetTop = delta / me.el.scrollHeight * me.outerHeight();
                offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
                bar.css({ top: offsetTop + 'px' });
            }

            // scroll content
            me.scrollTop(delta);

            // fire scrolling event
            me.trigger('slimscrolling', ~~delta);

            // ensure bar is visible
            showBar();

            // trigger hide when scroll is stopped
            hideBar();
        }

        function attachWheel(target) {
            if (window.addEventListener) {
                target.addEventListener('DOMMouseScroll', _onWheel, false);
                target.addEventListener('mousewheel', _onWheel, false);
            }
            else {
                document.attachEvent('onmousewheel', _onWheel);
            }
        }

        function getBarHeight() {
            // calculate scrollbar height and make sure it is not too small
            barHeight = Math.max((me.outerHeight() / me.el.scrollHeight) * me.outerHeight(), minBarHeight);
            bar.css({ height: barHeight + 'px' });

            // hide scrollbar if content is not long enough
            var display = barHeight == me.outerHeight() ? 'none' : 'block';
            bar.css({ display: display });
        }

        function showBar() {
            // recalculate bar height
            getBarHeight();
            clearTimeout(queueHide);

            // when bar reached top or bottom
            if (percentScroll == ~~percentScroll) {
                //release wheel
                releaseScroll = o.allowPageScroll;

                // publish approporiate event
                if (lastScroll != percentScroll) {
                    var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                    me.trigger('slimscroll', msg);
                }
            }
            else {
                releaseScroll = false;
            }
            lastScroll = percentScroll;

            // show only when required
            if (barHeight >= me.outerHeight()) {
                //allow window scroll
                releaseScroll = true;
                return;
            }
            // bar.stop(true, true).fadeIn('fast');
            bar.show();
            // if (o.railVisible) { rail.stop(true, true).fadeIn('fast'); }
            if (o.railVisible) { rail.show(); }
        }

        function hideBar() {
            // only hide when options allow it
            if (!o.alwaysVisible) {
                queueHide = setTimeout(function () {
                    if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
                        // bar.fadeOut('slow');
                        // rail.fadeOut('slow');
                        bar.hide();
                        rail.hide();
                    }
                }, 1000);
            }
        }
        return {
            
            unbind: function () {


                bar.unbind('mousedown', events.barMouseDown)
                    .unbind('mouseenter', events.barHoverIn)
                    .unbind('mouseleave', events.barHoverOut)
                    .unbind('selectstart', events.barSelectedStart);
                rail.unbind('mouseenter', events.railHoverIn)
                    .unbind('mouseleave', events.railHoverOut);
                bar.unbind('mouseenter', events.barHoverIn)
                    .unbind('mouseleave', events.barHoverOut);
                me.unbind('mouseenter', events.hoverIn)
                    .unbind('mouseleave', events.hoverOut)
                    .unbind('touchstart', events.touchStart)
                    .unbind('touchmove', events.touchMove);
                bar.el.remove();
                rail.el.remove();
                
            },

        }
    }

    return SlimScroll
})();




function unwrap(node) {
    if(node != undefined && node != null)
        node.replaceWith(...node.childNodes);
}

function slimscroll(node, options) {
    // the node has been mounted in the DOM
    
    let slim  = SlimScroll(node,options);
    return {
        update(options) {
           
            slim.unbind();
            unwrap(node.parentNode);
            slim  = SlimScroll(node,options);
         
        },

        destroy() {
            // the node has been removed from the DOM
            slim.unbind();
            unwrap(node.parentNode);
        }
    };
}

/* src/components/Lightbox.svelte generated by Svelte v3.32.3 */

const file = "src/components/Lightbox.svelte";

// (18:4) {:else}
function create_else_block(ctx) {
	let img;
	let img_class_value;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { class: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", img_class_value = "" + (null_to_empty(/*imgFullSize*/ ctx[5]) + " svelte-1fxk9du"));
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			add_location(img, file, 18, 4, 536);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*imgFullSize*/ 32 && img_class_value !== (img_class_value = "" + (null_to_empty(/*imgFullSize*/ ctx[5]) + " svelte-1fxk9du"))) {
				attr_dev(img, "class", img_class_value);
			}

			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(18:4) {:else}",
		ctx
	});

	return block;
}

// (14:4) {#if imageUrl.match(regex)}
function create_if_block(ctx) {
	let video;
	let track;
	let video_class_value;
	let video_src_value;

	const block = {
		c: function create() {
			video = element("video");
			track = element("track");
			this.h();
		},
		l: function claim(nodes) {
			video = claim_element(nodes, "VIDEO", {
				class: true,
				poster: true,
				src: true,
				controls: true,
				type: true
			});

			var video_nodes = children(video);
			track = claim_element(video_nodes, "TRACK", { kind: true });
			video_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(track, "kind", "captions");
			add_location(track, file, 15, 8, 480);
			attr_dev(video, "class", video_class_value = "" + (null_to_empty(/*imgFullSize*/ ctx[5]) + " svelte-1fxk9du"));
			attr_dev(video, "poster", /*videoPoster*/ ctx[6]);
			if (video.src !== (video_src_value = /*imageUrl*/ ctx[0])) attr_dev(video, "src", video_src_value);
			video.controls = true;
			attr_dev(video, "type", "video/mp4");
			add_location(video, file, 14, 4, 381);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video, anchor);
			append_dev(video, track);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*imgFullSize*/ 32 && video_class_value !== (video_class_value = "" + (null_to_empty(/*imgFullSize*/ ctx[5]) + " svelte-1fxk9du"))) {
				attr_dev(video, "class", video_class_value);
			}

			if (dirty & /*videoPoster*/ 64) {
				attr_dev(video, "poster", /*videoPoster*/ ctx[6]);
			}

			if (dirty & /*imageUrl*/ 1 && video.src !== (video_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(video, "src", video_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(14:4) {#if imageUrl.match(regex)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div1;
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let show_if;

	function select_block_type(ctx, dirty) {
		if (show_if == null || dirty & /*imageUrl*/ 1) show_if = !!/*imageUrl*/ ctx[0].match(/*regex*/ ctx[7]);
		if (show_if) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(/*slideNo*/ ctx[2]);
			t1 = text(" / ");
			t2 = text(/*totalSlide*/ ctx[3]);
			t3 = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*slideNo*/ ctx[2]);
			t1 = claim_text(div0_nodes, " / ");
			t2 = claim_text(div0_nodes, /*totalSlide*/ ctx[3]);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "numbertext svelte-1fxk9du");
			add_location(div0, file, 12, 4, 290);
			attr_dev(div1, "class", "mySlides svelte-1fxk9du");
			toggle_class(div1, "show", /*imageShowing*/ ctx[4]);
			add_location(div1, file, 11, 0, 237);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, t2);
			append_dev(div1, t3);
			if_block.m(div1, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slideNo*/ 4) set_data_dev(t0, /*slideNo*/ ctx[2]);
			if (dirty & /*totalSlide*/ 8) set_data_dev(t2, /*totalSlide*/ ctx[3]);

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div1, null);
				}
			}

			if (dirty & /*imageShowing*/ 16) {
				toggle_class(div1, "show", /*imageShowing*/ ctx[4]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Lightbox", slots, []);
	let { imageUrl } = $$props;
	let { alternText } = $$props;
	let { slideNo } = $$props;
	let { totalSlide } = $$props;
	let { imageShowing } = $$props;
	let { imgFullSize } = $$props;
	let { videoPoster } = $$props;
	let regex = /.mp4$/;

	const writable_props = [
		"imageUrl",
		"alternText",
		"slideNo",
		"totalSlide",
		"imageShowing",
		"imgFullSize",
		"videoPoster"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Lightbox> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("imgFullSize" in $$props) $$invalidate(5, imgFullSize = $$props.imgFullSize);
		if ("videoPoster" in $$props) $$invalidate(6, videoPoster = $$props.videoPoster);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		slideNo,
		totalSlide,
		imageShowing,
		imgFullSize,
		videoPoster,
		regex
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("imgFullSize" in $$props) $$invalidate(5, imgFullSize = $$props.imgFullSize);
		if ("videoPoster" in $$props) $$invalidate(6, videoPoster = $$props.videoPoster);
		if ("regex" in $$props) $$invalidate(7, regex = $$props.regex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		imageUrl,
		alternText,
		slideNo,
		totalSlide,
		imageShowing,
		imgFullSize,
		videoPoster,
		regex
	];
}

class Lightbox extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			slideNo: 2,
			totalSlide: 3,
			imageShowing: 4,
			imgFullSize: 5,
			videoPoster: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Lightbox",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imageUrl*/ ctx[0] === undefined && !("imageUrl" in props)) {
			console.warn("<Lightbox> was created without expected prop 'imageUrl'");
		}

		if (/*alternText*/ ctx[1] === undefined && !("alternText" in props)) {
			console.warn("<Lightbox> was created without expected prop 'alternText'");
		}

		if (/*slideNo*/ ctx[2] === undefined && !("slideNo" in props)) {
			console.warn("<Lightbox> was created without expected prop 'slideNo'");
		}

		if (/*totalSlide*/ ctx[3] === undefined && !("totalSlide" in props)) {
			console.warn("<Lightbox> was created without expected prop 'totalSlide'");
		}

		if (/*imageShowing*/ ctx[4] === undefined && !("imageShowing" in props)) {
			console.warn("<Lightbox> was created without expected prop 'imageShowing'");
		}

		if (/*imgFullSize*/ ctx[5] === undefined && !("imgFullSize" in props)) {
			console.warn("<Lightbox> was created without expected prop 'imgFullSize'");
		}

		if (/*videoPoster*/ ctx[6] === undefined && !("videoPoster" in props)) {
			console.warn("<Lightbox> was created without expected prop 'videoPoster'");
		}
	}

	get imageUrl() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageUrl(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alternText() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alternText(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slideNo() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slideNo(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get totalSlide() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set totalSlide(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get imageShowing() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageShowing(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get imgFullSize() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imgFullSize(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get videoPoster() {
		throw new Error("<Lightbox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set videoPoster(value) {
		throw new Error("<Lightbox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/Projet/[slug].svelte generated by Svelte v3.32.3 */
const file$1 = "src/routes/Projet/[slug].svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	child_ctx[13] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

// (80:10) {#each projet.projets as slug}
function create_each_block_3(ctx) {
	let a;
	let t_value = /*slug*/ ctx[17].titre + "";
	let t;
	let a_class_value;
	let a_href_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "class", a_class_value = "link" + /*projet*/ ctx[14].id + " svelte-189xs53");
			attr_dev(a, "href", a_href_value = urlSlug + /*slug*/ ctx[17].Slug);
			add_location(a, file$1, 80, 12, 1839);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);

			if (!mounted) {
				dispose = listen_dev(a, "click", /*firstImage*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post*/ 1 && t_value !== (t_value = /*slug*/ ctx[17].titre + "")) set_data_dev(t, t_value);

			if (dirty & /*post*/ 1 && a_class_value !== (a_class_value = "link" + /*projet*/ ctx[14].id + " svelte-189xs53")) {
				attr_dev(a, "class", a_class_value);
			}

			if (dirty & /*post*/ 1 && a_href_value !== (a_href_value = urlSlug + /*slug*/ ctx[17].Slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(80:10) {#each projet.projets as slug}",
		ctx
	});

	return block;
}

// (79:8) {#each info.lien as projet}
function create_each_block_2(ctx) {
	let each_1_anchor;
	let each_value_3 = /*projet*/ ctx[14].projets;
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post, urlSlug, firstImage*/ 9) {
				each_value_3 = /*projet*/ ctx[14].projets;
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(79:8) {#each info.lien as projet}",
		ctx
	});

	return block;
}

// (96:6) {#each info.galery as image, i}
function create_each_block_1(ctx) {
	let lightbox;
	let current;

	lightbox = new Lightbox({
			props: {
				imageUrl: urlpApi + /*image*/ ctx[11].url,
				slideNo: /*imageShowIndex*/ ctx[1],
				totalSlide: /*info*/ ctx[8].galery.length,
				imageShowing: /*i*/ ctx[13] + 1 === /*imageShowIndex*/ ctx[1],
				alternText: /*i*/ ctx[13],
				imgFullSize: "img-" + /*fullSize*/ ctx[2],
				videoPoster: urlpApi + /*info*/ ctx[8].cover.url
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(lightbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(lightbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(lightbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const lightbox_changes = {};
			if (dirty & /*post*/ 1) lightbox_changes.imageUrl = urlpApi + /*image*/ ctx[11].url;
			if (dirty & /*imageShowIndex*/ 2) lightbox_changes.slideNo = /*imageShowIndex*/ ctx[1];
			if (dirty & /*post*/ 1) lightbox_changes.totalSlide = /*info*/ ctx[8].galery.length;
			if (dirty & /*imageShowIndex*/ 2) lightbox_changes.imageShowing = /*i*/ ctx[13] + 1 === /*imageShowIndex*/ ctx[1];
			if (dirty & /*fullSize*/ 4) lightbox_changes.imgFullSize = "img-" + /*fullSize*/ ctx[2];
			if (dirty & /*post*/ 1) lightbox_changes.videoPoster = urlpApi + /*info*/ ctx[8].cover.url;
			lightbox.$set(lightbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(lightbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(lightbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(lightbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(96:6) {#each info.galery as image, i}",
		ctx
	});

	return block;
}

// (76:2) {#each post as info}
function create_each_block(ctx) {
	let div1;
	let nav;
	let t0;
	let h5;
	let t1;
	let t2;
	let h2;
	let t3_value = /*info*/ ctx[8].titre + "";
	let t3;
	let t4;
	let div0;
	let raw_value = t(/*info*/ ctx[8].description) + "";
	let t5;
	let div2;
	let t6;
	let button0;
	let t7;
	let t8;
	let button1;
	let t9;
	let t10;
	let svg0;
	let g1;
	let circle0;
	let g0;
	let path0;
	let path1;
	let path2;
	let path3;
	let t11;
	let svg1;
	let g2;
	let circle1;
	let path4;
	let path5;
	let path6;
	let path7;
	let t12;
	let current;
	let mounted;
	let dispose;
	let each_value_2 = /*info*/ ctx[8].lien;
	validate_each_argument(each_value_2);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*info*/ ctx[8].galery;
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div1 = element("div");
			nav = element("nav");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t0 = space();
			h5 = element("h5");
			t1 = text("❮ Projet ❯");
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = space();
			div0 = element("div");
			t5 = space();
			div2 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t6 = space();
			button0 = element("button");
			t7 = text("❮");
			t8 = space();
			button1 = element("button");
			t9 = text("❯");
			t10 = space();
			svg0 = svg_element("svg");
			g1 = svg_element("g");
			circle0 = svg_element("circle");
			g0 = svg_element("g");
			path0 = svg_element("path");
			path1 = svg_element("path");
			path2 = svg_element("path");
			path3 = svg_element("path");
			t11 = space();
			svg1 = svg_element("svg");
			g2 = svg_element("g");
			circle1 = svg_element("circle");
			path4 = svg_element("path");
			path5 = svg_element("path");
			path6 = svg_element("path");
			path7 = svg_element("path");
			t12 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			nav = claim_element(div1_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nav_nodes);
			}

			t0 = claim_space(nav_nodes);
			h5 = claim_element(nav_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t1 = claim_text(h5_nodes, "❮ Projet ❯");
			h5_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div2_nodes);
			}

			t6 = claim_space(div2_nodes);
			button0 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t7 = claim_text(button0_nodes, "❮");
			button0_nodes.forEach(detach_dev);
			t8 = claim_space(div2_nodes);
			button1 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t9 = claim_text(button1_nodes, "❯");
			button1_nodes.forEach(detach_dev);
			t10 = claim_space(div2_nodes);

			svg0 = claim_element(
				div2_nodes,
				"svg",
				{
					class: true,
					xmlns: true,
					width: true,
					height: true,
					viewBox: true
				},
				1
			);

			var svg0_nodes = children(svg0);
			g1 = claim_element(svg0_nodes, "g", { id: true, transform: true }, 1);
			var g1_nodes = children(g1);

			circle0 = claim_element(
				g1_nodes,
				"circle",
				{
					id: true,
					"data-name": true,
					cx: true,
					cy: true,
					r: true,
					transform: true,
					fill: true
				},
				1
			);

			children(circle0).forEach(detach_dev);

			g0 = claim_element(
				g1_nodes,
				"g",
				{
					id: true,
					"data-name": true,
					transform: true
				},
				1
			);

			var g0_nodes = children(g0);

			path0 = claim_element(
				g0_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path0).forEach(detach_dev);

			path1 = claim_element(
				g0_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path1).forEach(detach_dev);

			path2 = claim_element(
				g0_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path2).forEach(detach_dev);

			path3 = claim_element(
				g0_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path3).forEach(detach_dev);
			g0_nodes.forEach(detach_dev);
			g1_nodes.forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			t11 = claim_space(div2_nodes);

			svg1 = claim_element(
				div2_nodes,
				"svg",
				{
					class: true,
					xmlns: true,
					width: true,
					height: true,
					viewBox: true
				},
				1
			);

			var svg1_nodes = children(svg1);
			g2 = claim_element(svg1_nodes, "g", { id: true, transform: true }, 1);
			var g2_nodes = children(g2);

			circle1 = claim_element(
				g2_nodes,
				"circle",
				{
					id: true,
					"data-name": true,
					cx: true,
					cy: true,
					r: true,
					transform: true,
					fill: true
				},
				1
			);

			children(circle1).forEach(detach_dev);

			path4 = claim_element(
				g2_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path4).forEach(detach_dev);

			path5 = claim_element(
				g2_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path5).forEach(detach_dev);

			path6 = claim_element(
				g2_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path6).forEach(detach_dev);

			path7 = claim_element(
				g2_nodes,
				"path",
				{
					id: true,
					"data-name": true,
					d: true,
					transform: true,
					fill: true
				},
				1
			);

			children(path7).forEach(detach_dev);
			g2_nodes.forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			t12 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "linkText svelte-189xs53");
			add_location(h5, file$1, 87, 8, 2029);
			attr_dev(nav, "class", "svelte-189xs53");
			add_location(nav, file$1, 77, 6, 1744);
			attr_dev(h2, "class", "svelte-189xs53");
			add_location(h2, file$1, 89, 6, 2099);
			attr_dev(div0, "class", "text svelte-189xs53");
			add_location(div0, file$1, 90, 10, 2131);
			attr_dev(div1, "class", "post-info svelte-189xs53");
			add_location(div1, file$1, 76, 4, 1714);
			attr_dev(button0, "class", "prev svelte-189xs53");
			add_location(button0, file$1, 106, 6, 2673);
			attr_dev(button1, "class", "next svelte-189xs53");
			add_location(button1, file$1, 107, 6, 2739);
			attr_dev(circle0, "id", "Ellipse_12");
			attr_dev(circle0, "data-name", "Ellipse 12");
			attr_dev(circle0, "cx", "20.5");
			attr_dev(circle0, "cy", "20.5");
			attr_dev(circle0, "r", "20.5");
			attr_dev(circle0, "transform", "translate(-0.806 -5.308)");
			attr_dev(circle0, "fill", "rgba(0,0,0,0.1)");
			add_location(circle0, file$1, 118, 10, 3090);
			attr_dev(path0, "id", "Tracé_80");
			attr_dev(path0, "data-name", "Tracé 80");
			attr_dev(path0, "d", "M12.817,9.357c-1.213-1.213-3.072-3.074-4.2-4.2l-.8-.8s1.3-1.3,1.834-1.835-.423-.509-.423-.509L2.04,1.339s-.582-.047-.582.512c0,.773.909,7.221.909,7.221s0,.982.648.33,1.7-1.7,1.7-1.7l.717.719,4.25,4.249A4.943,4.943,0,0,1,12.817,9.357Z");
			attr_dev(path0, "transform", "translate(-1.392 -1.308)");
			attr_dev(path0, "fill", "#e42ef5");
			add_location(path0, file$1, 132, 12, 3466);
			attr_dev(path1, "id", "Tracé_81");
			attr_dev(path1, "data-name", "Tracé 81");
			attr_dev(path1, "d", "M324.952,323.169s0-.981-.649-.329-1.7,1.7-1.7,1.7-.284-.283-.717-.718c-1.153-1.153-3.242-3.243-4.437-4.436a4.948,4.948,0,0,1-3.408,3.045l4.651,4.654.8.8s-1.3,1.3-1.835,1.837.425.509.425.509l7.193.681a.515.515,0,0,0,.579-.515C325.858,329.62,324.952,323.169,324.952,323.169Z");
			attr_dev(path1, "transform", "translate(-299.794 -304.922)");
			attr_dev(path1, "fill", "#e42ef5");
			add_location(path1, file$1, 139, 12, 3894);
			attr_dev(path2, "id", "Tracé_82");
			attr_dev(path2, "data-name", "Tracé 82");
			attr_dev(path2, "d", "M8.361,315.848c-1.179,1.18-3.3,3.3-4.535,4.537-.483.483-.8.8-.8.8l-1.837-1.837c-.536-.537-.509.423-.509.423L0,326.967a.514.514,0,0,0,.514.581c.773,0,7.222-.907,7.222-.907s.98,0,.327-.653S6.373,324.3,6.373,324.3l.72-.721c1.2-1.2,3.4-3.4,4.565-4.566A4.954,4.954,0,0,1,8.361,315.848Z");
			attr_dev(path2, "transform", "translate(-0.003 -301.548)");
			attr_dev(path2, "fill", "#e42ef5");
			add_location(path2, file$1, 146, 12, 4365);
			attr_dev(path3, "id", "Tracé_83");
			attr_dev(path3, "data-name", "Tracé 83");
			attr_dev(path3, "d", "M328.183,12.17,332.5,7.854c.484-.483.8-.8.8-.8s1.3,1.3,1.837,1.835.507-.423.507-.423l.678-7.2a.512.512,0,0,0-.515-.58c-.772,0-7.22.907-7.22.907s-.981,0-.33.65,1.694,1.7,1.694,1.7-.281.284-.717.718c-1.057,1.057-2.9,2.894-4.118,4.116A4.946,4.946,0,0,1,328.183,12.17Z");
			attr_dev(path3, "transform", "translate(-310.364 -0.692)");
			attr_dev(path3, "fill", "#e42ef5");
			add_location(path3, file$1, 153, 12, 4842);
			attr_dev(g0, "id", "Groupe_1");
			attr_dev(g0, "data-name", "Groupe 1");
			attr_dev(g0, "transform", "translate(6.662 2.192)");
			add_location(g0, file$1, 127, 10, 3333);
			attr_dev(g1, "id", "full-screen-button");
			attr_dev(g1, "transform", "translate(0.806 5.308)");
			add_location(g1, file$1, 117, 8, 3017);
			attr_dev(svg0, "class", "btn-full-size svelte-189xs53");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg0, "width", "41");
			attr_dev(svg0, "height", "41");
			attr_dev(svg0, "viewBox", "0 0 41 41");
			add_location(svg0, file$1, 109, 6, 2806);
			attr_dev(circle1, "id", "Ellipse_13");
			attr_dev(circle1, "data-name", "Ellipse 13");
			attr_dev(circle1, "cx", "20.5");
			attr_dev(circle1, "cy", "20.5");
			attr_dev(circle1, "r", "20.5");
			attr_dev(circle1, "transform", "translate(-1.729 -2.178)");
			attr_dev(circle1, "fill", "rgba(0,0,0,0.1)");
			add_location(circle1, file$1, 172, 10, 5611);
			attr_dev(path4, "id", "Tracé_87");
			attr_dev(path4, "data-name", "Tracé 87");
			attr_dev(path4, "d", "M29.024,13.474l-2.232-2.439,6.781-6.583L29.024.031l-6.2,6.431L20,4.452v9.022Z");
			attr_dev(path4, "transform", "translate(1.696 3.031)");
			attr_dev(path4, "fill", "#e42ef5");
			add_location(path4, file$1, 181, 10, 5854);
			attr_dev(path5, "id", "Tracé_88");
			attr_dev(path5, "data-name", "Tracé 88");
			attr_dev(path5, "d", "M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z");
			attr_dev(path5, "transform", "translate(35.139 20.139) rotate(90)");
			attr_dev(path5, "fill", "#e42ef5");
			add_location(path5, file$1, 188, 10, 6110);
			attr_dev(path6, "id", "Tracé_89");
			attr_dev(path6, "data-name", "Tracé 89");
			attr_dev(path6, "d", "M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z");
			attr_dev(path6, "transform", "translate(16.422 33.712) rotate(180)");
			attr_dev(path6, "fill", "#e42ef5");
			add_location(path6, file$1, 195, 10, 6370);
			attr_dev(path7, "id", "Tracé_90");
			attr_dev(path7, "data-name", "Tracé 90");
			attr_dev(path7, "d", "M9.024,13.443,6.792,11l6.781-6.583L9.024,0l-6.2,6.431L0,4.421v9.022Z");
			attr_dev(path7, "transform", "translate(2.979 16.506) rotate(-90)");
			attr_dev(path7, "fill", "#e42ef5");
			add_location(path7, file$1, 202, 10, 6631);
			attr_dev(g2, "id", "exit-fullscreen");
			attr_dev(g2, "transform", "translate(1.729 2.178)");
			add_location(g2, file$1, 171, 8, 5541);
			attr_dev(svg1, "class", "btn-small-size svelte-189xs53");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg1, "width", "41");
			attr_dev(svg1, "height", "41");
			attr_dev(svg1, "viewBox", "0 0 41 41");
			add_location(svg1, file$1, 163, 6, 5338);
			attr_dev(div2, "class", "galery svelte-189xs53");
			add_location(div2, file$1, 94, 4, 2281);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, nav);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(nav, null);
			}

			append_dev(nav, t0);
			append_dev(nav, h5);
			append_dev(h5, t1);
			append_dev(div1, t2);
			append_dev(div1, h2);
			append_dev(h2, t3);
			append_dev(div1, t4);
			append_dev(div1, div0);
			div0.innerHTML = raw_value;
			insert_dev(target, t5, anchor);
			insert_dev(target, div2, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append_dev(div2, t6);
			append_dev(div2, button0);
			append_dev(button0, t7);
			append_dev(div2, t8);
			append_dev(div2, button1);
			append_dev(button1, t9);
			append_dev(div2, t10);
			append_dev(div2, svg0);
			append_dev(svg0, g1);
			append_dev(g1, circle0);
			append_dev(g1, g0);
			append_dev(g0, path0);
			append_dev(g0, path1);
			append_dev(g0, path2);
			append_dev(g0, path3);
			append_dev(div2, t11);
			append_dev(div2, svg1);
			append_dev(svg1, g2);
			append_dev(g2, circle1);
			append_dev(g2, path4);
			append_dev(g2, path5);
			append_dev(g2, path6);
			append_dev(g2, path7);
			append_dev(div2, t12);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(slimscroll.call(null, div0, { height: "70vh", color: "#e42ef5" })),
					listen_dev(button0, "click", /*prevSlide*/ ctx[4], false, false, false),
					listen_dev(button1, "click", /*nextSlide*/ ctx[5], false, false, false),
					listen_dev(svg0, "click", /*click_handler*/ ctx[6], false, false, false),
					listen_dev(svg1, "click", /*click_handler_1*/ ctx[7], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*post, urlSlug, firstImage*/ 9) {
				each_value_2 = /*info*/ ctx[8].lien;
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(nav, t0);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if ((!current || dirty & /*post*/ 1) && t3_value !== (t3_value = /*info*/ ctx[8].titre + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = t(/*info*/ ctx[8].description) + "")) div0.innerHTML = raw_value;
			if (dirty & /*urlpApi, post, imageShowIndex, fullSize*/ 7) {
				each_value_1 = /*info*/ ctx[8].galery;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div2, t6);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(76:2) {#each post as info}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t;
	let div;
	let div_class_value;
	let current;
	let each_value = /*post*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1t0knqz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Projet";
			attr_dev(div, "class", div_class_value = "projet " + /*fullSize*/ ctx[2] + " svelte-189xs53");
			add_location(div, file$1, 74, 0, 1655);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*fullSize, nextSlide, prevSlide, post, urlpApi, imageShowIndex, snarkdown, urlSlug, firstImage*/ 63) {
				each_value = /*post*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*fullSize*/ 4 && div_class_value !== (div_class_value = "projet " + /*fullSize*/ ctx[2] + " svelte-189xs53")) {
				attr_dev(div, "class", div_class_value);
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const projetQuery = src`
    query Projets($Slug: String!) {
      projets: projets(where: { Slug: $Slug }) {
        id
        titre
        description
        galery {
          id
          url
        }
        cover {
          url
        }
        lien {
          id
          projets {
            Slug
            titre
          }
        }
      }
    }
  `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const results = await client.query({
		query: projetQuery,
		variables: { Slug: params.slug }
	});

	return { post: results.data.projets };
}

const urlpApi = "http://51.210.96.39:1337";
const urlSlug = "Projet/";
let iAmScrollArea;
let iChangeMyHeight;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", slots, []);
	let { post } = $$props;
	let imageShowIndex = 1;

	const firstImage = () => {
		$$invalidate(1, imageShowIndex = 1);
	};

	const prevSlide = () => {
		if (imageShowIndex === 1 || imageShowIndex > post[0].galery.length) {
			$$invalidate(1, imageShowIndex = post[0].galery.length);
		} else {
			$$invalidate(1, imageShowIndex -= 1);
		}
	};

	const nextSlide = () => {
		if (imageShowIndex === post[0].galery.length) {
			$$invalidate(1, imageShowIndex = 1);
		} else {
			$$invalidate(1, imageShowIndex += 1);
		}
	};

	let fullSize;
	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(2, fullSize = "full-size");
	const click_handler_1 = () => $$invalidate(2, fullSize = "");

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql: src,
		snarkdown: t,
		Lightbox,
		slimscroll,
		projetQuery,
		preload,
		urlpApi,
		urlSlug,
		iAmScrollArea,
		iChangeMyHeight,
		listen,
		post,
		imageShowIndex,
		firstImage,
		prevSlide,
		nextSlide,
		fullSize
	});

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
		if ("imageShowIndex" in $$props) $$invalidate(1, imageShowIndex = $$props.imageShowIndex);
		if ("fullSize" in $$props) $$invalidate(2, fullSize = $$props.fullSize);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		post,
		imageShowIndex,
		fullSize,
		firstImage,
		prevSlide,
		nextSlide,
		click_handler,
		click_handler_1
	];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjlkY2ZlZGIzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlLXNsaW1zY3JvbGwvc3JjL3NsaW1zY3JvbGwuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MaWdodGJveC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL1Byb2pldC9bc2x1Z10uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBTbGltU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uICQoZWwpIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgJCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAkKGVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB2YXIgciA9IC88KFxcdyspPjxcXC9cXDE+JC8uZXhlYyhlbClcclxuICAgICAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgICAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChyWzFdKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWwgPSAoZWwgJiYgZWwubm9kZVR5cGUgPT09IDEpID8gZWwgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgICQucHJvdG90eXBlID0ge1xyXG4gICAgICAgIHBhcmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJCh0aGlzLmVsLnBhcmVudE5vZGUgfHwgdGhpcy5lbC5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VzdDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZWN0b3IpIHJldHVybiAkKGRvY3VtZW50KVxyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQoKVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudC5lbC5jbGFzc05hbWUgIT0gJChzZWxlY3RvcikuZWwuY2xhc3NOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXM6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZWwgPT09IG9iai5lbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVsLmNsYXNzTmFtZS5pbmRleE9mKGNsYXNzTmFtZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGlmICghY2xhc3NOYW1lIHx8IHR5cGVvZiBjbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkgcmV0dXJuXHJcbiAgICAgICAgICAgIHZhciBjbHMgPSB0aGlzLmVsLmNsYXNzTmFtZS5zcGxpdCgnICcpXHJcbiAgICAgICAgICAgIGNscy5wdXNoKGNsYXNzTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc05hbWUgPSBjbHMuam9pbignICcpLnRyaW0oKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3NzOiBmdW5jdGlvbiAoc3R5bGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZU9iaiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsLnN0eWxlW3N0eWxlT2JqXS5yZXBsYWNlKCdweCcsICcnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzdHlsZU9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHlsZU9ialtrZXldID09PSAnbnVtYmVyJyAmJiBwYXJzZUludChzdHlsZU9ialtrZXldKSkgc3R5bGVPYmpba2V5XSA9IHBhcnNlSW50KHN0eWxlT2JqW2tleV0pICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3pJbmRleCcpIHN0eWxlT2JqW2tleV0gPSBwYXJzZUludChzdHlsZU9ialtrZXldKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZVtrZXldID0gc3R5bGVPYmpba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3cmFwOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50KCkuZWwuaW5zZXJ0QmVmb3JlKG9iai5lbCwgdGhpcy5lbClcclxuICAgICAgICAgICAgb2JqLmFwcGVuZCh0aGlzKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwZW5kOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQob2JqLmVsKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsVG9wOiBmdW5jdGlvbiAoeSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNjcm9sbFRvcCA9IHBhcnNlSW50KHkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsLnNjcm9sbFRvcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3V0ZXJIZWlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWwub2Zmc2V0SGVpZ2h0IHx8IHRoaXMuZWwuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBob3ZlcjogZnVuY3Rpb24gKGhvdmVySW4sIGhvdmVyT3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZCgnbW91c2VlbnRlcicsIGhvdmVySW4pXHJcbiAgICAgICAgICAgIHRoaXMuYmluZCgnbW91c2VsZWF2ZScsIGhvdmVyT3V0KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmluZDogZnVuY3Rpb24gKHR5cGUsIGZuLCBjYXB0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGNhcHR1cmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XHJcbiAgICAgICAgICAgICAgICBldi5pbml0RXZlbnQodHlwZSwgY2FwdHVyZSB8fCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8g5Zyo5YWD57Sg5LiK5a2Y5YKo5Yib5bu655qE5LqL5Lu277yM5pa55L6/6Ieq5a6a5LmJ6Kem5Y+RXHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsWydldicgKyB0eXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsWydldicgKyB0eXBlXSA9IGV2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBmbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oZWxbJ2N1JyArIHR5cGVdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOiHquWumuS5ieWxnuaAp++8jOinpuWPkeS6i+S7tueUqFxyXG4gICAgICAgICAgICAgICAgICAgIGVsWydjdScgKyB0eXBlXSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZuRXYgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSAnY3UnICsgdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbi5jYWxsKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbnByb3BlcnR5Y2hhbmdlJywgZm5Fdik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Zyo5YWD57Sg5LiK5a2Y5YKo57uR5a6a55qEcHJvcGVydHljaGFuZ2Xkuovku7bvvIzmlrnkvr/liKDpmaRcclxuICAgICAgICAgICAgICAgIGlmICghZWxbJ2V2JyArIHR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxbJ2V2JyArIHR5cGVdID0gW2ZuRXZdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbFsnZXYnICsgdHlwZV0ucHVzaChmbkV2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLmVsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFsnZXYnICsgdHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChlbFsnZXYnICsgdHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmlLnlj5jlr7nlupToh6rlrprkuYnlsZ7mgKfvvIzop6blj5Hoh6rlrprkuYnkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICBlbFsnY3UnICsgdHlwZV0rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24gKHR5cGUsIGZuLCBjYXB0dXJlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXMuZWw7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgY2FwdHVyZSB8fCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBmbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyRXYgPSBlbFsnZXYnICsgdHlwZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyRXYgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyRXYubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yig6Zmk6K+l5pa55rOV5ZCN5LiL5omA5pyJ57uR5a6a55qEcHJvcGVydHljaGFuZ2Xkuovku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZGV0YWNoRXZlbnQoJ29ucHJvcGVydHljaGFuZ2UnLCBhcnJFdltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkLmV4dGVuZCA9IGZ1bmN0aW9uIChkZWVwKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gMVxyXG4gICAgICAgIGlmICh0eXBlb2YgZGVlcCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgc3RhcnQgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYmpzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBzdGFydCksXHJcbiAgICAgICAgICAgIG5ld09iaiA9IHt9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2Jqcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9ianMgIT09ICdvYmplY3QnKSByZXR1cm5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9ianNbaV0pIHtcclxuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gdHlwZW9mIG9ianNbaV1ba2V5XSA9PT0gJ29iamVjdCcgJiYgZGVlcCA9PT0gdHJ1ZSA/ICQuZXh0ZW5kKHRydWUsIG9ianNbaV1ba2V5XSkgOiBvYmpzW2ldW2tleV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3T2JqXHJcbiAgICB9XHJcblxyXG4gICAgJC5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhKG9iaiBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFNsaW1TY3JvbGwoZWwsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XHJcblxyXG4gICAgICAgICAgICAvLyB3aWR0aCBpbiBwaXhlbHMgb2YgdGhlIHZpc2libGUgc2Nyb2xsIGFyZWFcclxuICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuXHJcbiAgICAgICAgICAgIC8vIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIHZpc2libGUgc2Nyb2xsIGFyZWFcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG5cclxuICAgICAgICAgICAgLy8gd2lkdGggaW4gcGl4ZWxzIG9mIHRoZSBzY3JvbGxiYXIgYW5kIHJhaWxcclxuICAgICAgICAgICAgc2l6ZTogJzdweCcsXHJcblxyXG4gICAgICAgICAgICAvLyBzY3JvbGxiYXIgY29sb3IsIGFjY2VwdHMgYW55IGhleC9jb2xvciB2YWx1ZVxyXG4gICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG5cclxuICAgICAgICAgICAgLy8gc2Nyb2xsYmFyIHBvc2l0aW9uIC0gbGVmdC9yaWdodFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHJcbiAgICAgICAgICAgIC8vIGRpc3RhbmNlIGluIHBpeGVscyBiZXR3ZWVuIHRoZSBzaWRlIGVkZ2UgYW5kIHRoZSBzY3JvbGxiYXJcclxuICAgICAgICAgICAgZGlzdGFuY2U6ICcxcHgnLFxyXG5cclxuICAgICAgICAgICAgLy8gZGVmYXVsdCBzY3JvbGwgcG9zaXRpb24gb24gbG9hZCAtIHRvcCAvIGJvdHRvbSAvICQoJ3NlbGVjdG9yJylcclxuICAgICAgICAgICAgc3RhcnQ6ICd0b3AnLFxyXG5cclxuICAgICAgICAgICAgLy8gc2V0cyBzY3JvbGxiYXIgb3BhY2l0eVxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQsXHJcblxyXG4gICAgICAgICAgICAvLyBlbmFibGVzIGFsd2F5cy1vbiBtb2RlIGZvciB0aGUgc2Nyb2xsYmFyXHJcbiAgICAgICAgICAgIGFsd2F5c1Zpc2libGU6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugc2hvdWxkIGhpZGUgdGhlIHNjcm9sbGJhciB3aGVuIHVzZXIgaXMgaG92ZXJpbmcgb3ZlclxyXG4gICAgICAgICAgICBkaXNhYmxlRmFkZU91dDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvLyBzZXRzIHZpc2liaWxpdHkgb2YgdGhlIHJhaWxcclxuICAgICAgICAgICAgcmFpbFZpc2libGU6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gc2V0cyByYWlsIGNvbG9yXHJcbiAgICAgICAgICAgIHJhaWxDb2xvcjogJyMzMzMnLFxyXG5cclxuICAgICAgICAgICAgLy8gc2V0cyByYWlsIG9wYWNpdHlcclxuICAgICAgICAgICAgcmFpbE9wYWNpdHk6IDAuMixcclxuXHJcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgIHdlIHNob3VsZCB1c2UgalF1ZXJ5IFVJIERyYWdnYWJsZSB0byBlbmFibGUgYmFyIGRyYWdnaW5nXHJcbiAgICAgICAgICAgIHJhaWxEcmFnZ2FibGU6IHRydWUsXHJcblxyXG4gICAgICAgICAgICAvLyBkZWZhdXRsdCBDU1MgY2xhc3Mgb2YgdGhlIHNsaW1zY3JvbGwgcmFpbFxyXG4gICAgICAgICAgICByYWlsQ2xhc3M6ICdzbGltU2Nyb2xsUmFpbCcsXHJcblxyXG4gICAgICAgICAgICAvLyBkZWZhdXRsdCBDU1MgY2xhc3Mgb2YgdGhlIHNsaW1zY3JvbGwgYmFyXHJcbiAgICAgICAgICAgIGJhckNsYXNzOiAnc2xpbVNjcm9sbEJhcicsXHJcblxyXG4gICAgICAgICAgICAvLyBkZWZhdXRsdCBDU1MgY2xhc3Mgb2YgdGhlIHNsaW1zY3JvbGwgd3JhcHBlclxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdzbGltU2Nyb2xsRGl2JyxcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1vdXNld2hlZWwgc2hvdWxkIHNjcm9sbCB0aGUgd2luZG93IGlmIHdlIHJlYWNoIHRvcC9ib3R0b21cclxuICAgICAgICAgICAgYWxsb3dQYWdlU2Nyb2xsOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCBhbW91bnQgYXBwbGllZCB0byBlYWNoIG1vdXNlIHdoZWVsIHN0ZXBcclxuICAgICAgICAgICAgd2hlZWxTdGVwOiAyMCxcclxuXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCBhbW91bnQgYXBwbGllZCB3aGVuIHVzZXIgaXMgdXNpbmcgZ2VzdHVyZXNcclxuICAgICAgICAgICAgdG91Y2hTY3JvbGxTdGVwOiAyMDAsXHJcblxyXG4gICAgICAgICAgICAvLyBzZXRzIGJvcmRlciByYWRpdXNcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnN3B4JyxcclxuXHJcbiAgICAgICAgICAgIC8vIHNldHMgYm9yZGVyIHJhZGl1cyBvZiB0aGUgcmFpbFxyXG4gICAgICAgICAgICByYWlsQm9yZGVyUmFkaXVzOiAnN3B4J1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIG8gPSAkLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucylcclxuXHJcbiAgICAgICAgLy8gZG8gaXQgZm9yIGV2ZXJ5IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHNlbGVjdG9yXHJcbiAgICAgICAgLy8gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIGlzT3ZlclBhbmVsLCBpc092ZXJCYXIsIGlzRHJhZ2csIHF1ZXVlSGlkZSwgdG91Y2hEaWYsXHJcbiAgICAgICAgICAgIGJhckhlaWdodCwgcGVyY2VudFNjcm9sbCwgbGFzdFNjcm9sbCxcclxuICAgICAgICAgICAgZGl2UyA9ICc8ZGl2PjwvZGl2PicsXHJcbiAgICAgICAgICAgIG1pbkJhckhlaWdodCA9IDMwLFxyXG4gICAgICAgICAgICByZWxlYXNlU2Nyb2xsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHVzZWQgaW4gZXZlbnQgaGFuZGxlcnMgYW5kIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXHJcbiAgICAgICAgLy8gdmFyIG1lID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgbWUgPSAkKGVsKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB3ZSBhcmUgbm90IGJpbmRpbmcgaXQgYWdhaW5cclxuICAgICAgICBpZiAobWUucGFyZW50KCkuaGFzQ2xhc3Moby53cmFwcGVyQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXJ0IGZyb20gbGFzdCBiYXIgcG9zaXRpb25cclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IG1lLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmluZCBiYXIgYW5kIHJhaWxcclxuICAgICAgICAgICAgYmFyID0gbWUuc2libGluZ3MoJy4nICsgby5iYXJDbGFzcyk7XHJcbiAgICAgICAgICAgIHJhaWwgPSBtZS5zaWJsaW5ncygnLicgKyBvLnJhaWxDbGFzcyk7XHJcblxyXG4gICAgICAgICAgICBnZXRCYXJIZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIHNob3VsZCBzY3JvbGwgZXhpc3RpbmcgaW5zdGFuY2VcclxuICAgICAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gUGFzcyBoZWlnaHQ6IGF1dG8gdG8gYW4gZXhpc3Rpbmcgc2xpbXNjcm9sbCBvYmplY3QgdG8gZm9yY2UgYSByZXNpemUgYWZ0ZXIgY29udGVudHMgaGF2ZSBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICBpZiAoJ2hlaWdodCcgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlaWdodCA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUucGFyZW50KCkuY3NzKHsgaGVpZ2h0OiAnYXV0bycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY3NzKHsgaGVpZ2h0OiAnYXV0bycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IG1lLnBhcmVudCgpLnBhcmVudCgpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUucGFyZW50KCkuY3NzKHsgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuY3NzKHsgaGVpZ2h0OiBoZWlnaHQgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdoZWlnaHQnIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcmVudCgpLmNzcyh7IGhlaWdodDogaCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5jc3MoeyBoZWlnaHQ6IGggfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCdzY3JvbGxUbycgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGp1bXAgdG8gYSBzdGF0aWMgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBwYXJzZUludChvLnNjcm9sbFRvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdzY3JvbGxCeScgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGp1bXAgYnkgdmFsdWUgcGl4ZWxzXHJcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHBhcnNlSW50KG8uc2Nyb2xsQnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJ2Rlc3Ryb3knIGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgc2xpbXNjcm9sbCBlbGVtZW50c1xyXG4gICAgICAgICAgICAgICAgICAgIGJhci5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByYWlsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLnVud3JhcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudCBieSB0aGUgZ2l2ZW4gb2Zmc2V0XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50KG9mZnNldCwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmICgkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgaWYgKCdkZXN0cm95JyBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG9wdGlvbmFsbHkgc2V0IGhlaWdodCB0byB0aGUgcGFyZW50J3MgaGVpZ2h0XHJcbiAgICAgICAgby5oZWlnaHQgPSAoby5oZWlnaHQgPT09ICdhdXRvJykgPyBtZS5wYXJlbnQoKS5vdXRlckhlaWdodCgpIDogby5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIHdyYXAgY29udGVudFxyXG4gICAgICAgIHZhciB3cmFwcGVyID0gJChkaXZTKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3Moby53cmFwcGVyQ2xhc3MpXHJcbiAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogby53aWR0aCxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogby5oZWlnaHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBzdHlsZSBmb3IgdGhlIGRpdlxyXG4gICAgICAgIG1lLmNzcyh7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgd2lkdGg6IG8ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogby5oZWlnaHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHNjcm9sbGJhciByYWlsXHJcbiAgICAgICAgdmFyIHJhaWwgPSAkKGRpdlMpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhvLnJhaWxDbGFzcylcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogby5zaXplLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IChvLmFsd2F5c1Zpc2libGUgJiYgby5yYWlsVmlzaWJsZSkgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBvLnJhaWxCb3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvLnJhaWxDb2xvcixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IG8ucmFpbE9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHNjcm9sbGJhclxyXG4gICAgICAgIHZhciBiYXIgPSAkKGRpdlMpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhvLmJhckNsYXNzKVxyXG4gICAgICAgICAgICAuY3NzKHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG8uY29sb3IsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogby5zaXplLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBvLm9wYWNpdHksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBvLmFsd2F5c1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBvLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgIEJvcmRlclJhZGl1czogby5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICBNb3pCb3JkZXJSYWRpdXM6IG8uYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgV2Via2l0Qm9yZGVyUmFkaXVzOiBvLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgcG9zaXRpb25cclxuICAgICAgICB2YXIgcG9zQ3NzID0gKG8ucG9zaXRpb24gPT09ICdyaWdodCcpID8geyByaWdodDogby5kaXN0YW5jZSB9IDogeyBsZWZ0OiBvLmRpc3RhbmNlIH07XHJcbiAgICAgICAgcmFpbC5jc3MocG9zQ3NzKTtcclxuICAgICAgICBiYXIuY3NzKHBvc0Nzcyk7XHJcblxyXG4gICAgICAgIC8vIHdyYXAgaXRcclxuICAgICAgICBtZS53cmFwKHdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBhcHBlbmQgdG8gcGFyZW50IGRpdlxyXG4gICAgICAgIG1lLnBhcmVudCgpLmFwcGVuZChiYXIpO1xyXG4gICAgICAgIG1lLnBhcmVudCgpLmFwcGVuZChyYWlsKTtcclxuXHJcblxyXG4gICAgICAgIC8vYWxsIGJpbmRpbmcgZXZlbnRzIGNhbGxiYWNrXHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IHtcclxuICAgICAgICAgICAgdG91Y2hTdGFydDogZnVuY3Rpb24gKGUsIGIpIHtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZCB3aGVyZSB0b3VjaCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hEaWYgPSBlLnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvdWNoTW92ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHRoZSBwYWdlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxlYXNlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaG93IGZhciB1c2VyIHN3aXBlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWZmID0gKHRvdWNoRGlmIC0gZS50b3VjaGVzWzBdLnBhZ2VZKSAvIG8udG91Y2hTY3JvbGxTdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbCBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsQ29udGVudChkaWZmLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaERpZiA9IGUudG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaG92ZXJJbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXNPdmVyUGFuZWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2hvd0JhcigpO1xyXG4gICAgICAgICAgICAgICAgaGlkZUJhcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBob3Zlck91dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXNPdmVyUGFuZWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGhpZGVCYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFySG92ZXJJbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaXNPdmVyQmFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFySG92ZXJPdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlzT3ZlckJhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYWlsSG92ZXJJbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0JhcigpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByYWlsSG92ZXJPdXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVCYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFyTW91c2VEb3duOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgIHZhciB0ID0gcGFyc2VGbG9hdChiYXIuY3NzKCd0b3AnKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgICAgICAgICAgICAgaXNEcmFnZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW91c2Vtb3ZlKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyclRvcCA9IHQgKyBlLnBhZ2VZIC0gcGFnZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFyLmNzcyh7IHRvcDogY3VyclRvcCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIGN1cnJUb3AsIGZhbHNlKTsvLyBzY3JvbGwgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdXNldXAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2cgPSBmYWxzZTsgaGlkZUJhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkb2MudW5iaW5kKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkb2MudW5iaW5kKCdtb3VzZXVwJywgbW91c2V1cCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJGRvYy5iaW5kKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG5cclxuICAgICAgICAgICAgICAgICRkb2MuYmluZCgnbW91c2V1cCcsIG1vdXNldXApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJTZWxlY3RlZFN0YXJ0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbWFrZSBpdCBkcmFnZ2FibGUgYW5kIG5vIGxvbmdlciBkZXBlbmRlbnQgb24gdGhlIGpxdWVyeVVJXHJcbiAgICAgICAgaWYgKG8ucmFpbERyYWdnYWJsZSkge1xyXG4gICAgICAgICAgICBiYXIuYmluZCgnbW91c2Vkb3duJywgZXZlbnRzLmJhck1vdXNlRG93bikuYmluZCgnc2VsZWN0c3RhcnQnLCBldmVudHMuYmFyU2VsZWN0ZWRTdGFydCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvbiByYWlsIG92ZXJcclxuICAgICAgICByYWlsLmhvdmVyKGV2ZW50cy5yYWlsSG92ZXJJbiwgZXZlbnRzLnJhaWxIb3Zlck91dCk7XHJcblxyXG4gICAgICAgIC8vIG9uIGJhciBvdmVyXHJcbiAgICAgICAgYmFyLmhvdmVyKGV2ZW50cy5iYXJIb3ZlckluLCBldmVudHMuYmFySG92ZXJPdXQpO1xyXG5cclxuICAgICAgICAvLyBzaG93IG9uIHBhcmVudCBtb3VzZW92ZXJcclxuICAgICAgICBtZS5ob3ZlcihldmVudHMuaG92ZXJJbiwgZXZlbnRzLmhvdmVyT3V0KTtcclxuXHJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3IgbW9iaWxlXHJcbiAgICAgICAgbWUuYmluZCgndG91Y2hzdGFydCcsIGV2ZW50cy50b3VjaFN0YXJ0KTtcclxuXHJcbiAgICAgICAgbWUuYmluZCgndG91Y2htb3ZlJywgZXZlbnRzLnRvdWNoTW92ZSk7XHJcblxyXG4gICAgICAgIC8vIHNldCB1cCBpbml0aWFsIGhlaWdodFxyXG4gICAgICAgIGdldEJhckhlaWdodCgpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBzdGFydCBwb3NpdGlvblxyXG4gICAgICAgIGlmIChvLnN0YXJ0ID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudCB0byBib3R0b21cclxuICAgICAgICAgICAgYmFyLmNzcyh7IHRvcDogbWUub3V0ZXJIZWlnaHQoKSAtIGJhci5vdXRlckhlaWdodCgpIH0pO1xyXG4gICAgICAgICAgICBzY3JvbGxDb250ZW50KDAsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvLnN0YXJ0ICE9PSAndG9wJykge1xyXG4gICAgICAgICAgICAvLyBhc3N1bWUgalF1ZXJ5IHNlbGVjdG9yXHJcbiAgICAgICAgICAgIHNjcm9sbENvbnRlbnQoJChvLnN0YXJ0KS5wb3NpdGlvbigpLnRvcCwgbnVsbCwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgYmFyIHN0YXlzIGhpZGRlblxyXG4gICAgICAgICAgICBpZiAoIW8uYWx3YXlzVmlzaWJsZSkgeyBiYXIuaGlkZSgpOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhdHRhY2ggc2Nyb2xsIGV2ZW50c1xyXG4gICAgICAgIGF0dGFjaFdoZWVsKGVsKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gX29uV2hlZWwoZSkge1xyXG4gICAgICAgICAgICAvLyB1c2UgbW91c2Ugd2hlZWwgb25seSB3aGVuIG1vdXNlIGlzIG92ZXJcclxuICAgICAgICAgICAgaWYgKCFpc092ZXJQYW5lbCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChlLndoZWVsRGVsdGEpIHsgZGVsdGEgPSAtZS53aGVlbERlbHRhIC8gMTIwOyB9XHJcbiAgICAgICAgICAgIGlmIChlLmRldGFpbCkgeyBkZWx0YSA9IGUuZGV0YWlsIC8gMzsgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjVGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5jbG9zZXN0KCcuJyArIG8ud3JhcHBlckNsYXNzKS5pcyhtZS5wYXJlbnQoKSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNjcm9sbCBjb250ZW50XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxDb250ZW50KGRlbHRhLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc3RvcCB3aW5kb3cgc2Nyb2xsXHJcbiAgICAgICAgICAgIGlmIChlLnByZXZlbnREZWZhdWx0ICYmICFyZWxlYXNlU2Nyb2xsKSB7IGUucHJldmVudERlZmF1bHQoKTsgfVxyXG4gICAgICAgICAgICBpZiAoIXJlbGVhc2VTY3JvbGwpIHsgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlOyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxDb250ZW50KHksIGlzV2hlZWwsIGlzSnVtcCkge1xyXG4gICAgICAgICAgICByZWxlYXNlU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IHk7XHJcbiAgICAgICAgICAgIHZhciBtYXhUb3AgPSBtZS5vdXRlckhlaWdodCgpIC0gYmFyLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNXaGVlbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBiYXIgd2l0aCBtb3VzZSB3aGVlbFxyXG4gICAgICAgICAgICAgICAgZGVsdGEgPSBwYXJzZUludChiYXIuY3NzKCd0b3AnKSkgKyB5ICogcGFyc2VJbnQoby53aGVlbFN0ZXApIC8gMTAwICogYmFyLm91dGVySGVpZ2h0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBiYXIsIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IGdvIG91dFxyXG4gICAgICAgICAgICAgICAgZGVsdGEgPSBNYXRoLm1pbihNYXRoLm1heChkZWx0YSwgMCksIG1heFRvcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgc2Nyb2xsaW5nIGRvd24sIG1ha2Ugc3VyZSBhIGZyYWN0aW9uYWwgY2hhbmdlIHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsIHBvc2l0aW9uIGlzbid0IHJvdW5kZWQgYXdheSB3aGVuIHRoZSBzY3JvbGxiYXIncyBDU1MgaXMgc2V0XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGZsb29yaW5nIG9mIGRlbHRhIHdvdWxkIGhhcHBlbmVkIGF1dG9tYXRpY2FsbHkgd2hlblxyXG4gICAgICAgICAgICAgICAgLy8gYmFyLmNzcyBpcyBzZXQgYmVsb3csIGJ1dCB3ZSBmbG9vciBoZXJlIGZvciBjbGFyaXR5XHJcbiAgICAgICAgICAgICAgICBkZWx0YSA9ICh5ID4gMCkgPyBNYXRoLmNlaWwoZGVsdGEpIDogTWF0aC5mbG9vcihkZWx0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc2Nyb2xsIHRoZSBzY3JvbGxiYXJcclxuICAgICAgICAgICAgICAgIGJhci5jc3MoeyB0b3A6IGRlbHRhICsgJ3B4JyB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGFjdHVhbCBzY3JvbGwgYW1vdW50XHJcbiAgICAgICAgICAgIHBlcmNlbnRTY3JvbGwgPSBwYXJzZUludChiYXIuY3NzKCd0b3AnKSkgLyAobWUub3V0ZXJIZWlnaHQoKSAtIGJhci5vdXRlckhlaWdodCgpKTtcclxuICAgICAgICAgICAgLy8gZGVsdGEgPSBwZXJjZW50U2Nyb2xsICogKG1lWzBdLnNjcm9sbEhlaWdodCAtIG1lLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICBkZWx0YSA9IHBlcmNlbnRTY3JvbGwgKiAobWUuZWwuc2Nyb2xsSGVpZ2h0IC0gbWUub3V0ZXJIZWlnaHQoKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNKdW1wKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YSA9IHk7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgb2Zmc2V0VG9wID0gZGVsdGEgLyBtZVswXS5zY3JvbGxIZWlnaHQgKiBtZS5vdXRlckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldFRvcCA9IGRlbHRhIC8gbWUuZWwuc2Nyb2xsSGVpZ2h0ICogbWUub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldFRvcCA9IE1hdGgubWluKE1hdGgubWF4KG9mZnNldFRvcCwgMCksIG1heFRvcCk7XHJcbiAgICAgICAgICAgICAgICBiYXIuY3NzKHsgdG9wOiBvZmZzZXRUb3AgKyAncHgnIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgY29udGVudFxyXG4gICAgICAgICAgICBtZS5zY3JvbGxUb3AoZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZmlyZSBzY3JvbGxpbmcgZXZlbnRcclxuICAgICAgICAgICAgbWUudHJpZ2dlcignc2xpbXNjcm9sbGluZycsIH5+ZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW5zdXJlIGJhciBpcyB2aXNpYmxlXHJcbiAgICAgICAgICAgIHNob3dCYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRyaWdnZXIgaGlkZSB3aGVuIHNjcm9sbCBpcyBzdG9wcGVkXHJcbiAgICAgICAgICAgIGhpZGVCYXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaFdoZWVsKHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIF9vbldoZWVsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIF9vbldoZWVsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudCgnb25tb3VzZXdoZWVsJywgX29uV2hlZWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEJhckhlaWdodCgpIHtcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHNjcm9sbGJhciBoZWlnaHQgYW5kIG1ha2Ugc3VyZSBpdCBpcyBub3QgdG9vIHNtYWxsXHJcbiAgICAgICAgICAgIGJhckhlaWdodCA9IE1hdGgubWF4KChtZS5vdXRlckhlaWdodCgpIC8gbWUuZWwuc2Nyb2xsSGVpZ2h0KSAqIG1lLm91dGVySGVpZ2h0KCksIG1pbkJhckhlaWdodCk7XHJcbiAgICAgICAgICAgIGJhci5jc3MoeyBoZWlnaHQ6IGJhckhlaWdodCArICdweCcgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBoaWRlIHNjcm9sbGJhciBpZiBjb250ZW50IGlzIG5vdCBsb25nIGVub3VnaFxyXG4gICAgICAgICAgICB2YXIgZGlzcGxheSA9IGJhckhlaWdodCA9PSBtZS5vdXRlckhlaWdodCgpID8gJ25vbmUnIDogJ2Jsb2NrJztcclxuICAgICAgICAgICAgYmFyLmNzcyh7IGRpc3BsYXk6IGRpc3BsYXkgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93QmFyKCkge1xyXG4gICAgICAgICAgICAvLyByZWNhbGN1bGF0ZSBiYXIgaGVpZ2h0XHJcbiAgICAgICAgICAgIGdldEJhckhlaWdodCgpO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocXVldWVIaWRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHdoZW4gYmFyIHJlYWNoZWQgdG9wIG9yIGJvdHRvbVxyXG4gICAgICAgICAgICBpZiAocGVyY2VudFNjcm9sbCA9PSB+fnBlcmNlbnRTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIC8vcmVsZWFzZSB3aGVlbFxyXG4gICAgICAgICAgICAgICAgcmVsZWFzZVNjcm9sbCA9IG8uYWxsb3dQYWdlU2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHB1Ymxpc2ggYXBwcm9wb3JpYXRlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdFNjcm9sbCAhPSBwZXJjZW50U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZyA9ICh+fnBlcmNlbnRTY3JvbGwgPT0gMCkgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLnRyaWdnZXIoJ3NsaW1zY3JvbGwnLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVsZWFzZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RTY3JvbGwgPSBwZXJjZW50U2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgLy8gc2hvdyBvbmx5IHdoZW4gcmVxdWlyZWRcclxuICAgICAgICAgICAgaWYgKGJhckhlaWdodCA+PSBtZS5vdXRlckhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvL2FsbG93IHdpbmRvdyBzY3JvbGxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGJhci5zdG9wKHRydWUsIHRydWUpLmZhZGVJbignZmFzdCcpO1xyXG4gICAgICAgICAgICBiYXIuc2hvdygpXHJcbiAgICAgICAgICAgIC8vIGlmIChvLnJhaWxWaXNpYmxlKSB7IHJhaWwuc3RvcCh0cnVlLCB0cnVlKS5mYWRlSW4oJ2Zhc3QnKTsgfVxyXG4gICAgICAgICAgICBpZiAoby5yYWlsVmlzaWJsZSkgeyByYWlsLnNob3coKTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlkZUJhcigpIHtcclxuICAgICAgICAgICAgLy8gb25seSBoaWRlIHdoZW4gb3B0aW9ucyBhbGxvdyBpdFxyXG4gICAgICAgICAgICBpZiAoIW8uYWx3YXlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcXVldWVIaWRlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoby5kaXNhYmxlRmFkZU91dCAmJiBpc092ZXJQYW5lbCkgJiYgIWlzT3ZlckJhciAmJiAhaXNEcmFnZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBiYXIuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByYWlsLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFyLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWlsLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdW5iaW5kKCkge1xyXG4gICAgICAgICAgICAvLyBtYWtlIGl0IGRyYWdnYWJsZSBhbmQgbm8gbG9uZ2VyIGRlcGVuZGVudCBvbiB0aGUganF1ZXJ5VUlcclxuICAgICAgICAgICAgYmFyLnVuYmluZCgnbW91c2Vkb3duJywgZXZlbnRzLmJhck1vdXNlRG93bikudW5iaW5kKCdzZWxlY3RzdGFydCcsIGV2ZW50cy5iYXJTZWxlY3RlZFN0YXJ0KTtcclxuICAgICAgICAgICAgLy8gb24gcmFpbCBvdmVyXHJcbiAgICAgICAgICAgIHJhaWwudW5iaW5kKCdtb3VzZWVudGVyJywgZXZlbnRzLnJhaWxIb3ZlckluKS51bmJpbmQoJ21vdXNlbGVhdmUnLCBldmVudHMucmFpbEhvdmVyT3V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG9uIGJhciBvdmVyXHJcbiAgICAgICAgICAgIGJhci51bmJpbmQoJ21vdXNlZW50ZXInLCBldmVudHMuYmFySG92ZXJJbikudW5iaW5kKCdtb3VzZWxlYXZlJywgZXZlbnRzLmJhckhvdmVyT3V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNob3cgb24gcGFyZW50IG1vdXNlb3ZlclxyXG4gICAgICAgICAgICBtZS51bmJpbmQoJ21vdXNlZW50ZXInLCBldmVudHMuaG92ZXJJbikudW5iaW5kKCdtb3VzZWxlYXZlJywgZXZlbnRzLmhvdmVyT3V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN1cHBvcnQgZm9yIG1vYmlsZVxyXG4gICAgICAgICAgICBtZS51bmJpbmQoJ3RvdWNoc3RhcnQnLCBldmVudHMudG91Y2hTdGFydCk7XHJcblxyXG4gICAgICAgICAgICBtZS51bmJpbmQoJ3RvdWNobW92ZScsIGV2ZW50cy50b3VjaE1vdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJhci51bmJpbmQoJ21vdXNlZG93bicsIGV2ZW50cy5iYXJNb3VzZURvd24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnVuYmluZCgnbW91c2VlbnRlcicsIGV2ZW50cy5iYXJIb3ZlckluKVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ21vdXNlbGVhdmUnLCBldmVudHMuYmFySG92ZXJPdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVuYmluZCgnc2VsZWN0c3RhcnQnLCBldmVudHMuYmFyU2VsZWN0ZWRTdGFydCk7XHJcbiAgICAgICAgICAgICAgICByYWlsLnVuYmluZCgnbW91c2VlbnRlcicsIGV2ZW50cy5yYWlsSG92ZXJJbilcclxuICAgICAgICAgICAgICAgICAgICAudW5iaW5kKCdtb3VzZWxlYXZlJywgZXZlbnRzLnJhaWxIb3Zlck91dCk7XHJcbiAgICAgICAgICAgICAgICBiYXIudW5iaW5kKCdtb3VzZWVudGVyJywgZXZlbnRzLmJhckhvdmVySW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLnVuYmluZCgnbW91c2VsZWF2ZScsIGV2ZW50cy5iYXJIb3Zlck91dCk7XHJcbiAgICAgICAgICAgICAgICBtZS51bmJpbmQoJ21vdXNlZW50ZXInLCBldmVudHMuaG92ZXJJbilcclxuICAgICAgICAgICAgICAgICAgICAudW5iaW5kKCdtb3VzZWxlYXZlJywgZXZlbnRzLmhvdmVyT3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ3RvdWNoc3RhcnQnLCBldmVudHMudG91Y2hTdGFydClcclxuICAgICAgICAgICAgICAgICAgICAudW5iaW5kKCd0b3VjaG1vdmUnLCBldmVudHMudG91Y2hNb3ZlKTtcclxuICAgICAgICAgICAgICAgIGJhci5lbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHJhaWwuZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBTbGltU2Nyb2xsXHJcbn0pKClcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVud3JhcChub2RlKSB7XHJcbiAgICBpZihub2RlICE9IHVuZGVmaW5lZCAmJiBub2RlICE9IG51bGwpXHJcbiAgICAgICAgbm9kZS5yZXBsYWNlV2l0aCguLi5ub2RlLmNoaWxkTm9kZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2xpbXNjcm9sbChub2RlLCBvcHRpb25zKSB7XHJcbiAgICAvLyB0aGUgbm9kZSBoYXMgYmVlbiBtb3VudGVkIGluIHRoZSBET01cclxuICAgIFxyXG4gICAgbGV0IHNsaW0gID0gU2xpbVNjcm9sbChub2RlLG9wdGlvbnMpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZShvcHRpb25zKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNsaW0udW5iaW5kKClcclxuICAgICAgICAgICAgdW53cmFwKG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgICAgICAgICAgIHNsaW0gID0gU2xpbVNjcm9sbChub2RlLG9wdGlvbnMpXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIC8vIHRoZSBub2RlIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgICAgIHNsaW0udW5iaW5kKCk7XHJcbiAgICAgICAgICAgIHVud3JhcChub2RlLnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbiIsIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpbWFnZVVybDtcbiAgICBleHBvcnQgbGV0IGFsdGVyblRleHQ7XG4gICAgZXhwb3J0IGxldCBzbGlkZU5vO1xuICAgIGV4cG9ydCBsZXQgdG90YWxTbGlkZTtcbiAgICBleHBvcnQgbGV0IGltYWdlU2hvd2luZztcbiAgICBleHBvcnQgbGV0IGltZ0Z1bGxTaXplO1xuICAgIGV4cG9ydCBsZXQgdmlkZW9Qb3N0ZXI7XG4gICAgXG4gICAgbGV0IHJlZ2V4ID0gLy5tcDQkLztcbjwvc2NyaXB0PlxuPGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfT5cbiAgICA8ZGl2IGNsYXNzPVwibnVtYmVydGV4dFwiPntzbGlkZU5vfSAvIHt0b3RhbFNsaWRlfTwvZGl2PlxuICAgIHsjaWYgaW1hZ2VVcmwubWF0Y2gocmVnZXgpfVxuICAgIDx2aWRlbyBjbGFzcz17aW1nRnVsbFNpemV9IHBvc3Rlcj17dmlkZW9Qb3N0ZXJ9IHNyYz17aW1hZ2VVcmx9IGNvbnRyb2xzICB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgIDx0cmFjayBraW5kPVwiY2FwdGlvbnNcIiAgLz5cbiAgICA8L3ZpZGVvPlxuICAgIHs6ZWxzZX1cbiAgICA8aW1nIGNsYXNzPXtpbWdGdWxsU2l6ZX0gc3JjPXtpbWFnZVVybH0gIGFsdD17YWx0ZXJuVGV4dH0gLz5cbiAgICB7L2lmfVxuPC9kaXY+XG5cbjxzdHlsZT5cbi5teVNsaWRlcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gXG4gICAgfVxuLnNob3d7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubnVtYmVydGV4dCB7XG4gIGNvbG9yOiAgcmdiKDIyOCwgNDYsIDI0NSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy10b3A6IDhweCA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNSk7XG4gICAgfVxuaW1nLHZpZGVve1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5pbWctZnVsbC1zaXplIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuPC9zdHlsZT4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG4gIGltcG9ydCBzbmFya2Rvd24gZnJvbSBcInNuYXJrZG93blwiO1xuICBpbXBvcnQgTGlnaHRib3ggZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9MaWdodGJveC5zdmVsdGVcIjtcbiAgaW1wb3J0IHtzbGltc2Nyb2xsfSBmcm9tIFwic3ZlbHRlLXNsaW1zY3JvbGxcIlxuXG4gIGNvbnN0IHByb2pldFF1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IFByb2pldHMoJFNsdWc6IFN0cmluZyEpIHtcbiAgICAgIHByb2pldHM6IHByb2pldHMod2hlcmU6IHsgU2x1ZzogJFNsdWcgfSkge1xuICAgICAgICBpZFxuICAgICAgICB0aXRyZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBnYWxlcnkge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgICAgY292ZXIge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICAgIGxpZW4ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgcHJvamV0cyB7XG4gICAgICAgICAgICBTbHVnXG4gICAgICAgICAgICB0aXRyZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgIHVyaTogXCJodHRwOi8vNTEuMjEwLjk2LjM5OjEzMzcvZ3JhcGhxbFwiLFxuICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICBxdWVyeTogcHJvamV0UXVlcnksXG4gICAgICB2YXJpYWJsZXM6IHsgU2x1ZzogcGFyYW1zLnNsdWcgfSxcbiAgICB9KTtcbiAgICByZXR1cm4geyBwb3N0OiByZXN1bHRzLmRhdGEucHJvamV0cyB9O1xuICB9XG4gIGNvbnN0IHVybHBBcGkgPSBcImh0dHA6Ly81MS4yMTAuOTYuMzk6MTMzN1wiO1xuICBjb25zdCB1cmxTbHVnID0gXCJQcm9qZXQvXCI7XG4gIGxldCBpQW1TY3JvbGxBcmVhO1xuICBsZXQgaUNoYW5nZU15SGVpZ2h0O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGxpc3RlbiB9IGZyb20gXCJzdmVsdGUvaW50ZXJuYWxcIjtcbiAgZXhwb3J0IGxldCBwb3N0O1xuICBsZXQgaW1hZ2VTaG93SW5kZXggPSAxO1xuICBjb25zdCBmaXJzdEltYWdlID0gKCkgPT4ge1xuICAgIGltYWdlU2hvd0luZGV4ID0gMTtcbiAgfTtcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChpbWFnZVNob3dJbmRleCA9PT0gMSB8fCBpbWFnZVNob3dJbmRleCA+IHBvc3RbMF0uZ2FsZXJ5Lmxlbmd0aCkge1xuICAgICAgaW1hZ2VTaG93SW5kZXggPSBwb3N0WzBdLmdhbGVyeS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltYWdlU2hvd0luZGV4IC09IDE7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoaW1hZ2VTaG93SW5kZXggPT09IHBvc3RbMF0uZ2FsZXJ5Lmxlbmd0aCkge1xuICAgICAgaW1hZ2VTaG93SW5kZXggPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZVNob3dJbmRleCArPSAxO1xuICAgIH1cbiAgfTtcbiAgbGV0IGZ1bGxTaXplO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlByb2pldDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cInByb2pldCB7ZnVsbFNpemV9XCI+XG4gIHsjZWFjaCBwb3N0IGFzIGluZm99XG4gICAgPGRpdiBjbGFzcz1cInBvc3QtaW5mb1wiPlxuICAgICAgPG5hdj5cbiAgICAgICAgeyNlYWNoIGluZm8ubGllbiBhcyBwcm9qZXR9XG4gICAgICAgICAgeyNlYWNoIHByb2pldC5wcm9qZXRzIGFzIHNsdWd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cImxpbmt7cHJvamV0LmlkfVwiXG4gICAgICAgICAgICAgIGhyZWY9e3VybFNsdWcgKyBzbHVnLlNsdWd9XG4gICAgICAgICAgICAgIG9uOmNsaWNrPXtmaXJzdEltYWdlfT57c2x1Zy50aXRyZX08L2FcbiAgICAgICAgICAgID5cbiAgICAgICAgICB7L2VhY2h9XG4gICAgICAgIHsvZWFjaH1cbiAgICAgICAgPGg1IGNsYXNzPVwibGlua1RleHRcIj4mIzEwMDk0OyBQcm9qZXQgJiMxMDA5NTs8L2g1PlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+e2luZm8udGl0cmV9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiIHVzZTpzbGltc2Nyb2xsPVwie3toZWlnaHQ6XCI3MHZoXCIsY29sb3I6XCIjZTQyZWY1XCJ9fVwiPlxuICAgICAgICAgICAge0BodG1sIHNuYXJrZG93bihpbmZvLmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FsZXJ5XCI+XG4gICAgICB7I2VhY2ggaW5mby5nYWxlcnkgYXMgaW1hZ2UsIGl9XG4gICAgICAgIDxMaWdodGJveFxuICAgICAgICAgIGltYWdlVXJsPXt1cmxwQXBpICsgaW1hZ2UudXJsfVxuICAgICAgICAgIHNsaWRlTm89e2ltYWdlU2hvd0luZGV4fVxuICAgICAgICAgIHRvdGFsU2xpZGU9e2luZm8uZ2FsZXJ5Lmxlbmd0aH1cbiAgICAgICAgICBpbWFnZVNob3dpbmc9e2kgKyAxID09PSBpbWFnZVNob3dJbmRleH1cbiAgICAgICAgICBhbHRlcm5UZXh0PXtpfVxuICAgICAgICAgIGltZ0Z1bGxTaXplPXtcImltZy1cIiArIGZ1bGxTaXplfVxuICAgICAgICAgIHZpZGVvUG9zdGVyPXt1cmxwQXBpICsgaW5mby5jb3Zlci51cmx9XG4gICAgICAgIC8+XG4gICAgICB7L2VhY2h9XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicHJldlwiIG9uOmNsaWNrPXtwcmV2U2xpZGV9PiYjMTAwOTQ7PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiIG9uOmNsaWNrPXtuZXh0U2xpZGV9PiYjMTAwOTU7PC9idXR0b24+XG5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3M9XCJidG4tZnVsbC1zaXplXCJcbiAgICAgICAgb246Y2xpY2s9eygpID0+IChmdWxsU2l6ZSA9IFwiZnVsbC1zaXplXCIpfVxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCI0MVwiXG4gICAgICAgIGhlaWdodD1cIjQxXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCA0MSA0MVwiXG4gICAgICA+XG4gICAgICAgIDxnIGlkPVwiZnVsbC1zY3JlZW4tYnV0dG9uXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuODA2IDUuMzA4KVwiPlxuICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgIGlkPVwiRWxsaXBzZV8xMlwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDEyXCJcbiAgICAgICAgICAgIGN4PVwiMjAuNVwiXG4gICAgICAgICAgICBjeT1cIjIwLjVcIlxuICAgICAgICAgICAgcj1cIjIwLjVcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0wLjgwNiAtNS4zMDgpXCJcbiAgICAgICAgICAgIGZpbGw9XCJyZ2JhKDAsMCwwLDAuMSlcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGdcbiAgICAgICAgICAgIGlkPVwiR3JvdXBlXzFcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXBlIDFcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDYuNjYyIDIuMTkyKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgaWQ9XCJUcmFjw6lfODBcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJUcmFjw6kgODBcIlxuICAgICAgICAgICAgICBkPVwiTTEyLjgxNyw5LjM1N2MtMS4yMTMtMS4yMTMtMy4wNzItMy4wNzQtNC4yLTQuMmwtLjgtLjhzMS4zLTEuMywxLjgzNC0xLjgzNS0uNDIzLS41MDktLjQyMy0uNTA5TDIuMDQsMS4zMzlzLS41ODItLjA0Ny0uNTgyLjUxMmMwLC43NzMuOTA5LDcuMjIxLjkwOSw3LjIyMXMwLC45ODIuNjQ4LjMzLDEuNy0xLjcsMS43LTEuN2wuNzE3LjcxOSw0LjI1LDQuMjQ5QTQuOTQzLDQuOTQzLDAsMCwxLDEyLjgxNyw5LjM1N1pcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEuMzkyIC0xLjMwOClcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2U0MmVmNVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgaWQ9XCJUcmFjw6lfODFcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJUcmFjw6kgODFcIlxuICAgICAgICAgICAgICBkPVwiTTMyNC45NTIsMzIzLjE2OXMwLS45ODEtLjY0OS0uMzI5LTEuNywxLjctMS43LDEuNy0uMjg0LS4yODMtLjcxNy0uNzE4Yy0xLjE1My0xLjE1My0zLjI0Mi0zLjI0My00LjQzNy00LjQzNmE0Ljk0OCw0Ljk0OCwwLDAsMS0zLjQwOCwzLjA0NWw0LjY1MSw0LjY1NC44LjhzLTEuMywxLjMtMS44MzUsMS44MzcuNDI1LjUwOS40MjUuNTA5bDcuMTkzLjY4MWEuNTE1LjUxNSwwLDAsMCwuNTc5LS41MTVDMzI1Ljg1OCwzMjkuNjIsMzI0Ljk1MiwzMjMuMTY5LDMyNC45NTIsMzIzLjE2OVpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5OS43OTQgLTMwNC45MjIpXCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNlNDJlZjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGlkPVwiVHJhY8OpXzgyXCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiVHJhY8OpIDgyXCJcbiAgICAgICAgICAgICAgZD1cIk04LjM2MSwzMTUuODQ4Yy0xLjE3OSwxLjE4LTMuMywzLjMtNC41MzUsNC41MzctLjQ4My40ODMtLjguOC0uOC44bC0xLjgzNy0xLjgzN2MtLjUzNi0uNTM3LS41MDkuNDIzLS41MDkuNDIzTDAsMzI2Ljk2N2EuNTE0LjUxNCwwLDAsMCwuNTE0LjU4MWMuNzczLDAsNy4yMjItLjkwNyw3LjIyMi0uOTA3cy45OCwwLC4zMjctLjY1M1M2LjM3MywzMjQuMyw2LjM3MywzMjQuM2wuNzItLjcyMWMxLjItMS4yLDMuNC0zLjQsNC41NjUtNC41NjZBNC45NTQsNC45NTQsMCwwLDEsOC4zNjEsMzE1Ljg0OFpcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTAuMDAzIC0zMDEuNTQ4KVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTQyZWY1XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBpZD1cIlRyYWPDqV84M1wiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlRyYWPDqSA4M1wiXG4gICAgICAgICAgICAgIGQ9XCJNMzI4LjE4MywxMi4xNywzMzIuNSw3Ljg1NGMuNDg0LS40ODMuOC0uOC44LS44czEuMywxLjMsMS44MzcsMS44MzUuNTA3LS40MjMuNTA3LS40MjNsLjY3OC03LjJhLjUxMi41MTIsMCwwLDAtLjUxNS0uNThjLS43NzIsMC03LjIyLjkwNy03LjIyLjkwN3MtLjk4MSwwLS4zMy42NSwxLjY5NCwxLjcsMS42OTQsMS43LS4yODEuMjg0LS43MTcuNzE4Yy0xLjA1NywxLjA1Ny0yLjksMi44OTQtNC4xMTgsNC4xMTZBNC45NDYsNC45NDYsMCwwLDEsMzI4LjE4MywxMi4xN1pcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMxMC4zNjQgLTAuNjkyKVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZTQyZWY1XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzdmdcbiAgICAgICAgY2xhc3M9XCJidG4tc21hbGwtc2l6ZVwiXG4gICAgICAgIG9uOmNsaWNrPXsoKSA9PiAoZnVsbFNpemUgPSBcIlwiKX1cbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiNDFcIlxuICAgICAgICBoZWlnaHQ9XCI0MVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDEgNDFcIlxuICAgICAgPlxuICAgICAgICA8ZyBpZD1cImV4aXQtZnVsbHNjcmVlblwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjcyOSAyLjE3OClcIj5cbiAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICBpZD1cIkVsbGlwc2VfMTNcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSAxM1wiXG4gICAgICAgICAgICBjeD1cIjIwLjVcIlxuICAgICAgICAgICAgY3k9XCIyMC41XCJcbiAgICAgICAgICAgIHI9XCIyMC41XCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMS43MjkgLTIuMTc4KVwiXG4gICAgICAgICAgICBmaWxsPVwicmdiYSgwLDAsMCwwLjEpXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlRyYWPDqV84N1wiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJUcmFjw6kgODdcIlxuICAgICAgICAgICAgZD1cIk0yOS4wMjQsMTMuNDc0bC0yLjIzMi0yLjQzOSw2Ljc4MS02LjU4M0wyOS4wMjQuMDMxbC02LjIsNi40MzFMMjAsNC40NTJ2OS4wMjJaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjY5NiAzLjAzMSlcIlxuICAgICAgICAgICAgZmlsbD1cIiNlNDJlZjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwiVHJhY8OpXzg4XCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlRyYWPDqSA4OFwiXG4gICAgICAgICAgICBkPVwiTTkuMDI0LDEzLjQ0Myw2Ljc5MiwxMWw2Ljc4MS02LjU4M0w5LjAyNCwwbC02LjIsNi40MzFMMCw0LjQyMXY5LjAyMlpcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM1LjEzOSAyMC4xMzkpIHJvdGF0ZSg5MClcIlxuICAgICAgICAgICAgZmlsbD1cIiNlNDJlZjVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwiVHJhY8OpXzg5XCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlRyYWPDqSA4OVwiXG4gICAgICAgICAgICBkPVwiTTkuMDI0LDEzLjQ0Myw2Ljc5MiwxMWw2Ljc4MS02LjU4M0w5LjAyNCwwbC02LjIsNi40MzFMMCw0LjQyMXY5LjAyMlpcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE2LjQyMiAzMy43MTIpIHJvdGF0ZSgxODApXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZTQyZWY1XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlRyYWPDqV85MFwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJUcmFjw6kgOTBcIlxuICAgICAgICAgICAgZD1cIk05LjAyNCwxMy40NDMsNi43OTIsMTFsNi43ODEtNi41ODNMOS4wMjQsMGwtNi4yLDYuNDMxTDAsNC40MjF2OS4wMjJaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyLjk3OSAxNi41MDYpIHJvdGF0ZSgtOTApXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZTQyZWY1XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9lYWNofVxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLmZ1bGwtc2l6ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTY1cHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgbGVmdDogLTQwcHg7XG4gIH1cbiAgLmZ1bGwtc2l6ZSBuYXYsXG4gIC5mdWxsLXNpemUgLnBvc3QtaW5mbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZnVsbC1zaXplIC5nYWxlcnkge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xuICB9XG4gIC5mdWxsLXNpemUgLnByZXYge1xuICAgIGxlZnQ6IDU4cHg7XG4gIH1cbiAgLmZ1bGwtc2l6ZSAuYnRuLXNtYWxsLXNpemUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5mdWxsLXNpemUgLmJ0bi1mdWxsLXNpemUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYnRuLXNtYWxsLXNpemUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJ0bi1mdWxsLXNpemUsXG4gIC5idG4tc21hbGwtc2l6ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTQyZWY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICAuYnRuLXNtYWxsLXNpemUge1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMjBweDtcbiAgfVxuICAuYnRuLXNtYWxsLXNpemU6aG92ZXIge1xuICAgIHNjYWxlOiAwLjg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5idG4tZnVsbC1zaXplOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICAucHJvamV0IHtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJ0aXRyZSBjb2xSaWdodFwiXG4gICAgICBcInRleHRlIGNvbFJpZ2h0XCI7XG4gIH1cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwicHJldiBsaW5rVGV4dCBuZXh0XCI7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIyOCwgNDYsIDI0NSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5saW5rVGV4dCB7XG4gICAgZ3JpZC1hcmVhOiBsaW5rVGV4dDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiaW50ZXJzdGF0ZVwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgLmxpbmsxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZ3JpZC1hcmVhOiBwcmV2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxpbmsyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZ3JpZC1hcmVhOiBuZXh0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvamV0IGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjI4LCA0NiwgMjQ1KTtcbiAgfVxuICBoMiB7XG4gICAgZ3JpZC1hcmVhOiB0aXRyZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICB9XG4gIC50ZXh0IHtcbiAgICBncmlkLWFyZWE6IHRleHRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgfVxuICAuZ2FsZXJ5IHtcbiAgICBncmlkLWFyZWE6IGNvbFJpZ2h0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYnRuRyAgLiBidG5EXCI7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogcmdiKDIyOCwgNDYsIDI0NSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIHRvcDogNDB2aDtcbiAgfVxuICBidXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjgsIDQ2LCAyNDUpO1xuICB9XG4gIC5wcmV2IHtcbiAgICBncmlkLWFyZWE6IGJ0bkc7XG4gIH1cbiAgLm5leHQge1xuICAgIGdyaWQtYXJlYTogYnRuRDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MzBweCkge1xuICAgIC5wcm9qZXQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIHBhZGRpbmc6IDYwcHggMjBweDtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwidGl0cmVcIlxuICAgICAgICBcInRleHRlXCJcbiAgICAgICAgXCJzbGlkZXJcIjtcbiAgICB9XG4gICAgLmdhbGVyeSB7XG4gICAgICBncmlkLWFyZWE6IHNsaWRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICAucG9zdC1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwidGl0bGVcIlxuICAgICAgICBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgXCJuYXZwcm9qZXRcIjtcbiAgICB9XG4gICAgaDIge1xuICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIG5hdiB7XG4gICAgICBncmlkLWFyZWE6IG5hdnByb2pldDtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbiAgICAuYnRuLWZ1bGwtc2l6ZSxcbiAgICAuYnRuLXNtYWxsLXNpemUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZ3JpZC1hcmVhOiBidG5EO1xuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgfVxuICAgIC5idG4tc21hbGwtc2l6ZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICByaWdodDogNDBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJzbmFya2Rvd24iLCJncWwiLCJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJLFVBQVUsR0FBRyxDQUFDLFlBQVk7QUFDOUIsSUFBSSxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkIsUUFBUSxJQUFJLEVBQUUsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFO0FBQ2xDLFlBQVksT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDNUIsU0FBUztBQUNULFFBQVEsSUFBSSxPQUFPLEVBQUUsS0FBSyxRQUFRLEVBQUU7QUFDcEMsWUFBWSxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDO0FBQzdDLFlBQVksSUFBSSxDQUFDLEVBQUU7QUFDbkIsZ0JBQWdCLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztBQUNqRCxhQUFhLE1BQU07QUFDbkIsZ0JBQWdCLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBQztBQUMvQyxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLENBQUMs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
