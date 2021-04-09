import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, w as validate_each_argument, v as validate_slots, e as element, a as space, z as text, g as claim_element, h as children, f as claim_space, A as claim_text, j as detach_dev, k as attr_dev, l as add_location, n as insert_dev, o as append_dev, D as set_data_dev, c as create_component, b as claim_component, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, x as destroy_each } from './client.3d53b992.js';
import { S as SvelteSeo } from './SvelteSeo.738429d4.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/presse/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/presse/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (48:2) {#each liens as article}
function create_each_block(ctx) {
	let a;
	let article;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let p;
	let t1_value = /*article*/ ctx[1].commentaire + "";
	let t1;
	let t2;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			article = element("article");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			img = claim_element(article_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			t2 = claim_space(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "lien vers l'article sur le projet  " + /*article*/ ctx[1].commentaire);
			attr_dev(img, "class", "svelte-qslr4f");
			add_location(img, file, 50, 6, 1358);
			attr_dev(p, "class", "svelte-qslr4f");
			add_location(p, file, 51, 6, 1472);
			attr_dev(article, "class", "svelte-qslr4f");
			add_location(article, file, 49, 4, 1342);
			attr_dev(a, "href", a_href_value = /*article*/ ctx[1].lien);
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-qslr4f");
			add_location(a, file, 48, 2, 1298);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, article);
			append_dev(article, img);
			append_dev(article, t0);
			append_dev(article, p);
			append_dev(p, t1);
			append_dev(a, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*liens*/ 1 && img.src !== (img_src_value = urlpApi + /*article*/ ctx[1].logoSite.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*liens*/ 1 && img_alt_value !== (img_alt_value = "lien vers l'article sur le projet  " + /*article*/ ctx[1].commentaire)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*liens*/ 1 && t1_value !== (t1_value = /*article*/ ctx[1].commentaire + "")) set_data_dev(t1, t1_value);

			if (dirty & /*liens*/ 1 && a_href_value !== (a_href_value = /*article*/ ctx[1].lien)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:2) {#each liens as article}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let svelteseo;
	let t0;
	let div;
	let a;
	let article;
	let img;
	let img_src_value;
	let t1;
	let p;
	let t2;
	let t3;
	let current;

	svelteseo = new SvelteSeo({
			props: {
				description: "Retrouvez un ensemble de liens vers des articles de presse sur le collectif Blast et ces membres.\n  Découvrez également des vidéos et des reportages sur les oeuvres du collectif",
				title: "La Presse parle de nous. Découvrez des reportages articles, vidéos et interviews de Blast"
			},
			$$inline: true
		});

	let each_value = /*liens*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			create_component(svelteseo.$$.fragment);
			t0 = space();
			div = element("div");
			a = element("a");
			article = element("article");
			img = element("img");
			t1 = space();
			p = element("p");
			t2 = text("Article Symbioses - 2020");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			claim_component(svelteseo.$$.fragment, nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, target: true, class: true });
			var a_nodes = children(a);
			article = claim_element(a_nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			img = claim_element(article_nodes, "IMG", { src: true, alt: true, class: true });
			t1 = claim_space(article_nodes);
			p = claim_element(article_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Article Symbioses - 2020");
			p_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "https://www.grldfaure.xyz/uploads/Logo_Urban_Arts_9be6a597ec.JPG")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo urban arts");
			attr_dev(img, "class", "svelte-qslr4f");
			add_location(img, file, 41, 4, 1100);
			attr_dev(p, "class", "svelte-qslr4f");
			add_location(p, file, 42, 4, 1205);
			attr_dev(article, "class", "svelte-qslr4f");
			add_location(article, file, 40, 67, 1086);
			attr_dev(a, "href", "/Symbioses-Article-UrbanArts-Blast.pdf");
			attr_dev(a, "target", "_blank");
			attr_dev(a, "class", "svelte-qslr4f");
			add_location(a, file, 40, 2, 1021);
			attr_dev(div, "class", "container svelte-qslr4f");
			add_location(div, file, 39, 0, 995);
		},
		m: function mount(target, anchor) {
			mount_component(svelteseo, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, article);
			append_dev(article, img);
			append_dev(article, t1);
			append_dev(article, p);
			append_dev(p, t2);
			append_dev(div, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*liens, urlpApi*/ 1) {
				each_value = /*liens*/ ctx[0];
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
		i: function intro(local) {
			if (current) return;
			transition_in(svelteseo.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(svelteseo.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(svelteseo, detaching);
			if (detaching) detach_dev(t0);
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

const presseQuery = gql`
    query presse {
      presses(sort: "dateParution:desc") {
        id
        commentaire
        lien
        logoSite {
          url
        }
      }
    }
  `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: presseQuery });
	return { liens: results.data.presses };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Presse", slots, []);
	let { liens } = $$props;
	const writable_props = ["liens"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Presse> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		SvelteSeo,
		presseQuery,
		preload,
		urlpApi,
		liens
	});

	$$self.$inject_state = $$props => {
		if ("liens" in $$props) $$invalidate(0, liens = $$props.liens);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [liens];
}

class Presse extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { liens: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Presse",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*liens*/ ctx[0] === undefined && !("liens" in props)) {
			console.warn("<Presse> was created without expected prop 'liens'");
		}
	}

	get liens() {
		throw new Error("<Presse>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set liens(value) {
		throw new Error("<Presse>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Presse;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTM3OGYwZDYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJlc3NlL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG4gIGltcG9ydCBTdmVsdGVTZW8gZnJvbSBcInN2ZWx0ZS1zZW9cIjtcblxuICBjb25zdCBwcmVzc2VRdWVyeSA9IGdxbGBcbiAgICBxdWVyeSBwcmVzc2Uge1xuICAgICAgcHJlc3Nlcyhzb3J0OiBcImRhdGVQYXJ1dGlvbjpkZXNjXCIpIHtcbiAgICAgICAgaWRcbiAgICAgICAgY29tbWVudGFpcmVcbiAgICAgICAgbGllblxuICAgICAgICBsb2dvU2l0ZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG4gICAgfSk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICBxdWVyeTogcHJlc3NlUXVlcnksXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgbGllbnM6IHJlc3VsdHMuZGF0YS5wcmVzc2VzIH07XG4gIH1cbiAgbGV0IHVybHBBcGkgPSBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXpcIjtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IGxpZW5zO1xuPC9zY3JpcHQ+XG5cbjxTdmVsdGVTZW9cbiAgZGVzY3JpcHRpb249XCJSZXRyb3V2ZXogdW4gZW5zZW1ibGUgZGUgbGllbnMgdmVycyBkZXMgYXJ0aWNsZXMgZGUgcHJlc3NlIHN1ciBsZSBjb2xsZWN0aWYgQmxhc3QgZXQgY2VzIG1lbWJyZXMuXG4gIETDqWNvdXZyZXogw6lnYWxlbWVudCBkZXMgdmlkw6lvcyBldCBkZXMgcmVwb3J0YWdlcyBzdXIgbGVzIG9ldXZyZXMgZHUgY29sbGVjdGlmXCJcbiAgdGl0bGU9XCJMYSBQcmVzc2UgcGFybGUgZGUgbm91cy4gRMOpY291dnJleiBkZXMgcmVwb3J0YWdlcyBhcnRpY2xlcywgdmlkw6lvcyBldCBpbnRlcnZpZXdzIGRlIEJsYXN0XCJcbi8+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGEgaHJlZj1cIi9TeW1iaW9zZXMtQXJ0aWNsZS1VcmJhbkFydHMtQmxhc3QucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGFydGljbGU+XG4gICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L3VwbG9hZHMvTG9nb19VcmJhbl9BcnRzXzliZTZhNTk3ZWMuSlBHXCIgYWx0PVwibG9nbyB1cmJhbiBhcnRzXCIgLz5cbiAgICA8cD5cbiAgICAgICAgQXJ0aWNsZSBTeW1iaW9zZXMgLSAyMDIwXG4gICAgPC9wPlxuICA8L2FydGljbGU+XG48L2E+XG4gIHsjZWFjaCBsaWVucyBhcyBhcnRpY2xlfVxuICA8YSBocmVmPXthcnRpY2xlLmxpZW59IHRhcmdldD1cIl9ibGFua1wiPlxuICAgIDxhcnRpY2xlPlxuICAgICAgPGltZyBzcmM9e3VybHBBcGkgKyBhcnRpY2xlLmxvZ29TaXRlLnVybH0gYWx0PVwibGllbiB2ZXJzIGwnYXJ0aWNsZSBzdXIgbGUgcHJvamV0ICB7YXJ0aWNsZS5jb21tZW50YWlyZX1cIiAvPlxuICAgICAgPHA+XG4gICAgICAgICAge2FydGljbGUuY29tbWVudGFpcmV9IFxuICAgICAgPC9wPlxuICAgIDwvYXJ0aWNsZT5cbiAgPC9hPlxuICB7L2VhY2h9XG48L2Rpdj5cblxuPHN0eWxlPlxuICBcbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA2NXB4IDIwcHggNDBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlO1xuICB9XG4gIFxuICAuY29udGFpbmVyID4gYSA+YXJ0aWNsZSB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2VmMTFhMTtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICBmbGV4OnN0YXJ0O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNlZjExYTE7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXgtaGVpZ2h0OjEyNXB4O1xuICB9XG4gIFxuICBwLFxuICBhIHtcbiAgICBjb2xvcjogIzIxMjIxYzs7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFvRFcsR0FBTyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FGZCxPQUFPLGVBQUcsR0FBTyxJQUFDLFFBQVEsQ0FBQyxHQUFHOzRGQUEyQyxHQUFPLElBQUMsV0FBVzs7Ozs7OztrREFGakcsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7OzsyREFFUCxPQUFPLGVBQUcsR0FBTyxJQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O3FIQUEyQyxHQUFPLElBQUMsV0FBVzs7OzttRUFFakcsR0FBTyxJQUFDLFdBQVc7OzJFQUpuQixHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQURkLEdBQUs7Ozs7Z0NBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFBQyxHQUFLOzs7OytCQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTNDQSxXQUFXLEdBQUcsR0FBRzs7Ozs7Ozs7Ozs7OztlQVlELE9BQU87T0FDckIsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFYixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFdBQVc7VUFFWCxLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPOzs7SUFFbEMsT0FBTyxHQUFHLDJCQUEyQjs7Ozs7T0FJOUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
