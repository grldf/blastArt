import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, L as onMount, e as element, a as space, E as empty, u as query_selector_all, c as claim_element, f as detach_dev, g as claim_space, h as attr_dev, j as add_location, l as append_dev, k as insert_dev, n as noop, p as validate_each_argument, t as text, b as children, m as claim_text, r as set_data_dev, w as destroy_each } from './client.015efd8c.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/news/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/news/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	child_ctx[5] = i;
	return child_ctx;
}

// (66:0) {:else}
function create_else_block_1(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("FUCK");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "FUCK");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "test svelte-e7tod5");
			add_location(div, file, 66, 0, 1454);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(66:0) {:else}",
		ctx
	});

	return block;
}

// (45:0) {#if news}
function create_if_block(ctx) {
	let div;
	let each_value = /*news*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "content svelte-e7tod5");
			add_location(div, file, 45, 0, 1004);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news, urlpApi*/ 3) {
				each_value = /*news*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(45:0) {#if news}",
		ctx
	});

	return block;
}

// (59:8) {:else}
function create_else_block(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*urlpApi*/ ctx[1] + /*newpub*/ ctx[3].image.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*newpub*/ ctx[3].titre);
			attr_dev(img, "class", "svelte-e7tod5");
			add_location(img, file, 59, 10, 1329);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && img.src !== (img_src_value = /*urlpApi*/ ctx[1] + /*newpub*/ ctx[3].image.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*news*/ 1 && img_alt_value !== (img_alt_value = /*newpub*/ ctx[3].titre)) {
				attr_dev(img, "alt", img_alt_value);
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
		source: "(59:8) {:else}",
		ctx
	});

	return block;
}

// (57:8) {#if newpub.image === null}
function create_if_block_1(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "Blast logo");
			attr_dev(img, "class", "svelte-e7tod5");
			add_location(img, file, 57, 10, 1259);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(57:8) {#if newpub.image === null}",
		ctx
	});

	return block;
}

// (48:2) {#each news as newpub, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*newpub*/ ctx[3].titre + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*newpub*/ ctx[3].contenu + "";
	let t2;
	let t3;
	let aside;
	let t4;

	function select_block_type_1(ctx, dirty) {
		if (/*newpub*/ ctx[3].image === null) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			article = element("article");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			aside = element("aside");
			if_block.c();
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			article = claim_element(div_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			h2 = claim_element(article_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			aside = claim_element(div_nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);
			if_block.l(aside_nodes);
			aside_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-e7tod5");
			add_location(h2, file, 50, 8, 1106);
			attr_dev(p, "class", "svelte-e7tod5");
			add_location(p, file, 51, 8, 1138);
			attr_dev(article, "class", "svelte-e7tod5");
			add_location(article, file, 49, 6, 1088);
			attr_dev(aside, "class", "svelte-e7tod5");
			add_location(aside, file, 55, 6, 1205);
			attr_dev(div, "class", "impair svelte-e7tod5");
			add_location(div, file, 48, 4, 1061);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, article);
			append_dev(article, h2);
			append_dev(h2, t0);
			append_dev(article, t1);
			append_dev(article, p);
			append_dev(p, t2);
			append_dev(div, t3);
			append_dev(div, aside);
			if_block.m(aside, null);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && t0_value !== (t0_value = /*newpub*/ ctx[3].titre + "")) set_data_dev(t0, t0_value);
			if (dirty & /*news*/ 1 && t2_value !== (t2_value = /*newpub*/ ctx[3].contenu + "")) set_data_dev(t2, t2_value);

			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(aside, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:2) {#each news as newpub, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*news*/ ctx[0]) return create_if_block;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			link = element("link");
			t = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-de5yl2\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Le collectif";
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 42, 2, 909);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(link);
			if (detaching) detach_dev(t);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots("News", slots, []);

	const newsQuery = gql`
    query membre {
      nouvelles(sort: "id:desc") {
        id
        titre
        contenu
        datePublication
        image {
          url
        }
      }
    }
  `;

	onMount(async () => {
		await fetch(`https://www.grldfaure.xyz/graphql`).then(r => r.json()).then(data => {
			$$invalidate(0, news = data.data.nouvelles);
		});
	});

	// export async function preload() {
	//   const client = new ApolloClient({
	//     uri: "https://www.grldfaure.xyz/graphql",
	//     fetch: this.fetch,
	//   });
	//   const results = await client.query({
	//     query: newsQuery,
	//   });
	//   return { news: results.data.nouvelles };
	// }
	let urlpApi = "https://www.grldfaure.xyz";

	let { news } = $$props;
	const writable_props = ["news"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<News> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("news" in $$props) $$invalidate(0, news = $$props.news);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		onMount,
		newsQuery,
		urlpApi,
		news
	});

	$$self.$inject_state = $$props => {
		if ("urlpApi" in $$props) $$invalidate(1, urlpApi = $$props.urlpApi);
		if ("news" in $$props) $$invalidate(0, news = $$props.news);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [news, urlpApi];
}

class News extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { news: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "News",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*news*/ ctx[0] === undefined && !("news" in props)) {
			console.warn("<News> was created without expected prop 'news'");
		}
	}

	get news() {
		throw new Error("<News>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set news(value) {
		throw new Error("<News>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default News;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2IwYjk3MjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3cy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCA+XG4gIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgY29uc3QgbmV3c1F1ZXJ5ID0gZ3FsYFxuICAgIHF1ZXJ5IG1lbWJyZSB7XG4gICAgICBub3V2ZWxsZXMoc29ydDogXCJpZDpkZXNjXCIpIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0cmVcbiAgICAgICAgY29udGVudVxuICAgICAgICBkYXRlUHVibGljYXRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKGBodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxgKVxuICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBuZXdzID0gZGF0YS5kYXRhLm5vdXZlbGxlcztcbiAgICAgIH0pO1xuICB9KVxuICAvLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgLy8gICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgLy8gICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgLy8gICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAvLyAgIH0pO1xuICAvLyAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAvLyAgICAgcXVlcnk6IG5ld3NRdWVyeSxcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4geyBuZXdzOiByZXN1bHRzLmRhdGEubm91dmVsbGVzIH07XG4gIC8vIH1cblxuICBsZXQgdXJscEFwaSA9IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5elwiO1xuXG4gIGV4cG9ydCBsZXQgbmV3cztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5MZSBjb2xsZWN0aWY8L3RpdGxlPlxuICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2l4bjFjam4uY3NzXCIgLz5cbjwvc3ZlbHRlOmhlYWQ+XG57I2lmIG5ld3N9XG48ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICBcbiAgeyNlYWNoIG5ld3MgYXMgbmV3cHViLCBpfVxuICAgIDxkaXYgY2xhc3M9XCJpbXBhaXJcIj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+e25ld3B1Yi50aXRyZX08L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7bmV3cHViLmNvbnRlbnV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgeyNpZiBuZXdwdWIuaW1hZ2UgPT09IG51bGx9XG4gICAgICAgICAgPGltZyBzcmM9XCJsb2dvLTUxMi5wbmdcIiBhbHQ9XCJCbGFzdCBsb2dvXCIgLz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgIDxpbWcgc3JjPXt1cmxwQXBpICsgbmV3cHViLmltYWdlLnVybH0gYWx0PXtuZXdwdWIudGl0cmV9IC8+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L2FzaWRlPlxuICAgIDwvZGl2PlxuICB7L2VhY2h9XG48L2Rpdj5cbns6ZWxzZX1cbjxkaXYgY2xhc3M9XCJ0ZXN0XCI+RlVDSzwvZGl2Plxuey9pZn1cbjxzdHlsZT5cbiAgLnRlc3R7XG4gICAgZm9udC1zaXplOiAxMDB2aDtcbiAgfVxuICAuY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IGludGVyc3RhdGU7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIGRpdiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogSW50ZXJzdGF0ZTtcbiAgfVxuICBhcnRpY2xlIGgyIHtcbiAgICBtYXgtd2lkdGg6IDIycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZjExYTE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICBhc2lkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgfVxuXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQStDUyxHQUFJOzs7O2dDQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFDLEdBQUk7Ozs7K0JBQVQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBWVksR0FBTyxpQkFBRyxHQUFNLElBQUMsS0FBSyxDQUFDLEdBQUc7bURBQU8sR0FBTSxJQUFDLEtBQUs7Ozs7Ozs7O3NFQUE3QyxHQUFPLGlCQUFHLEdBQU0sSUFBQyxLQUFLLENBQUMsR0FBRzs7OzsyRUFBTyxHQUFNLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBVHBELEdBQU0sSUFBQyxLQUFLOzs7OzJCQUVkLEdBQU0sSUFBQyxPQUFPOzs7Ozs7O2lCQUlaLEdBQU0sSUFBQyxLQUFLLEtBQUssSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQU5yQixHQUFNLElBQUMsS0FBSztpRUFFZCxHQUFNLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQVJwQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpDRCxTQUFTLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Q0FjckIsT0FBTztRQUNDLEtBQUssc0NBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUNoQixJQUFJLENBQUMsSUFBSTttQkFDUixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7OztLQWM1QixPQUFPLEdBQUcsMkJBQTJCOztPQUU5QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
