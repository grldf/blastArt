import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, A as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, o as set_data_dev, p as noop, K as HtmlTag } from './client.4327b00f.js';
import { t } from './snarkdown.es.257e5e6b.js';
import { s as src, D as DefaultClient } from './bundle.esm.da9dac77.js';

/* src/routes/cgvcgu/index.svelte generated by Svelte v3.32.3 */
const file = "src/routes/cgvcgu/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let h1;
	let t1_value = /*posts*/ ctx[0].titre + "";
	let t1;
	let t2;
	let html_tag;
	let raw_value = t(/*posts*/ ctx[0].conditions) + "";

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1067mrn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "";
			attr_dev(h1, "class", "svelte-1neoukf");
			add_location(h1, file, 32, 2, 634);
			html_tag = new HtmlTag(null);
			attr_dev(div, "class", "content svelte-1neoukf");
			add_location(div, file, 31, 0, 610);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			html_tag.m(raw_value, div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*posts*/ ctx[0].titre + "")) set_data_dev(t1, t1_value);
			if (dirty & /*posts*/ 1 && raw_value !== (raw_value = t(/*posts*/ ctx[0].conditions) + "")) html_tag.p(raw_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
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

const cgvQuery = src`
	query cgv {
        ccvCgu(id:"1"){
            id
            titre
            conditions
      }
    }   
  `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const results = await client.query({ query: cgvQuery });
	return { posts: results.data.ccvCgu };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cgvcgu", slots, []);
	let { posts } = $$props;
	const writable_props = ["posts"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cgvcgu> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql: src,
		snarkdown: t,
		cgvQuery,
		preload,
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

class Cgvcgu extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { posts: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cgvcgu",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*posts*/ ctx[0] === undefined && !("posts" in props)) {
			console.warn("<Cgvcgu> was created without expected prop 'posts'");
		}
	}

	get posts() {
		throw new Error("<Cgvcgu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set posts(value) {
		throw new Error("<Cgvcgu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Cgvcgu;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTYyOWVkOWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY2d2Y2d1L2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbmltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuaW1wb3J0IHNuYXJrZG93biBmcm9tICdzbmFya2Rvd24nOyAgXG5cbmNvbnN0IGNndlF1ZXJ5ID0gZ3FsYFxuXHRxdWVyeSBjZ3Yge1xuICAgICAgICBjY3ZDZ3UoaWQ6XCIxXCIpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdHJlXG4gICAgICAgICAgICBjb25kaXRpb25zXG4gICAgICB9XG4gICAgfSAgIFxuICBgO1xuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0ICB1cmk6IFwiaHR0cDovLzUxLjIxMC45Ni4zOToxMzM3L2dyYXBocWxcIixcblx0ICAgIGZldGNoOiB0aGlzLmZldGNoLFxuXHR9KTtcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG5cdCAgcXVlcnk6IGNndlF1ZXJ5LFxuXHR9KTtcblx0cmV0dXJuIHsgcG9zdHM6IHJlc3VsdHMuZGF0YS5jY3ZDZ3UgfTtcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgcG9zdHM7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlIC8+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgPGgxPntwb3N0cy50aXRyZX08L2gxPlxuICB7QGh0bWwgc25hcmtkb3duKHBvc3RzLmNvbmRpdGlvbnMpfVxuPC9kaXY+XG48c3R5bGU+XG4gICAgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICB9IFxuICAgICBcbjwvc3R5bGU+Il0sIm5hbWVzIjpbInNuYXJrZG93biIsImdxbCIsIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MEJBZ0NPLEdBQUssSUFBQyxLQUFLOzs7O2lCQUNUQSxDQUFTLFdBQUMsR0FBSyxJQUFDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRUFENUIsR0FBSyxJQUFDLEtBQUs7eURBQ1RBLENBQVMsV0FBQyxHQUFLLElBQUMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BN0I3QixRQUFRLEdBQUdDLEdBQUc7Ozs7Ozs7Ozs7ZUFTSSxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7T0FDeEMsTUFBTSxPQUFPQyxhQUFZO0dBQzdCLEdBQUcsRUFBRSxrQ0FBa0M7R0FDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFZixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFFBQVE7VUFFUixLQUFLLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNOzs7Ozs7T0FLckIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
