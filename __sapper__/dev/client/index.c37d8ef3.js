import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as toggle_class, m as insert_dev, n as append_dev, o as set_data_dev, p as noop, q as validate_each_argument, r as create_component, u as claim_component, w as mount_component, x as transition_in, y as transition_out, z as destroy_component, A as query_selector_all, B as listen_dev, C as check_outros, D as destroy_each, E as run_all, F as group_outros } from './client.03bf5229.js';
import { s as src, D as DefaultClient } from './bundle.esm.da9dac77.js';

/* src/components/Slide.svelte generated by Svelte v3.32.3 */

const file = "src/components/Slide.svelte";

function create_fragment(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let img;
	let img_src_value;
	let t4;
	let div1;
	let p;
	let a;
	let t5;
	let t6;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(/*slideNo*/ ctx[2]);
			t1 = text(" / ");
			t2 = text(/*totalSlide*/ ctx[3]);
			t3 = space();
			img = element("img");
			t4 = space();
			div1 = element("div");
			p = element("p");
			a = element("a");
			t5 = text(/*infos*/ ctx[5]);
			t6 = text("      Voir Plus >>");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*slideNo*/ ctx[2]);
			t1 = claim_text(div0_nodes, " / ");
			t2 = claim_text(div0_nodes, /*totalSlide*/ ctx[3]);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true, class: true });
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t5 = claim_text(a_nodes, /*infos*/ ctx[5]);
			t6 = claim_text(a_nodes, "      Voir Plus >>");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "numbertext svelte-ksmmqy");
			add_location(div0, file, 10, 4, 247);
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			attr_dev(img, "class", "svelte-ksmmqy");
			add_location(img, file, 11, 4, 306);
			attr_dev(a, "href", /*slug*/ ctx[6]);
			attr_dev(a, "class", "link svelte-ksmmqy");
			add_location(a, file, 13, 9, 380);
			attr_dev(p, "class", "svelte-ksmmqy");
			add_location(p, file, 13, 6, 377);
			attr_dev(div1, "class", "infos svelte-ksmmqy");
			add_location(div1, file, 12, 4, 351);
			attr_dev(div2, "class", "mySlides svelte-ksmmqy");
			toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			add_location(div2, file, 9, 0, 194);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, t2);
			append_dev(div2, t3);
			append_dev(div2, img);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, p);
			append_dev(p, a);
			append_dev(a, t5);
			append_dev(a, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*slideNo*/ 4) set_data_dev(t0, /*slideNo*/ ctx[2]);
			if (dirty & /*totalSlide*/ 8) set_data_dev(t2, /*totalSlide*/ ctx[3]);

			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}

			if (dirty & /*infos*/ 32) set_data_dev(t5, /*infos*/ ctx[5]);

			if (dirty & /*slug*/ 64) {
				attr_dev(a, "href", /*slug*/ ctx[6]);
			}

			if (dirty & /*imageShowing*/ 16) {
				toggle_class(div2, "show", /*imageShowing*/ ctx[4]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
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
	validate_slots("Slide", slots, []);
	let { imageUrl } = $$props;
	let { alternText } = $$props;
	let { slideNo } = $$props;
	let { totalSlide } = $$props;
	let { imageShowing } = $$props;
	let { infos } = $$props;
	let { slug } = $$props;

	const writable_props = [
		"imageUrl",
		"alternText",
		"slideNo",
		"totalSlide",
		"imageShowing",
		"infos",
		"slug"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slide> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		slideNo,
		totalSlide,
		imageShowing,
		infos,
		slug
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("slideNo" in $$props) $$invalidate(2, slideNo = $$props.slideNo);
		if ("totalSlide" in $$props) $$invalidate(3, totalSlide = $$props.totalSlide);
		if ("imageShowing" in $$props) $$invalidate(4, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(5, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(6, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imageUrl, alternText, slideNo, totalSlide, imageShowing, infos, slug];
}

class Slide extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			slideNo: 2,
			totalSlide: 3,
			imageShowing: 4,
			infos: 5,
			slug: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Slide",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imageUrl*/ ctx[0] === undefined && !("imageUrl" in props)) {
			console.warn("<Slide> was created without expected prop 'imageUrl'");
		}

		if (/*alternText*/ ctx[1] === undefined && !("alternText" in props)) {
			console.warn("<Slide> was created without expected prop 'alternText'");
		}

		if (/*slideNo*/ ctx[2] === undefined && !("slideNo" in props)) {
			console.warn("<Slide> was created without expected prop 'slideNo'");
		}

		if (/*totalSlide*/ ctx[3] === undefined && !("totalSlide" in props)) {
			console.warn("<Slide> was created without expected prop 'totalSlide'");
		}

		if (/*imageShowing*/ ctx[4] === undefined && !("imageShowing" in props)) {
			console.warn("<Slide> was created without expected prop 'imageShowing'");
		}

		if (/*infos*/ ctx[5] === undefined && !("infos" in props)) {
			console.warn("<Slide> was created without expected prop 'infos'");
		}

		if (/*slug*/ ctx[6] === undefined && !("slug" in props)) {
			console.warn("<Slide> was created without expected prop 'slug'");
		}
	}

	get imageUrl() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageUrl(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alternText() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alternText(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slideNo() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slideNo(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get totalSlide() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set totalSlide(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get imageShowing() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imageShowing(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get infos() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set infos(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Slide>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Slide>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.32.3 */
const file$1 = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (60:0) {#each posts as post}
function create_each_block(ctx) {
	let slide;
	let current;

	slide = new Slide({
			props: {
				imageUrl: urlpApi + /*post*/ ctx[4].cover.url,
				alternText: /*post*/ ctx[4].titre,
				slideNo: /*imageShowIndex*/ ctx[1],
				totalSlide: /*posts*/ ctx[0].length,
				imageShowing: /*post*/ ctx[4].idP * -1 + /*posts*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1],
				infos: /*post*/ ctx[4].titre,
				slug: urlSlug + /*post*/ ctx[4].Slug
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(slide.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slide.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slide, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slide_changes = {};
			if (dirty & /*posts*/ 1) slide_changes.imageUrl = urlpApi + /*post*/ ctx[4].cover.url;
			if (dirty & /*posts*/ 1) slide_changes.alternText = /*post*/ ctx[4].titre;
			if (dirty & /*imageShowIndex*/ 2) slide_changes.slideNo = /*imageShowIndex*/ ctx[1];
			if (dirty & /*posts*/ 1) slide_changes.totalSlide = /*posts*/ ctx[0].length;
			if (dirty & /*posts, imageShowIndex*/ 3) slide_changes.imageShowing = /*post*/ ctx[4].idP * -1 + /*posts*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1];
			if (dirty & /*posts*/ 1) slide_changes.infos = /*post*/ ctx[4].titre;
			if (dirty & /*posts*/ 1) slide_changes.slug = urlSlug + /*post*/ ctx[4].Slug;
			slide.$set(slide_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slide.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slide.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slide, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(60:0) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let div1;
	let div0;
	let t1;
	let a0;
	let t2;
	let t3;
	let a1;
	let t4;
	let current;
	let mounted;
	let dispose;
	let each_value = /*posts*/ ctx[0];
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
			t0 = space();
			div1 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			a0 = element("a");
			t2 = text("❮");
			t3 = space();
			a1 = element("a");
			t4 = text("❯");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-u4ofl0\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t2 = claim_text(a0_nodes, "❮");
			a0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t4 = claim_text(a1_nodes, "❯");
			a1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "BlastART";
			attr_dev(div0, "class", "container svelte-17lysf");
			add_location(div0, file$1, 58, 0, 1044);
			attr_dev(a0, "href", "#arrowL");
			attr_dev(a0, "class", "prev svelte-17lysf");
			add_location(a0, file$1, 71, 1, 1417);
			attr_dev(a1, "href", "#arrowR");
			attr_dev(a1, "class", "next svelte-17lysf");
			add_location(a1, file$1, 72, 1, 1483);
			add_location(div1, file$1, 57, 0, 1038);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div1, t1);
			append_dev(div1, a0);
			append_dev(a0, t2);
			append_dev(div1, t3);
			append_dev(div1, a1);
			append_dev(a1, t4);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(a0, "click", /*prevSlide*/ ctx[2], false, false, false),
					listen_dev(a1, "click", /*nextSlide*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, posts, imageShowIndex, urlSlug*/ 3) {
				each_value = /*posts*/ ctx[0];
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
						each_blocks[i].m(div0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
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
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
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

const imageQuery = src`
	query cover{
	  projets(sort:"date:desc"){
		id
		idP
		titre
		cover {
		  url
		}
		Slug
	  }
	}
  `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: imageQuery });
	return { posts: results.data.projets };
}

const urlpApi = "http://51.210.96.39:1337";
const urlSlug = "Projet/";

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let { posts } = $$props;

	// slideshow change image	
	let imageShowIndex = 1;

	const prevSlide = () => {
		if (imageShowIndex === 1) {
			$$invalidate(1, imageShowIndex = posts.length);
		} else {
			$$invalidate(1, imageShowIndex -= 1);
		}
	};

	const nextSlide = () => {
		if (imageShowIndex === posts.length) {
			$$invalidate(1, imageShowIndex = 1);
		} else {
			$$invalidate(1, imageShowIndex += 1);
		}
	};

	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql: src,
		Slide,
		imageQuery,
		preload,
		urlpApi,
		urlSlug,
		posts,
		imageShowIndex,
		prevSlide,
		nextSlide
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("imageShowIndex" in $$props) $$invalidate(1, imageShowIndex = $$props.imageShowIndex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts, imageShowIndex, prevSlide, nextSlide];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Routes> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzM3ZDhlZjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpbWFnZVVybDtcbiAgICBleHBvcnQgbGV0IGFsdGVyblRleHQ7XG4gICAgZXhwb3J0IGxldCBzbGlkZU5vO1xuICAgIGV4cG9ydCBsZXQgdG90YWxTbGlkZTtcbiAgICBleHBvcnQgbGV0IGltYWdlU2hvd2luZztcbiAgICBleHBvcnQgbGV0IGluZm9zO1xuICAgIGV4cG9ydCBsZXQgc2x1Zztcbjwvc2NyaXB0PlxuPGRpdiBjbGFzcz1cIm15U2xpZGVzXCIgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfT5cbiAgICA8ZGl2IGNsYXNzPVwibnVtYmVydGV4dFwiPntzbGlkZU5vfSAvIHt0b3RhbFNsaWRlfTwvZGl2PlxuICAgIDxpbWcgc3JjPXtpbWFnZVVybH0gIGFsdD17YWx0ZXJuVGV4dH0gLz5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3NcIj5cbiAgICAgIDxwPjxhIGhyZWY9e3NsdWd9IGNsYXNzPVwibGlua1wiPntpbmZvc30gICAgICBWb2lyIFBsdXMgPj48L2E+PC9wPlxuICAgICAgXG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuLm15U2xpZGVzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDoyMHB4O1xuICAgIH1cbi5zaG93e1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDo2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xufVxuLm51bWJlcnRleHQge1xuICBjb2xvcjogIHJnYigyMjgsIDQ2LCAyNDUpO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6ODV2aDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmluZm9ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZToycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG59XG4uaW5mb3MgcHtcbiAgcGFkZGluZy10b3A6MDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xufVxuYXtcbiAgY29sb3I6IzAwMDtcbiAgZm9udC1zaXplOjEuNnJlbTtcbn1cbmE6aG92ZXJ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6cmdiKDIyOCwgNDYsIDI0NSlcbn1cbi5saW5re1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6MnB4O1xuICBib3JkZXI6c29saWQgMnB4IHJnYigyMjgsIDQ2LCAyNDUpO1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAubXlTbGlkZXMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgIH1cbiAgLnNob3d7XG4gIG1hcmdpbi10b3A6MHB4O1xuICBwYWRkaW5nLXRvcDo2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG59XG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDo5NXZoO1xufVxuICB9XG48L3N0eWxlPiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHQgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5cdCBpbXBvcnQgU2xpZGUgZnJvbSBcIi4vLi4vY29tcG9uZW50cy9TbGlkZS5zdmVsdGVcIjtcbiAgY29uc3QgaW1hZ2VRdWVyeSA9IGdxbGBcblx0cXVlcnkgY292ZXJ7XG5cdCAgcHJvamV0cyhzb3J0OlwiZGF0ZTpkZXNjXCIpe1xuXHRcdGlkXG5cdFx0aWRQXG5cdFx0dGl0cmVcblx0XHRjb3ZlciB7XG5cdFx0ICB1cmxcblx0XHR9XG5cdFx0U2x1Z1xuXHQgIH1cblx0fVxuICBgO1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0ICB1cmk6IFwiaHR0cDovLzUxLjIxMC45Ni4zOToxMzM3L2dyYXBocWxcIixcblx0ICAgIGZldGNoOiB0aGlzLmZldGNoLFxuXHR9KTtcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG5cdCAgcXVlcnk6IGltYWdlUXVlcnksXG5cdH0pO1xuXHRyZXR1cm4geyBwb3N0czogcmVzdWx0cy5kYXRhLnByb2pldHMgfTtcbn1cblxuICBjb25zdCB1cmxwQXBpID0gXCJodHRwOi8vNTEuMjEwLjk2LjM5OjEzMzdcIjtcbiAgY29uc3QgdXJsU2x1ZyA9IFwiUHJvamV0L1wiO1xuXHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3RzO1xuLy8gc2xpZGVzaG93IGNoYW5nZSBpbWFnZVx0XG4gbGV0IGltYWdlU2hvd0luZGV4ID0gMTtcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuXHQgIGlmKGltYWdlU2hvd0luZGV4ID09PSAxICl7XG5cdFx0IGltYWdlU2hvd0luZGV4ID0gcG9zdHMubGVuZ3RoO1xuXHQgIH1lbHNle1xuXHRcdGltYWdlU2hvd0luZGV4IC09IDE7XG5cdCAgfVxuXHR9O1xuICBcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuXHQgIGlmIChpbWFnZVNob3dJbmRleCA9PT0gcG9zdHMubGVuZ3RoKXtcblx0XHQgIGltYWdlU2hvd0luZGV4ID0gMVxuXHQgIH1lbHNle1xuXHRcdGltYWdlU2hvd0luZGV4ICs9IDE7XG5cdCAgfVxuXHR9IDtcblxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsYXN0QVJUPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2PlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxueyNlYWNoIHBvc3RzIGFzIHBvc3R9XG4gIDxTbGlkZSBpbWFnZVVybD17dXJscEFwaSArIHBvc3QuY292ZXIudXJsfSBcblx0XHQgICBhbHRlcm5UZXh0PXtwb3N0LnRpdHJlfSBcblx0XHQgICBzbGlkZU5vPXtpbWFnZVNob3dJbmRleH1cblx0XHQgICB0b3RhbFNsaWRlPXtwb3N0cy5sZW5ndGh9XG5cdFx0ICAgaW1hZ2VTaG93aW5nPXsocG9zdC5pZFAgKiAtMSkgKyBwb3N0cy5sZW5ndGggKyAxID09PSBpbWFnZVNob3dJbmRleH1cblx0XHQgICBpbmZvcz17cG9zdC50aXRyZX1cblx0XHQgICBzbHVnPXt1cmxTbHVnICsgcG9zdC5TbHVnfVxuXHRcdCAgIC8+XG57L2VhY2h9XG48L2Rpdj5cbiA8IS0tIE5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgLS0+XG4gPGEgaHJlZj1cIiNhcnJvd0xcIiBjbGFzcz1cInByZXZcIiBvbjpjbGljaz17cHJldlNsaWRlfT4mIzEwMDk0OzwvYT5cbiA8YSBocmVmPVwiI2Fycm93UlwiIGNsYXNzPVwibmV4dFwiIG9uOmNsaWNrPXtuZXh0U2xpZGV9PiYjMTAwOTU7PC9hPlxuPC9kaXY+XG5cbjxzdHlsZT5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbiAucHJldixcbi5uZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjI4LCA0NiwgMjQ1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufSBcblxuLyogUG9zaXRpb24gdGhlIFwibmV4dCBidXR0b25cIiB0byB0aGUgcmlnaHQgKi9cbiAubmV4dCB7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufSBcblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5wcmV2OmhvdmVyLFxuLm5leHQ6aG92ZXIge1xuXHRmb250LXNpemU6IDMwcHg7XG59IFxuQG1lZGlhKG1heC13aWR0aDo2NjBweCl7XG4gICAgICAuY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDowcHg7XG4gICAgICBtaW4taGVpZ2h0OiAwdmg7XG4gICAgICB3aWR0aDogOTB2dztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJncWwiLCJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFVNkIsR0FBTzs7NEJBQUssR0FBVTs7Ozs7Ozt1QkFHYixHQUFLOzs7Ozs7Ozs7MkNBSGQsR0FBTzs7OENBQUssR0FBVTs7Ozs7Ozs7Ozs7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
