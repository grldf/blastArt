import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, q as validate_each_argument, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, h as claim_space, f as claim_text, g as detach_dev, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, o as set_data_dev, A as query_selector_all, p as noop, D as destroy_each } from './client.adfb2fde.js';
import { s as src, D as DefaultClient, a as assertIdValue } from './bundle.esm.da9dac77.js';

/* src/routes/Presse/index.svelte generated by Svelte v3.32.3 */
const file = "src/routes/Presse/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (39:0) {#each posts as article}
function create_each_block(ctx) {
	let article;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let p;
	let a;
	let t1_value = /*article*/ ctx[1].commentaire + "";
	let t1;
	let br;
	let t2;
	let span;
	let t3;
	let a_href_value;
	let t4;

	const block = {
		c: function create() {
			article = element("article");
			img = element("img");
			t0 = space();
			p = element("p");
			a = element("a");
			t1 = text(t1_value);
			br = element("br");
			t2 = space();
			span = element("span");
			t3 = text("☞");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			img = claim_element(article_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			br = claim_element(a_nodes, "BR", {});
			t2 = claim_space(a_nodes);
			span = claim_element(a_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, "☞");
			span_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(article_nodes);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*article*/ ctx[1].commentaire);
			attr_dev(img, "class", "svelte-13sgkhr");
			add_location(img, file, 42, 2, 915);
			add_location(br, file, 43, 65, 1051);
			attr_dev(span, "class", "svelte-13sgkhr");
			add_location(span, file, 43, 71, 1057);
			attr_dev(a, "href", a_href_value = /*article*/ ctx[1].lien);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-13sgkhr");
			add_location(a, file, 43, 5, 991);
			attr_dev(p, "class", "svelte-13sgkhr");
			add_location(p, file, 43, 2, 988);
			attr_dev(article, "class", "svelte-13sgkhr");
			add_location(article, file, 40, 0, 896);
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, img);
			append_dev(article, t0);
			append_dev(article, p);
			append_dev(p, a);
			append_dev(a, t1);
			append_dev(a, br);
			append_dev(a, t2);
			append_dev(a, span);
			append_dev(span, t3);
			append_dev(article, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = /*article*/ ctx[1].commentaire)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*article*/ ctx[1].commentaire + "")) set_data_dev(t1, t1_value);

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = /*article*/ ctx[1].lien)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(39:0) {#each posts as article}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let each_value = /*posts*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-j7ddmf\"]", document.head);
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
			document.title = "Presse";
			attr_dev(div, "class", "container svelte-13sgkhr");
			add_location(div, file, 37, 0, 846);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts, urlpApi*/ 1) {
				each_value = /*posts*/ ctx[0];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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

const presseQuery = src`
      query presse {
        presses(sort:"dateParution:desc"){
            id
            commentaire
            lien
            logoSite{
                url
  	        }
        }
    }
    `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: presseQuery });
	return { posts: results.data.presses };
}

let urlpApi = "http://51.210.96.39:1337";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Presse", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Presse> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql: src,
		presseQuery,
		preload,
		urlpApi,
		assertIdValue,
		posts
	});

	$$self.$inject_state = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [posts];
}

class Presse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Presse",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Presse> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Presse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Presse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Presse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmI5ZWM5NWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvUHJlc3NlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuICBcbiAgICBjb25zdCBwcmVzc2VRdWVyeSA9IGdxbGBcbiAgICAgIHF1ZXJ5IHByZXNzZSB7XG4gICAgICAgIHByZXNzZXMoc29ydDpcImRhdGVQYXJ1dGlvbjpkZXNjXCIpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGNvbW1lbnRhaXJlXG4gICAgICAgICAgICBsaWVuXG4gICAgICAgICAgICBsb2dvU2l0ZXtcbiAgICAgICAgICAgICAgICB1cmxcbiAgXHQgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBgO1xuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgdXJpOiBcImh0dHA6Ly81MS4yMTAuOTYuMzk6MTMzNy9ncmFwaHFsXCIsXG4gICAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IHByZXNzZVF1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBwb3N0czogcmVzdWx0cy5kYXRhLnByZXNzZXMgfTtcbiAgICB9XG4gICAgbGV0IHVybHBBcGkgPSBcImh0dHA6Ly81MS4yMTAuOTYuMzk6MTMzN1wiO1xuICA8L3NjcmlwdD5cbiAgXG4gIDxzY3JpcHQ+XG5pbXBvcnQgeyBhc3NlcnRJZFZhbHVlIH0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xuXG4gICAgZXhwb3J0IGxldCBwb3N0cztcbiAgPC9zY3JpcHQ+XG4gIDxzdmVsdGU6aGVhZD5cbiAgICA8dGl0bGU+UHJlc3NlPC90aXRsZT5cbiAgPC9zdmVsdGU6aGVhZD5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbnsjZWFjaCBwb3N0cyBhcyBhcnRpY2xlfVxuXG48YXJ0aWNsZT5cbiAgICAgIFxuICA8aW1nIHNyYz17dXJscEFwaSArIGFydGljbGUubG9nb1NpdGUudXJsfSBhbHQ9e2FydGljbGUuY29tbWVudGFpcmV9IC8+XG4gIDxwPjxhIGhyZWY9e2FydGljbGUubGllbn0gdGFyZ2V0PVwiX2JsYW5rXCI+e2FydGljbGUuY29tbWVudGFpcmV9PGJyLz4gPHNwYW4+JiM5NzU4Ozwvc3Bhbj48L2E+PC9wPlxuIFxuPC9hcnRpY2xlPlxuXG57L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOjY1cHggMjBweCAwIDIwcHg7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICAgIFxuICAgIH1cbi5jb250YWluZXIgPiBhcnRpY2xlIHtcbiAgICBib3JkZXI6c29saWQgMXB4ICNlZjExYTE7XG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICBqdXN0aWZ5LXNlbGY6IHN0cmV0Y2g7XG59XG5pbWd7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2VmMTFhMTtcbn1cbmFydGljbGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MDkwO1xufVxucCwgYXtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjb2xvcjojZmZmO1xufVxuYTpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbnNwYW46aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgI2VmMTFhMTtcbn1cbnNwYW57XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiMwMDA7XG59XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJncWwiLCJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkEyQzZDLEdBQU8sSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FEcEQsT0FBTyxlQUFHLEdBQU8sSUFBQyxRQUFRLENBQUMsR0FBRztvREFBTyxHQUFPLElBQUMsV0FBVzs7Ozs7O2tEQUN0RCxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBRGQsT0FBTyxlQUFHLEdBQU8sSUFBQyxRQUFRLENBQUMsR0FBRzs7Ozs2RUFBTyxHQUFPLElBQUMsV0FBVzs7OzttRUFDdkIsR0FBTyxJQUFDLFdBQVc7OzJFQUFsRCxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTG5CLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBQUMsR0FBSzs7OzsrQkFBVixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbENJLFdBQVcsR0FBR0EsR0FBRzs7Ozs7Ozs7Ozs7OztlQVlELE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUNyQyxNQUFNLE9BQU9DLGFBQVk7R0FDN0IsR0FBRyxFQUFFLGtDQUFrQztHQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE9BQU8sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUNoQyxLQUFLLEVBQUUsV0FBVztVQUVYLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU87OztJQUVsQyxPQUFPLEdBQUcsMEJBQTBCOzs7OztPQU03QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
