import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, o as set_data_dev, p as noop } from './client.0de254e1.js';
import { s as src, D as DefaultClient } from './bundle.esm.da9dac77.js';

/* src/routes/Contact/index.svelte generated by Svelte v3.32.3 */
const file = "src/routes/Contact/index.svelte";

function create_fragment(ctx) {
	let div1;
	let h1;
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let div0;
	let p0;
	let t3;
	let t4;
	let p1;
	let a0;
	let t5_value = /*info*/ ctx[0].telephone + "";
	let t5;
	let a0_href_value;
	let t6;
	let p2;
	let t7;
	let t8;
	let p3;
	let a1;
	let t9_value = /*info*/ ctx[0].emailcontact + "";
	let t9;
	let a1_href_value;

	const block = {
		c: function create() {
			div1 = element("div");
			h1 = element("h1");
			t0 = text("Contactez-Nous!");
			t1 = space();
			img = element("img");
			t2 = space();
			div0 = element("div");
			p0 = element("p");
			t3 = text("Thibault");
			t4 = space();
			p1 = element("p");
			a0 = element("a");
			t5 = text(t5_value);
			t6 = space();
			p2 = element("p");
			t7 = text("Ou par Email");
			t8 = space();
			p3 = element("p");
			a1 = element("a");
			t9 = text(t9_value);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Contactez-Nous!");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Thibault");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			a0 = claim_element(p1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t5 = claim_text(a0_nodes, t5_value);
			a0_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "Ou par Email");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, t9_value);
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-ilvvg2");
			add_location(h1, file, 29, 4, 660);
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "une oeuvre d'un membre de Blast");
			attr_dev(img, "class", "svelte-ilvvg2");
			add_location(img, file, 30, 4, 689);
			add_location(p0, file, 32, 8, 785);
			attr_dev(a0, "href", a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone);
			attr_dev(a0, "class", "svelte-ilvvg2");
			add_location(a0, file, 34, 12, 825);
			add_location(p1, file, 33, 8, 809);
			add_location(p2, file, 36, 8, 901);
			attr_dev(a1, "href", a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos");
			attr_dev(a1, "class", "svelte-ilvvg2");
			add_location(a1, file, 38, 12, 945);
			add_location(p3, file, 37, 8, 929);
			attr_dev(div0, "class", "info svelte-ilvvg2");
			add_location(div0, file, 31, 4, 758);
			attr_dev(div1, "class", "container svelte-ilvvg2");
			add_location(div1, file, 28, 2, 632);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t0);
			append_dev(div1, t1);
			append_dev(div1, img);
			append_dev(div1, t2);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div0, t4);
			append_dev(div0, p1);
			append_dev(p1, a0);
			append_dev(a0, t5);
			append_dev(div0, t6);
			append_dev(div0, p2);
			append_dev(p2, t7);
			append_dev(div0, t8);
			append_dev(div0, p3);
			append_dev(p3, a1);
			append_dev(a1, t9);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*info*/ 1 && t5_value !== (t5_value = /*info*/ ctx[0].telephone + "")) set_data_dev(t5, t5_value);

			if (dirty & /*info*/ 1 && a0_href_value !== (a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*info*/ 1 && t9_value !== (t9_value = /*info*/ ctx[0].emailcontact + "")) set_data_dev(t9, t9_value);

			if (dirty & /*info*/ 1 && a1_href_value !== (a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos")) {
				attr_dev(a1, "href", a1_href_value);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const infoQuery = src`
      query infoBlast {
        infoBlast(id:"1"){
            telephone
            emailcontact
        }
      }
    `;

async function preload({ params, query }) {
	const client = new DefaultClient({
			uri: "http://51.210.96.39:1337/graphql",
			fetch: this.fetch
		});

	const result = await client.query({ query: infoQuery });
	return { info: result.data.infoBlast };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Contact", slots, []);
	let { info } = $$props;
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql: src,
		infoQuery,
		preload,
		info
	});

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { info: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<Contact> was created without expected prop 'info'");
		}
	}

	get info() {
		throw new Error("<Contact>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<Contact>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Contact;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzA3MDYzMmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQ29udGFjdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgLy9pbWFnZSBuZXdzbGV0dGVyXG4gICAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5cbiAgICBjb25zdCBpbmZvUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBpbmZvQmxhc3Qge1xuICAgICAgICBpbmZvQmxhc3QoaWQ6XCIxXCIpe1xuICAgICAgICAgICAgdGVsZXBob25lXG4gICAgICAgICAgICBlbWFpbGNvbnRhY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICB1cmk6IFwiaHR0cDovLzUxLjIxMC45Ni4zOToxMzM3L2dyYXBocWxcIixcbiAgICAgICAgZmV0Y2g6IHRoaXMuZmV0Y2gsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBpbmZvUXVlcnksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IGluZm86IHJlc3VsdC5kYXRhLmluZm9CbGFzdH07XG4gICAgfSAgICBcbiAgPC9zY3JpcHQ+XG4gIFxuICA8c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgaW5mbztcbiAgPC9zY3JpcHQ+XG4gIFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPkNvbnRhY3Rlei1Ob3VzITwvaDE+XG4gICAgPGltZyBzcmM9XCJsb2dvLTUxMi5wbmdcIiBhbHQ9XCJ1bmUgb2V1dnJlIGQndW4gbWVtYnJlIGRlIEJsYXN0XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8cD5UaGliYXVsdDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOiszM3tpbmZvLnRlbGVwaG9uZX1cIj57aW5mby50ZWxlcGhvbmV9PC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPk91IHBhciBFbWFpbDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOntpbmZvLnRlbGVwaG9uZX0/c3ViamVjdD1EZWFtbmRlIGluZm9zXCI+e2luZm8uZW1haWxjb250YWN0fTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICBcbiAgPHN0eWxlPlxuICAgIC5jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogNTB2aDtcbiAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwiIC4gdGl0cmVcIlxuICAgICAgICBcImltYWdlIGluZm9cIjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAjRUYxMUExO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDZweCAxNXB4IGJsYWNrO1xuICAgIH1cbiAgICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IGludGVyc3RhdGUgdGhpbjtcbiAgICAgIGdyaWQtYXJlYTogdGl0cmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgZ3JpZC1hcmVhOiBpbWFnZTtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgcGFkZGluZzowIDAgMTAlIDEwJTtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIC5pbmZve1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgICAgIGdyaWQtYXJlYTppbmZvO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuICAgIGF7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogI2ZmZlxuICAgIH1cbiAgICBhOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjRUYxMUExO1xuICAgIH1cbiAgPC9zdHlsZT5cbiAgIl0sIm5hbWVzIjpbImdxbCIsIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBa0MrQyxHQUFJLElBQUMsU0FBUzs7Ozs7Ozs7O3lCQUlRLEdBQUksSUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFKekQsR0FBSSxJQUFDLFNBQVM7Ozs7OzZEQUlkLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFKSSxHQUFJLElBQUMsU0FBUzs7cUZBQWhDLEdBQUksSUFBQyxTQUFTOzs7OytEQUkwQixHQUFJLElBQUMsWUFBWTs7cUZBQXpELEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbENqQyxTQUFTLEdBQUdBLEdBQUc7Ozs7Ozs7OztlQVFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztPQUNyQyxNQUFNLE9BQU9DLGFBQVk7R0FDN0IsR0FBRyxFQUFFLGtDQUFrQztHQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE1BQU0sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUMvQixLQUFLLEVBQUUsU0FBUztVQUVULElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7OztPQUszQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
