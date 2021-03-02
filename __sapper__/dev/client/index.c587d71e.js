import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, A as query_selector_all, c as claim_element, g as detach_dev, h as claim_space, b as children, f as claim_text, j as attr_dev, k as add_location, n as append_dev, m as insert_dev, p as noop } from './client.54a16f15.js';

/* src/routes/Shop/index.svelte generated by Svelte v3.32.3 */

const file = "src/routes/Shop/index.svelte";

function create_fragment(ctx) {
	let link;
	let t0;
	let h1;
	let t1;
	let t2;
	let button0;
	let t3;
	let t4;
	let h2;
	let t5;
	let t6;
	let img;
	let img_src_value;
	let t7;
	let p;
	let t8;
	let t9;
	let button1;
	let t10;
	let t11;
	let hr;
	let t12;
	let div;

	const block = {
		c: function create() {
			link = element("link");
			t0 = space();
			h1 = element("h1");
			t1 = text("My E-Book Shop");
			t2 = space();
			button0 = element("button");
			t3 = text("Click here to checkout");
			t4 = space();
			h2 = element("h2");
			t5 = text("Learn Tech 1");
			t6 = space();
			img = element("img");
			t7 = space();
			p = element("p");
			t8 = text("$19.99");
			t9 = space();
			button1 = element("button");
			t10 = text("Add to cart");
			t11 = space();
			hr = element("hr");
			t12 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g1jtgo\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "My E-Book Shop");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			button0 = claim_element(nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t3 = claim_text(button0_nodes, "Click here to checkout");
			button0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "Learn Tech 1");
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { src: true });
			t7 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t8 = claim_text(p_nodes, "$19.99");
			p_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);

			button1 = claim_element(nodes, "BUTTON", {
				class: true,
				"data-item-id": true,
				"data-item-price": true,
				"data-item-url": true,
				"data-item-image": true,
				"data-item-name": true
			});

			var button1_nodes = children(button1);
			t10 = claim_text(button1_nodes, "Add to cart");
			button1_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t12 = claim_space(nodes);

			div = claim_element(nodes, "DIV", {
				id: true,
				"data-config-modal-style": true,
				"data-api-key": true,
				hidden: true
			});

			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css");
			add_location(link, file, 1, 0, 14);
			document.title = "My E-Book Shop";
			add_location(h1, file, 9, 0, 159);
			attr_dev(button0, "class", "snipcart-checkout");
			add_location(button0, file, 11, 0, 184);
			add_location(h2, file, 13, 0, 251);
			if (img.src !== (img_src_value = "https://placeimg.com/200/300/tech")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 14, 0, 273);
			add_location(p, file, 15, 0, 322);
			attr_dev(button1, "class", "snipcart-add-item");
			attr_dev(button1, "data-item-id", "learn-tech-1");
			attr_dev(button1, "data-item-price", "19.99");
			attr_dev(button1, "data-item-url", "/Shop");
			attr_dev(button1, "data-item-image", "https://placeimg.com/200/300/tech");
			attr_dev(button1, "data-item-name", "Learn Tech 1");
			add_location(button1, file, 16, 0, 336);
			add_location(hr, file, 27, 0, 565);
			attr_dev(div, "id", "snipcart");
			attr_dev(div, "data-config-modal-style", "side");
			attr_dev(div, "data-api-key", "MjU2OTVmMmMtZDI5ZS00ODEzLTkwYjUtZjU4NzdiYzRhMDRiNjM3NTAyMDgzMTIwNDQ5OTUw");
			div.hidden = true;
			add_location(div, file, 29, 0, 573);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t7, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, hr, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(link);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t12);
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

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Shop", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Shop> was created with unknown prop '${key}'`);
	});

	return [];
}

class Shop extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Shop",
			options,
			id: create_fragment.name
		});
	}
}

export default Shop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzU4N2Q3MWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
