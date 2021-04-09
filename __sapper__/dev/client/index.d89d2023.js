import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, z as text, g as claim_element, h as children, j as detach_dev, f as claim_space, A as claim_text, k as attr_dev, l as add_location, E as toggle_class, n as insert_dev, o as append_dev, D as set_data_dev, p as noop, w as validate_each_argument, c as create_component, b as claim_component, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, G as listen_dev, I as check_outros, x as destroy_each, J as run_all, K as group_outros } from './client.46d2cdb7.js';
import { S as SvelteSeo } from './SvelteSeo.75474ac1.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/components/Slide.svelte generated by Svelte v3.35.0 */

const file$1 = "src/components/Slide.svelte";

function create_fragment$1(ctx) {
	let div1;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let div0;
	let h1;
	let a1;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h1 = element("h1");
			a1 = element("a");
			t1 = text(/*infos*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			a1 = claim_element(h1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t1 = claim_text(a1_nodes, /*infos*/ ctx[3]);
			a1_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*imageUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alternText*/ ctx[1]);
			attr_dev(img, "class", "svelte-11utgz");
			add_location(img, file$1, 9, 33, 218);
			attr_dev(a0, "href", /*slug*/ ctx[4]);
			attr_dev(a0, "class", "imgLink svelte-11utgz");
			add_location(a0, file$1, 9, 2, 187);
			attr_dev(a1, "href", /*slug*/ ctx[4]);
			attr_dev(a1, "class", "link svelte-11utgz");
			add_location(a1, file$1, 11, 8, 292);
			add_location(h1, file$1, 11, 4, 288);
			attr_dev(div0, "class", "infos svelte-11utgz");
			add_location(div0, file$1, 10, 2, 264);
			attr_dev(div1, "class", "mySlides svelte-11utgz");
			toggle_class(div1, "show", /*imageShowing*/ ctx[2]);
			add_location(div1, file$1, 8, 0, 134);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, a1);
			append_dev(a1, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*imageUrl*/ 1 && img.src !== (img_src_value = /*imageUrl*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alternText*/ 2) {
				attr_dev(img, "alt", /*alternText*/ ctx[1]);
			}

			if (dirty & /*slug*/ 16) {
				attr_dev(a0, "href", /*slug*/ ctx[4]);
			}

			if (dirty & /*infos*/ 8) set_data_dev(t1, /*infos*/ ctx[3]);

			if (dirty & /*slug*/ 16) {
				attr_dev(a1, "href", /*slug*/ ctx[4]);
			}

			if (dirty & /*imageShowing*/ 4) {
				toggle_class(div1, "show", /*imageShowing*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Slide", slots, []);
	let { imageUrl } = $$props;
	let { alternText } = $$props;
	let { imageShowing } = $$props;
	let { infos } = $$props;
	let { slug } = $$props;
	const writable_props = ["imageUrl", "alternText", "imageShowing", "infos", "slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Slide> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("imageShowing" in $$props) $$invalidate(2, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(3, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(4, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		imageUrl,
		alternText,
		imageShowing,
		infos,
		slug
	});

	$$self.$inject_state = $$props => {
		if ("imageUrl" in $$props) $$invalidate(0, imageUrl = $$props.imageUrl);
		if ("alternText" in $$props) $$invalidate(1, alternText = $$props.alternText);
		if ("imageShowing" in $$props) $$invalidate(2, imageShowing = $$props.imageShowing);
		if ("infos" in $$props) $$invalidate(3, infos = $$props.infos);
		if ("slug" in $$props) $$invalidate(4, slug = $$props.slug);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imageUrl, alternText, imageShowing, infos, slug];
}

class Slide extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			imageUrl: 0,
			alternText: 1,
			imageShowing: 2,
			infos: 3,
			slug: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Slide",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imageUrl*/ ctx[0] === undefined && !("imageUrl" in props)) {
			console.warn("<Slide> was created without expected prop 'imageUrl'");
		}

		if (/*alternText*/ ctx[1] === undefined && !("alternText" in props)) {
			console.warn("<Slide> was created without expected prop 'alternText'");
		}

		if (/*imageShowing*/ ctx[2] === undefined && !("imageShowing" in props)) {
			console.warn("<Slide> was created without expected prop 'imageShowing'");
		}

		if (/*infos*/ ctx[3] === undefined && !("infos" in props)) {
			console.warn("<Slide> was created without expected prop 'infos'");
		}

		if (/*slug*/ ctx[4] === undefined && !("slug" in props)) {
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

/* src/routes/blast/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/blast/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (66:0) {#each presentation as post}
function create_each_block(ctx) {
	let slide;
	let current;

	slide = new Slide({
			props: {
				imageUrl: urlpApi + /*post*/ ctx[4].cover.url,
				alternText: /*post*/ ctx[4].titre,
				slideNo: /*imageShowIndex*/ ctx[1],
				totalSlide: /*presentation*/ ctx[0].length,
				imageShowing: /*post*/ ctx[4].idP * -1 + /*presentation*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1],
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
			if (dirty & /*presentation*/ 1) slide_changes.imageUrl = urlpApi + /*post*/ ctx[4].cover.url;
			if (dirty & /*presentation*/ 1) slide_changes.alternText = /*post*/ ctx[4].titre;
			if (dirty & /*imageShowIndex*/ 2) slide_changes.slideNo = /*imageShowIndex*/ ctx[1];
			if (dirty & /*presentation*/ 1) slide_changes.totalSlide = /*presentation*/ ctx[0].length;
			if (dirty & /*presentation, imageShowIndex*/ 3) slide_changes.imageShowing = /*post*/ ctx[4].idP * -1 + /*presentation*/ ctx[0].length + 1 === /*imageShowIndex*/ ctx[1];
			if (dirty & /*presentation*/ 1) slide_changes.infos = /*post*/ ctx[4].titre;
			if (dirty & /*presentation*/ 1) slide_changes.slug = urlSlug + /*post*/ ctx[4].Slug;
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
		source: "(66:0) {#each presentation as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let svelteseo;
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

	svelteseo = new SvelteSeo({
			props: {
				description: "Présentaion des différents projets réalisés par le collectif Blastart, comme l'expositions unique le\n  terminal, le dinosaure Gustave de Romain Lardanchet et la fresque monumentale Gorilla urbaine réalisé par Kalouf. Ces \n  travaux sont rendus au travers des photos de FabeCollage et des vidéos de Jean-Pierre(staffvidéo)",
				title: "Projets réalisés par le collectif Blastart. Fresques, graphes sculptures les artistes relèvent tous les défis"
			},
			$$inline: true
		});

	let each_value = /*presentation*/ ctx[0];
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
			create_component(svelteseo.$$.fragment);
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
			claim_component(svelteseo.$$.fragment, nodes);
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
			attr_dev(div0, "class", "container svelte-1pa3brs");
			add_location(div0, file, 64, 0, 1607);
			attr_dev(a0, "href", "blast/#arrowL");
			attr_dev(a0, "class", "prev svelte-1pa3brs");
			add_location(a0, file, 77, 0, 2033);
			attr_dev(a1, "href", "blast/#arrowR");
			attr_dev(a1, "class", "next svelte-1pa3brs");
			add_location(a1, file, 78, 0, 2104);
			add_location(div1, file, 63, 0, 1601);
		},
		m: function mount(target, anchor) {
			mount_component(svelteseo, target, anchor);
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
			if (dirty & /*urlpApi, presentation, imageShowIndex, urlSlug*/ 3) {
				each_value = /*presentation*/ ctx[0];
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
			transition_in(svelteseo.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(svelteseo.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(svelteseo, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
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

const imageQuery = gql`
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

async function preload() {
	const client = new DefaultClient({
			uri: "https://grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: imageQuery });
	return { presentation: results.data.projets };
}

const urlpApi = "https://grldfaure.xyz";
const urlSlug = "projet/";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Blast", slots, []);
	let { presentation } = $$props;

	// slideshow change image	
	let imageShowIndex = 1;

	const prevSlide = () => {
		if (imageShowIndex === 1) {
			$$invalidate(1, imageShowIndex = presentation.length);
		} else {
			$$invalidate(1, imageShowIndex -= 1);
		}
	};

	const nextSlide = () => {
		if (imageShowIndex === presentation.length) {
			$$invalidate(1, imageShowIndex = 1);
		} else {
			$$invalidate(1, imageShowIndex += 1);
		}
	};

	const writable_props = ["presentation"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blast> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("presentation" in $$props) $$invalidate(0, presentation = $$props.presentation);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		Slide,
		SvelteSeo,
		imageQuery,
		preload,
		urlpApi,
		urlSlug,
		presentation,
		imageShowIndex,
		prevSlide,
		nextSlide
	});

	$$self.$inject_state = $$props => {
		if ("presentation" in $$props) $$invalidate(0, presentation = $$props.presentation);
		if ("imageShowIndex" in $$props) $$invalidate(1, imageShowIndex = $$props.imageShowIndex);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [presentation, imageShowIndex, prevSlide, nextSlide];
}

class Blast extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { presentation: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blast",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*presentation*/ ctx[0] === undefined && !("presentation" in props)) {
			console.warn("<Blast> was created without expected prop 'presentation'");
		}
	}

	get presentation() {
		throw new Error("<Blast>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set presentation(value) {
		throw new Error("<Blast>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Blast;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZDg5ZDIwMjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxhc3QvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaW1hZ2VVcmw7XG4gIGV4cG9ydCBsZXQgYWx0ZXJuVGV4dDtcbiAgZXhwb3J0IGxldCBpbWFnZVNob3dpbmc7XG4gIGV4cG9ydCBsZXQgaW5mb3M7XG4gIGV4cG9ydCBsZXQgc2x1Zztcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwibXlTbGlkZXNcIiAgY2xhc3M6c2hvdz17aW1hZ2VTaG93aW5nfSA+XG4gIDxhIGhyZWY9e3NsdWd9IGNsYXNzPVwiaW1nTGlua1wiPjxpbWcgc3JjPXtpbWFnZVVybH0gYWx0PXthbHRlcm5UZXh0fSAvPjwvYT5cbiAgPGRpdiBjbGFzcz1cImluZm9zXCI+XG4gICAgPGgxPjxhIGhyZWY9e3NsdWd9IGNsYXNzPVwibGlua1wiPntpbmZvc308L2E+PC9oMT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuIFxuICAubXlTbGlkZXMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGhlaWdodDogODB2aDtcbiAgfVxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogOTAlO1xuICB9XG4gIFxuIGEgaW1nIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG4gIC5pbWdMaW5re1xuICAgIG1hcmdpbi1sZWZ0OmF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG4gIC5pbmZvcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIGEge1xuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XG4gICAgY29sb3I6ICMzYjNiMzg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNlZjExYTE7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgIC5teVNsaWRlcyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIC5zaG93IHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogOTV2aDtcbiAgICB9XG4gICAgXG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgICBpbXBvcnQgU2xpZGUgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9TbGlkZS5zdmVsdGVcIjtcbiAgICBpbXBvcnQgU3ZlbHRlU2VvIGZyb20gXCJzdmVsdGUtc2VvXCI7XG5cbiBjb25zdCBpbWFnZVF1ZXJ5ID0gZ3FsYFxuICAgcXVlcnkgY292ZXJ7XG4gICAgIHByb2pldHMoc29ydDpcImRhdGU6ZGVzY1wiKXtcbiAgICAgICBpZFxuICAgICAgIGlkUFxuICAgICAgIHRpdHJlXG4gICAgICAgY292ZXIge1xuICAgICAgICAgdXJsXG4gICAgICAgfVxuICAgICAgIFNsdWdcbiAgICAgfVxuICAgfVxuIGA7XG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgdXJpOiBcImh0dHBzOi8vZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG4gICB9KTtcbiAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICBxdWVyeTogaW1hZ2VRdWVyeSxcbiAgIH0pO1xuICAgcmV0dXJuIHsgcHJlc2VudGF0aW9uOiByZXN1bHRzLmRhdGEucHJvamV0cyB9O1xufVxuXG4gY29uc3QgdXJscEFwaSA9IFwiaHR0cHM6Ly9ncmxkZmF1cmUueHl6XCI7XG4gY29uc3QgdXJsU2x1ZyA9IFwicHJvamV0L1wiO1xuICAgXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgIGV4cG9ydCBsZXQgcHJlc2VudGF0aW9uO1xuLy8gc2xpZGVzaG93IGNoYW5nZSBpbWFnZVx0XG5sZXQgaW1hZ2VTaG93SW5kZXggPSAxO1xuIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICAgaWYoaW1hZ2VTaG93SW5kZXggPT09IDEgKXtcbiAgICAgICAgaW1hZ2VTaG93SW5kZXggPSBwcmVzZW50YXRpb24ubGVuZ3RoO1xuICAgICB9ZWxzZXtcbiAgICAgICBpbWFnZVNob3dJbmRleCAtPSAxO1xuICAgICB9XG4gICB9O1xuIFxuIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICAgaWYgKGltYWdlU2hvd0luZGV4ID09PSBwcmVzZW50YXRpb24ubGVuZ3RoKXtcbiAgICAgICAgIGltYWdlU2hvd0luZGV4ID0gMVxuICAgICB9ZWxzZXtcbiAgICAgICBpbWFnZVNob3dJbmRleCArPSAxO1xuICAgICB9XG4gICB9IDtcbjwvc2NyaXB0PlxuXG48U3ZlbHRlU2VvXG4gIGRlc2NyaXB0aW9uPVwiUHLDqXNlbnRhaW9uIGRlcyBkaWZmw6lyZW50cyBwcm9qZXRzIHLDqWFsaXPDqXMgcGFyIGxlIGNvbGxlY3RpZiBCbGFzdGFydCwgY29tbWUgbCdleHBvc2l0aW9ucyB1bmlxdWUgbGVcbiAgdGVybWluYWwsIGxlIGRpbm9zYXVyZSBHdXN0YXZlIGRlIFJvbWFpbiBMYXJkYW5jaGV0IGV0IGxhIGZyZXNxdWUgbW9udW1lbnRhbGUgR29yaWxsYSB1cmJhaW5lIHLDqWFsaXPDqSBwYXIgS2Fsb3VmLiBDZXMgXG4gIHRyYXZhdXggc29udCByZW5kdXMgYXUgdHJhdmVycyBkZXMgcGhvdG9zIGRlIEZhYmVDb2xsYWdlIGV0IGRlcyB2aWTDqW9zIGRlIEplYW4tUGllcnJlKHN0YWZmdmlkw6lvKVwiXG4gIHRpdGxlPVwiUHJvamV0cyByw6lhbGlzw6lzIHBhciBsZSBjb2xsZWN0aWYgQmxhc3RhcnQuIEZyZXNxdWVzLCBncmFwaGVzIHNjdWxwdHVyZXMgbGVzIGFydGlzdGVzIHJlbMOodmVudCB0b3VzIGxlcyBkw6lmaXNcIlxuICBcbi8+XG5cbjxkaXY+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG57I2VhY2ggcHJlc2VudGF0aW9uIGFzIHBvc3R9XG4gPFNsaWRlIGltYWdlVXJsPXt1cmxwQXBpICsgcG9zdC5jb3Zlci51cmx9IFxuICAgICAgICAgIGFsdGVyblRleHQ9e3Bvc3QudGl0cmV9IFxuICAgICAgICAgIHNsaWRlTm89e2ltYWdlU2hvd0luZGV4fVxuICAgICAgICAgIHRvdGFsU2xpZGU9e3ByZXNlbnRhdGlvbi5sZW5ndGh9XG4gICAgICAgICAgaW1hZ2VTaG93aW5nPXsocG9zdC5pZFAgKiAtMSkgKyBwcmVzZW50YXRpb24ubGVuZ3RoICsgMSA9PT0gaW1hZ2VTaG93SW5kZXh9XG4gICAgICAgICAgaW5mb3M9e3Bvc3QudGl0cmV9XG4gICAgICAgICAgc2x1Zz17dXJsU2x1ZyArIHBvc3QuU2x1Z31cbiAgICAgICAgICAvPlxuey9lYWNofVxuPC9kaXY+XG48IS0tIE5leHQgYW5kIHByZXZpb3VzIGJ1dHRvbnMgLS0+XG48YSBocmVmPVwiYmxhc3QvI2Fycm93TFwiIGNsYXNzPVwicHJldlwiIG9uOmNsaWNrPXtwcmV2U2xpZGV9PiYjMTAwOTQ7PC9hPlxuPGEgaHJlZj1cImJsYXN0LyNhcnJvd1JcIiBjbGFzcz1cIm5leHRcIiBvbjpjbGljaz17bmV4dFNsaWRlfT4mIzEwMDk1OzwvYT5cbjwvZGl2PlxuXG48c3R5bGU+XG4uY29udGFpbmVyIHtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cbi5wcmV2LFxuLm5leHQge1xuIGN1cnNvcjogcG9pbnRlcjtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiA0MCU7XG4gd2lkdGg6IGF1dG87XG4gcGFkZGluZzogMjBweDtcbiBtYXJnaW4tbGVmdDogMjBweDtcbiBjb2xvcjogI2VmMTFhMTtcbiBmb250LXdlaWdodDogYm9sZDtcbiBmb250LXNpemU6IDI1cHg7XG4gYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG4gdXNlci1zZWxlY3Q6IG5vbmU7XG4gLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbn0gXG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gcmlnaHQ6IDA7XG4gbWFyZ2luLXJpZ2h0OiAyMHB4O1xuIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufSBcblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5wcmV2OmhvdmVyLFxuLm5leHQ6aG92ZXIge1xuICAgZm9udC1zaXplOiAzMHB4O1xufSBcbkBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgIC5wcmV2e1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2Nyk7XG4gICAgfVxuICAgIC5uZXh0e1xuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4yNjcpO1xuICAgIH1cbn1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFXcUMsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBQUwsR0FBSzs7Ozs7Ozs7aURBRkMsR0FBUTt1Q0FBTyxHQUFVOzs7aUNBQXpELEdBQUk7OztpQ0FFRSxHQUFJOzs7Ozs7OytDQUhjLEdBQVk7Ozs7Ozs7Ozs7Ozs7OzJFQUNKLEdBQVE7Ozs7O3dDQUFPLEdBQVU7Ozs7a0NBQXpELEdBQUk7Ozt1REFFc0IsR0FBSzs7O2tDQUF6QixHQUFJOzs7O2dEQUhjLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVBsQyxRQUFRO09BQ1IsVUFBVTtPQUNWLFlBQVk7T0FDWixLQUFLO09BQ0wsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NDNkRDLE9BQU8sWUFBRyxHQUFJLElBQUMsS0FBSyxDQUFDLEdBQUc7eUJBQ3BCLEdBQUksSUFBQyxLQUFLO2dDQUNiLEdBQWM7aUNBQ1gsR0FBWSxJQUFDLE1BQU07MkJBQ2hCLEdBQUksSUFBQyxHQUFHLElBQUksQ0FBQyxvQkFBSSxHQUFZLElBQUMsTUFBTSxHQUFHLENBQUMsd0JBQUssR0FBYztvQkFDbkUsR0FBSSxJQUFDLEtBQUs7VUFDWCxPQUFPLFlBQUcsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REFOakIsT0FBTyxZQUFHLEdBQUksSUFBQyxLQUFLLENBQUMsR0FBRzt1RUFDcEIsR0FBSSxJQUFDLEtBQUs7Z0ZBQ2IsR0FBYzsrRUFDWCxHQUFZLElBQUMsTUFBTTt5RkFDaEIsR0FBSSxJQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFJLEdBQVksSUFBQyxNQUFNLEdBQUcsQ0FBQyx3QkFBSyxHQUFjO2tFQUNuRSxHQUFJLElBQUMsS0FBSzt3REFDWCxPQUFPLFlBQUcsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FQNUIsR0FBWTs7OztnQ0FBakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQVl5QyxHQUFTOzJDQUNULEdBQVM7Ozs7Ozs7O2tDQWJqRCxHQUFZOzs7OytCQUFqQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7O2tDQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUE1REMsVUFBVSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O2VBYUEsT0FBTztPQUNyQixNQUFNLE9BQU9BLGFBQVk7R0FDN0IsR0FBRyxFQUFFLCtCQUErQjtHQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUVmLE9BQU8sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUNoQyxLQUFLLEVBQUUsVUFBVTtVQUVWLFlBQVksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87OztNQUd2QyxPQUFPLEdBQUcsdUJBQXVCO01BQ2pDLE9BQU8sR0FBRyxTQUFTOzs7OztPQUtaLFlBQVk7OztLQUV0QixjQUFjLEdBQUcsQ0FBQzs7T0FDZixTQUFTO01BQ1IsY0FBYyxLQUFLLENBQUM7bUJBQ3BCLGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTTs7bUJBRXJDLGNBQWMsSUFBSSxDQUFDOzs7O09BSW5CLFNBQVM7TUFDUCxjQUFjLEtBQUssWUFBWSxDQUFDLE1BQU07bUJBQ3RDLGNBQWMsR0FBRyxDQUFDOzttQkFFcEIsY0FBYyxJQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
