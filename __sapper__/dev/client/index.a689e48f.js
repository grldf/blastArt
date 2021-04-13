import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, c as create_component, u as empty, y as query_selector_all, g as claim_element, j as detach_dev, f as claim_space, b as claim_component, k as attr_dev, l as add_location, o as append_dev, n as insert_dev, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, w as validate_each_argument, z as text, h as children, A as claim_text, C as null_to_empty, D as set_data_dev, p as noop, x as destroy_each } from './client.da6aef1b.js';
import { S as SvelteSeo } from './SvelteSeo.5695eb58.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/collectif/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/collectif/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (74:2) {:else}
function create_else_block(ctx) {
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
			attr_dev(div, "class", "test svelte-12psx4l");
			add_location(div, file, 74, 2, 2386);
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
		id: create_else_block.name,
		type: "else",
		source: "(74:2) {:else}",
		ctx
	});

	return block;
}

// (55:2) {#if posts}
function create_if_block(ctx) {
	let div;
	let each_value = /*posts*/ ctx[0];
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
			attr_dev(div, "class", "content svelte-12psx4l");
			add_location(div, file, 55, 2, 1989);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*urlpApi, posts*/ 1) {
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
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(55:2) {#if posts}",
		ctx
	});

	return block;
}

// (57:2) {#each posts as post, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*post*/ ctx[1].nom + "";
	let t0;
	let t1;
	let p;
	let t2_value = /*post*/ ctx[1].description + "";
	let t2;
	let t3;
	let aside;
	let img;
	let img_src_value;
	let img_alt_value;
	let t4;

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
			img = element("img");
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
			img = claim_element(aside_nodes, "IMG", { src: true, alt: true, class: true });
			aside_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-12psx4l");
			add_location(h2, file, 59, 8, 2111);
			attr_dev(p, "class", "svelte-12psx4l");
			add_location(p, file, 60, 8, 2139);
			attr_dev(article, "class", "svelte-12psx4l");
			add_location(article, file, 58, 6, 2093);
			if (img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "portrait de " + /*post*/ ctx[1].nom);
			attr_dev(img, "class", "svelte-12psx4l");
			add_location(img, file, 65, 8, 2224);
			attr_dev(aside, "class", "svelte-12psx4l");
			add_location(aside, file, 64, 6, 2208);
			attr_dev(div, "class", "" + (null_to_empty(/*i*/ ctx[3] % 2 == 0 ? "impair" : "pair") + " svelte-12psx4l"));
			add_location(div, file, 57, 4, 2042);
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
			append_dev(aside, img);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && t0_value !== (t0_value = /*post*/ ctx[1].nom + "")) set_data_dev(t0, t0_value);
			if (dirty & /*posts*/ 1 && t2_value !== (t2_value = /*post*/ ctx[1].description + "")) set_data_dev(t2, t2_value);

			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = urlpApi + /*post*/ ctx[1].profilimage.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = "portrait de " + /*post*/ ctx[1].nom)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(57:2) {#each posts as post, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t0;
	let svelteseo;
	let t1;
	let if_block_anchor;
	let current;

	svelteseo = new SvelteSeo({
			props: {
				description: "Créé en 2014, Blast réunit plusieurs artistes urbains et porte ses projets auprès d’entités publiques et privées. Toujours plus monumentale, et toujours plus accessible, c’est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques. A l’​ origine du projet comme l’​ Exposition - oeuvre in-situ « Le Terminal « ​ à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité de ces artistes.",
				title: "Portrait des différents membres du collefif Blast Art. Kalouf peintre muraliste, Romain Lardanchet sculpteur et dessinateur, Fabe Collage photographe de la scène urbaine et Jean Pierre spécialisé dans le développement de productions audiovisuelles",
				openGraph: {
					type: "article",
					title: "Les membres du collectif Blast art",
					description: "Présentaion des membres du collectif Blastart. ",
					url: "https://blast-art.art/collectif",
					images: [
						{
							url: "https://blast-art.art/logo-512.png",
							width: 759,
							height: 585,
							alt: "Logo Blast art"
						}
					]
				}
			},
			$$inline: true
		});

	function select_block_type(ctx, dirty) {
		if (/*posts*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			link = element("link");
			t0 = space();
			create_component(svelteseo.$$.fragment);
			t1 = space();
			if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mne3ix\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(svelteseo.$$.fragment, nodes);
			t1 = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 34, 4, 778);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			mount_component(svelteseo, target, anchor);
			insert_dev(target, t1, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
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
			detach_dev(link);
			if (detaching) detach_dev(t0);
			destroy_component(svelteseo, detaching);
			if (detaching) detach_dev(t1);
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

const membreQuery = gql`
      query membre {
        collectifs(sort: "id:asc") {
          id
          nom
          description
          profilimage {
            url
          }
        }
      }
    `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: membreQuery });
	return { posts: results.data.collectifs };
}

let urlpApi = "https://grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Collectif", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Collectif> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		SvelteSeo,
		membreQuery,
		preload,
		urlpApi,
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

class Collectif extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Collectif",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Collectif> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Collectif>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Collectif>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Collectif;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTY4OWU0OGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29sbGVjdGlmL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBpbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbiAgICBpbXBvcnQgU3ZlbHRlU2VvIGZyb20gXCJzdmVsdGUtc2VvXCI7XG4gICAgY29uc3QgbWVtYnJlUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBtZW1icmUge1xuICAgICAgICBjb2xsZWN0aWZzKHNvcnQ6IFwiaWQ6YXNjXCIpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5vbVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgcHJvZmlsaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuICAgICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgICAgIHVyaTogXCJodHRwczovL3d3dy5ncmxkZmF1cmUueHl6L2dyYXBocWxcIixcbiAgICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG5cbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBtZW1icmVRdWVyeSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgcG9zdHM6IHJlc3VsdHMuZGF0YS5jb2xsZWN0aWZzIH07XG4gICAgfVxuICAgIGxldCB1cmxwQXBpID0gXCJodHRwczovL2dybGRmYXVyZS54eXpcIjtcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgcG9zdHM7XG4gIDwvc2NyaXB0PlxuICBcbiAgPHN2ZWx0ZTpoZWFkPlxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaXhuMWNqbi5jc3NcIiAvPlxuICA8L3N2ZWx0ZTpoZWFkPlxuICA8U3ZlbHRlU2VvXG4gIGRlc2NyaXB0aW9uPSBcIkNyw6nDqSBlbiAyMDE0LCBCbGFzdCByw6l1bml0IHBsdXNpZXVycyBhcnRpc3RlcyB1cmJhaW5zIGV0IHBvcnRlIHNlcyBwcm9qZXRzIGF1cHLDqHMgZOKAmWVudGl0w6lzIHB1YmxpcXVlcyBldCBwcml2w6llcy4gVG91am91cnMgcGx1cyBtb251bWVudGFsZSwgZXQgdG91am91cnMgcGx1cyBhY2Nlc3NpYmxlLCBj4oCZZXN0IGF2ZWMgY2V0dGUgZGV2aXNlIHF1ZSBCbGFzdCBjcsOpZSBzYW5zIGNlc3NlIGRlIG5vdXZlYXV4IHByb2pldHMgYXJ0aXN0aXF1ZXMuIEEgbOKAmeKAiyBvcmlnaW5lIGR1IHByb2pldCBjb21tZSBs4oCZ4oCLIEV4cG9zaXRpb24gLSBvZXV2cmUgaW4tc2l0dSDCqyBMZSBUZXJtaW5hbCDCqyDigIsgw6AgTHlvbiBlbiBKdWluIDIwMTguIExlIGNvbGxlY3RpZiBCTEFTVCBwcm9wb3NlIGRlcyDFk3V2cmVzIGFydGlzdGlxdWVzIGF0eXBpcXVlcyBncsOiY2Ugw6AgbGEgY29tcGzDqW1lbnRhcml0w6kgZGUgY2VzIGFydGlzdGVzLlwiXG4gIHRpdGxlPSBcIlBvcnRyYWl0IGRlcyBkaWZmw6lyZW50cyBtZW1icmVzIGR1IGNvbGxlZmlmIEJsYXN0IEFydC4gS2Fsb3VmIHBlaW50cmUgbXVyYWxpc3RlLCBSb21haW4gTGFyZGFuY2hldCBzY3VscHRldXIgZXQgZGVzc2luYXRldXIsIEZhYmUgQ29sbGFnZSBwaG90b2dyYXBoZSBkZSBsYSBzY8OobmUgdXJiYWluZSBldCBKZWFuIFBpZXJyZSBzcMOpY2lhbGlzw6kgZGFucyBsZSBkw6l2ZWxvcHBlbWVudCBkZSBwcm9kdWN0aW9ucyBhdWRpb3Zpc3VlbGxlc1wiXG4gIG9wZW5HcmFwaD17e1xuICB0eXBlOiBcImFydGljbGVcIixcbiAgdGl0bGU6IFwiTGVzIG1lbWJyZXMgZHUgY29sbGVjdGlmIEJsYXN0IGFydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByw6lzZW50YWlvbiBkZXMgbWVtYnJlcyBkdSBjb2xsZWN0aWYgQmxhc3RhcnQuIFwiLFxuICAgIHVybDogXCJodHRwczovL2JsYXN0LWFydC5hcnQvY29sbGVjdGlmXCIsXG4gICAgaW1hZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHVybDogXCJodHRwczovL2JsYXN0LWFydC5hcnQvbG9nby01MTIucG5nXCIsXG4gICAgICAgIHdpZHRoOiA3NTksXG4gICAgICAgIGhlaWdodDogNTg1LFxuICAgICAgICBhbHQ6IFwiTG9nbyBCbGFzdCBhcnRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfX1cbi8+XG4gIHsjaWYgcG9zdHN9XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIHsjZWFjaCBwb3N0cyBhcyBwb3N0LCBpfVxuICAgIDxkaXYgY2xhc3M9e2kgJSAyID09IDAgPyBcImltcGFpclwiIDogXCJwYWlyXCJ9PlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxoMj57cG9zdC5ub219PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3Bvc3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhc2lkZT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17dXJscEFwaSArIHBvc3QucHJvZmlsaW1hZ2UudXJsfVxuICAgICAgICAgIGFsdD17XCJwb3J0cmFpdCBkZSBcIiArIHBvc3Qubm9tfVxuICAgICAgICAvPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L2Rpdj5cbiAgey9lYWNofVxuICA8L2Rpdj5cbiAgezplbHNlfVxuICA8ZGl2IGNsYXNzPVwidGVzdFwiPkZVQ0s8L2Rpdj5cbnsvaWZ9XG4gIDxzdHlsZT5cbiAgICAuY29udGVudHtcbiAgICAgICAgZm9udC1mYW1pbHk6IGludGVyc3RhdGUgO1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDAgMDsgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZvbnQtZmFtaWx5OiBJbnRlcnN0YXRlO1xuICAgIH1cbiAgICBoMntcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgY29sb3I6ICMzYjNiMzg7XG4gICAgfVxuICAgIGFydGljbGUgaDIge1xuICAgICAgbWF4LXdpZHRoOiAyMnJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VmMTFhMTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICBcbiAgICBhc2lkZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIH1cbiAgICAucGFpcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxuICAgIC5wYWlyIGgyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tbGVmdDogNjYlO1xuICAgICAgbWF4LXdpZHRoOjQwcmVtO1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOjY2MHB4KXtcbiAgICAgIC5jb250ZW50e1xuICAgICAgICAgcGFkZGluZy10b3A6NDBweDtcbiAgICAgIH1cbiAgICAgIGRpdiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgfVxuICAgICAgLnBhaXIgaDIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIGFydGljbGUgaDIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xuICAgIH1cbiAgICBwe1xuICAgICAgbWFyZ2luLWxlZnQ6MjBweDtcbiAgICB9XG4gIH1cbiAgPC9zdHlsZT5cbiAgIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQXdEUyxHQUFLOzs7O2dDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7K0JBQVYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUdLLEdBQUksSUFBQyxHQUFHOzs7O3lCQUVWLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUtaLE9BQU8sWUFBRyxHQUFJLElBQUMsV0FBVyxDQUFDLEdBQUc7d0NBQzlCLGNBQWMsWUFBRyxHQUFJLElBQUMsR0FBRzs7Ozs7b0RBVnhCLEdBQUMsTUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztnRUFFakMsR0FBSSxJQUFDLEdBQUc7Z0VBRVYsR0FBSSxJQUFDLFdBQVc7OzJEQUtaLE9BQU8sWUFBRyxHQUFJLElBQUMsV0FBVyxDQUFDLEdBQUc7Ozs7aUVBQzlCLGNBQWMsWUFBRyxHQUFJLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBM0J0QyxJQUFJLEVBQUUsU0FBUztLQUNmLEtBQUssRUFBRSxvQ0FBb0M7S0FDekMsV0FBVyxFQUFFLGlEQUFpRDtLQUM5RCxHQUFHLEVBQUUsaUNBQWlDO0tBQ3RDLE1BQU07O09BRUYsR0FBRyxFQUFFLG9DQUFvQztPQUN6QyxLQUFLLEVBQUUsR0FBRztPQUNWLE1BQU0sRUFBRSxHQUFHO09BQ1gsR0FBRyxFQUFFLGdCQUFnQjs7Ozs7Ozs7O2dCQUt0QixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbkRGLFdBQVcsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7O2VBWUQsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLE1BQU0sT0FBT0EsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BR2IsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxXQUFXO1VBRVgsS0FBSyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVTs7O0lBRXJDLE9BQU8sR0FBRyx1QkFBdUI7Ozs7O09BSTFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
