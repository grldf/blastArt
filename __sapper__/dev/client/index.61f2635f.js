import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, w as validate_each_argument, v as validate_slots, e as element, z as text, a as space, g as claim_element, h as children, A as claim_text, j as detach_dev, f as claim_space, k as attr_dev, l as add_location, n as insert_dev, o as append_dev, D as set_data_dev, c as create_component, b as claim_component, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, y as query_selector_all, x as destroy_each, p as noop } from './client.c6e3a18d.js';
import { t } from './snarkdown.es.257e5e6b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/news/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/news/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (56:8) {:else}
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
			if (img.src !== (img_src_value = urlpApi + /*newpub*/ ctx[1].image.url)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*newpub*/ ctx[1].titre);
			attr_dev(img, "class", "svelte-v8q2la");
			add_location(img, file, 56, 10, 1511);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && img.src !== (img_src_value = urlpApi + /*newpub*/ ctx[1].image.url)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*news*/ 1 && img_alt_value !== (img_alt_value = /*newpub*/ ctx[1].titre)) {
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
		source: "(56:8) {:else}",
		ctx
	});

	return block;
}

// (54:8) {#if newpub.image === null}
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
			attr_dev(img, "class", "svelte-v8q2la");
			add_location(img, file, 54, 10, 1441);
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
		source: "(54:8) {#if newpub.image === null}",
		ctx
	});

	return block;
}

// (47:2) {#each news as newpub, i}
function create_each_block(ctx) {
	let div;
	let article;
	let h2;
	let t0_value = /*newpub*/ ctx[1].titre + "";
	let t0;
	let t1;
	let p;
	let raw_value = t(/*newpub*/ ctx[1].contenu) + "";
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*newpub*/ ctx[1].image === null) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			article = element("article");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = space();
			if_block.c();
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
			p_nodes.forEach(detach_dev);
			t2 = claim_space(article_nodes);
			if_block.l(article_nodes);
			article_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-v8q2la");
			add_location(h2, file, 49, 8, 1301);
			attr_dev(p, "class", "svelte-v8q2la");
			add_location(p, file, 50, 8, 1333);
			attr_dev(article, "class", "svelte-v8q2la");
			add_location(article, file, 48, 6, 1283);
			attr_dev(div, "class", "impair svelte-v8q2la");
			add_location(div, file, 47, 4, 1256);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, article);
			append_dev(article, h2);
			append_dev(h2, t0);
			append_dev(article, t1);
			append_dev(article, p);
			p.innerHTML = raw_value;
			append_dev(article, t2);
			if_block.m(article, null);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 1 && t0_value !== (t0_value = /*newpub*/ ctx[1].titre + "")) set_data_dev(t0, t0_value);
			if (dirty & /*news*/ 1 && raw_value !== (raw_value = t(/*newpub*/ ctx[1].contenu) + "")) p.innerHTML = raw_value;
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(article, null);
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
		source: "(47:2) {#each news as newpub, i}",
		ctx
	});

	return block;
}

// (63:2) {#if true}
function create_if_block(ctx) {
	let backtotop;
	let current;

	backtotop = new BackToTop({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(backtotop.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(backtotop.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(backtotop, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const backtotop_changes = {};

			if (dirty & /*$$scope*/ 16) {
				backtotop_changes.$$scope = { dirty, ctx };
			}

			backtotop.$set(backtotop_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(backtotop.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(backtotop.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(backtotop, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(63:2) {#if true}",
		ctx
	});

	return block;
}

// (64:4) <BackToTop>
function create_default_slot(ctx) {
	let button;
	let icon;
	let current;

	icon = new Icon({
			props: { data: chevronUp },
			$$inline: true
		});

	const block = {
		c: function create() {
			button = element("button");
			create_component(icon.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			claim_component(icon.$$.fragment, button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-secondary btn-to-top");
			attr_dev(button, "type", "button");
			add_location(button, file, 64, 6, 1683);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			mount_component(icon, button, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			destroy_component(icon);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(64:4) <BackToTop>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let meta;
	let link;
	let t0;
	let div;
	let t1;
	let br;
	let t2;
	let current;
	let each_value = /*news*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block = create_if_block(ctx);

	const block = {
		c: function create() {
			meta = element("meta");
			link = element("link");
			t0 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			br = element("br");
			t2 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1cuq0in\"]", document.head);
			meta = claim_element(head_nodes, "META", { description: true });
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			t1 = claim_space(div_nodes);
			br = claim_element(div_nodes, "BR", { class: true });
			t2 = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta, "description", "Retrouvez les news du collectifs Blast. A travers de courts textes et de photos \n  apprenez qu'elles sont les avancées de nos projets artistiques et les rencontres que nous faisons \n  et ce qui a pu nous faire vibrer");
			add_location(meta, file, 39, 2, 791);
			document.title = "News du collectif sur les projets et les rencontres que nous faisons";
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://use.typekit.net/ixn1cjn.css");
			add_location(link, file, 43, 2, 1118);
			attr_dev(br, "class", "last-br svelte-v8q2la");
			add_location(br, file, 61, 2, 1625);
			attr_dev(div, "class", "content svelte-v8q2la");
			add_location(div, file, 45, 0, 1202);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta);
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t1);
			append_dev(div, br);
			append_dev(div, t2);
			if (if_block) if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*news, urlpApi, snarkdown*/ 1) {
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
						each_blocks[i].m(div, t1);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if_block.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(meta);
			detach_dev(link);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (if_block) if_block.d();
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

const newsQuery = gql`
      query news {
        nouvelles(sort: "datePublication:desc") {
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

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: newsQuery });
	return { news: results.data.nouvelles };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("News", slots, []);
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
		snarkdown: t,
		newsQuery,
		preload,
		urlpApi,
		news
	});

	$$self.$inject_state = $$props => {
		if ("news" in $$props) $$invalidate(0, news = $$props.news);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [news];
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
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjFmMjYzNWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3cy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcbmltcG9ydCBzbmFya2Rvd24gZnJvbSBcInNuYXJrZG93blwiO1xuXG4gIGNvbnN0IG5ld3NRdWVyeSA9IGdxbGBcbiAgICAgIHF1ZXJ5IG5ld3Mge1xuICAgICAgICBub3V2ZWxsZXMoc29ydDogXCJkYXRlUHVibGljYXRpb246ZGVzY1wiKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRyZVxuICAgICAgICAgIGNvbnRlbnVcbiAgICAgICAgICBkYXRlUHVibGljYXRpb25cbiAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICAgIFxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuICAgICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogbmV3c1F1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBuZXdzOiByZXN1bHRzLmRhdGEubm91dmVsbGVzIH07XG4gICAgfVxuICBsZXQgdXJscEFwaSA9IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5elwiO1xuICAgIFxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIFxuICBleHBvcnQgbGV0IG5ld3M7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8bWV0YSBkZXNjcmlwdGlvbj1cIlJldHJvdXZleiBsZXMgbmV3cyBkdSBjb2xsZWN0aWZzIEJsYXN0LiBBIHRyYXZlcnMgZGUgY291cnRzIHRleHRlcyBldCBkZSBwaG90b3MgXG4gIGFwcHJlbmV6IHF1J2VsbGVzIHNvbnQgbGVzIGF2YW5jw6llcyBkZSBub3MgcHJvamV0cyBhcnRpc3RpcXVlcyBldCBsZXMgcmVuY29udHJlcyBxdWUgbm91cyBmYWlzb25zIFxuICBldCBjZSBxdWkgYSBwdSBub3VzIGZhaXJlIHZpYnJlclwiLz5cbiAgPHRpdGxlPk5ld3MgZHUgY29sbGVjdGlmIHN1ciBsZXMgcHJvamV0cyBldCBsZXMgcmVuY29udHJlcyBxdWUgbm91cyBmYWlzb25zPC90aXRsZT5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9peG4xY2puLmNzc1wiIC8+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgeyNlYWNoIG5ld3MgYXMgbmV3cHViLCBpfVxuICAgIDxkaXYgY2xhc3M9XCJpbXBhaXJcIj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8aDI+e25ld3B1Yi50aXRyZX08L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7QGh0bWwgc25hcmtkb3duIChuZXdwdWIuY29udGVudSl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgeyNpZiBuZXdwdWIuaW1hZ2UgPT09IG51bGx9XG4gICAgICAgICAgPGltZyBzcmM9XCJsb2dvLTUxMi5wbmdcIiBhbHQ9XCJCbGFzdCBsb2dvXCIgLz5cbiAgICAgICAgezplbHNlfVxuICAgICAgICAgIDxpbWcgc3JjPXt1cmxwQXBpICsgbmV3cHViLmltYWdlLnVybH0gYWx0PXtuZXdwdWIudGl0cmV9IC8+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9kaXY+XG4gIHsvZWFjaH1cbiAgPGJyIGNsYXNzPVwibGFzdC1iclwiIC8+XG4gIHsjaWYgcHJvY2Vzcy5icm93c2VyfVxuICAgIDxCYWNrVG9Ub3A+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXRvLXRvcFwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgPEljb24gZGF0YT17Y2hldnJvblVwfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9CYWNrVG9Ub3A+XG4gIHsvaWZ9XG48L2Rpdj5cbjxzdHlsZT5cbiAgXG4gIC5jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZTtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgZGl2IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlcnN0YXRlO1xuICB9XG4gIGFydGljbGUgaDIge1xuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgI2VmMTFhMTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XG4gICAgY29sb3I6ICMzYjNiMzg7XG4gIH1cbiAgcHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA5MHZ3O1xuICB9XG4gIC5sYXN0LWJyIHtwYWRkaW5nLWJvdHRvbTogMTByZW07XG59XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgYXJ0aWNsZSBoMiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInNuYXJrZG93biIsIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQXdEb0IsT0FBTyxjQUFHLEdBQU0sSUFBQyxLQUFLLENBQUMsR0FBRzttREFBTyxHQUFNLElBQUMsS0FBSzs7Ozs7Ozs7MERBQTdDLE9BQU8sY0FBRyxHQUFNLElBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7MkVBQU8sR0FBTSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQVBwRCxHQUFNLElBQUMsS0FBSzs7OztpQkFFUkEsQ0FBUyxZQUFFLEdBQU0sSUFBQyxPQUFPOzs7O2lCQUU3QixHQUFNLElBQUMsS0FBSyxLQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFKckIsR0FBTSxJQUFDLEtBQUs7d0RBRVJBLENBQVMsWUFBRSxHQUFNLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBY3RCLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFuQnBCLEdBQUk7Ozs7Z0NBQVQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBQyxHQUFJOzs7OytCQUFULE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUExQ0EsU0FBUyxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7O2VBY0csT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO09BQ3JDLE1BQU0sT0FBT0MsYUFBWTtHQUM3QixHQUFHLEVBQUUsbUNBQW1DO0dBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzs7O09BR2IsT0FBTyxTQUFTLE1BQU0sQ0FBQyxLQUFLLEdBQ2hDLEtBQUssRUFBRSxTQUFTO1VBRVQsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUzs7O0lBRXJDLE9BQU8sR0FBRywyQkFBMkI7Ozs7O09BTTlCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
