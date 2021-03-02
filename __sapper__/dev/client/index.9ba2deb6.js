import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, L as globals, e as element, a as space, t as text, A as query_selector_all, c as claim_element, g as detach_dev, h as claim_space, b as children, f as claim_text, j as attr_dev, k as add_location, n as append_dev, m as insert_dev, B as listen_dev, p as noop } from './client.75996388.js';

/* src/routes/Shop/index.svelte generated by Svelte v3.32.3 */

const { console: console_1 } = globals;
const file = "src/routes/Shop/index.svelte";

function create_fragment(ctx) {
	let link0;
	let link1;
	let link2;
	let t0;
	let h1;
	let t1;
	let t2;
	let h2;
	let t3;
	let t4;
	let img;
	let img_src_value;
	let t5;
	let p;
	let t6;
	let t7;
	let button;
	let t8;
	let t9;
	let hr;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			link0 = element("link");
			link1 = element("link");
			link2 = element("link");
			t0 = space();
			h1 = element("h1");
			t1 = text("My E-Book Shop");
			t2 = space();
			h2 = element("h2");
			t3 = text("Learn Tech 1");
			t4 = space();
			img = element("img");
			t5 = space();
			p = element("p");
			t6 = text("$19.99");
			t7 = space();
			button = element("button");
			t8 = text("Add to cart");
			t9 = space();
			hr = element("hr");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-hkdiu0\"]", document.head);
			link0 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			link1 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			link2 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "My E-Book Shop");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "Learn Tech 1");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { src: true, alt: true });
			t5 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, "$19.99");
			p_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);

			button = claim_element(nodes, "BUTTON", {
				class: true,
				"data-item-id": true,
				"data-item-price": true,
				"data-item-url": true,
				"data-item-image": true,
				"data-item-name": true
			});

			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Add to cart");
			button_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			this.h();
		},
		h: function hydrate() {
			attr_dev(link0, "rel", "preconnect");
			attr_dev(link0, "href", "https://app.snipcart.com");
			add_location(link0, file, 1, 4, 18);
			attr_dev(link1, "rel", "preconnect");
			attr_dev(link1, "href", "https://cdn.snipcart.com");
			add_location(link1, file, 2, 0, 74);
			attr_dev(link2, "rel", "stylesheet");
			attr_dev(link2, "href", "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css");
			add_location(link2, file, 3, 0, 130);
			document.title = "My E-Book Shop";
			add_location(h1, file, 11, 0, 275);
			add_location(h2, file, 12, 0, 299);
			if (img.src !== (img_src_value = "https://placeimg.com/200/300/tech")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "test");
			add_location(img, file, 13, 0, 321);
			add_location(p, file, 14, 0, 381);
			attr_dev(button, "class", "snipcart-add-item");
			attr_dev(button, "data-item-id", "learn-tech");
			attr_dev(button, "data-item-price", "19.99");
			attr_dev(button, "data-item-url", "/learn-tech");
			attr_dev(button, "data-item-image", "https://placeimg.com/200/300/tech");
			attr_dev(button, "data-item-name", "Learn Tech 1");
			add_location(button, file, 15, 0, 395);
			add_location(hr, file, 26, 0, 661);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link0);
			append_dev(document.head, link1);
			append_dev(document.head, link2);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, hr, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", console.log("coucou"), false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(link0);
			detach_dev(link1);
			detach_dev(link2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(hr);
			mounted = false;
			dispose();
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Shop> was created with unknown prop '${key}'`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWJhMmRlYjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvU2hvcC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN2ZWx0ZTpoZWFkPlxuICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9hcHAuc25pcGNhcnQuY29tXCI+XG48bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vY2RuLnNuaXBjYXJ0LmNvbVwiPlxuPGxpbmtcbiAgcmVsPVwic3R5bGVzaGVldFwiXG4gIGhyZWY9XCJodHRwczovL2Nkbi5zbmlwY2FydC5jb20vdGhlbWVzL3YzLjAuMTYvZGVmYXVsdC9zbmlwY2FydC5jc3NcIlxuLz5cbjx0aXRsZT5NeSBFLUJvb2sgU2hvcDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cbjxoMT5NeSBFLUJvb2sgU2hvcDwvaDE+XG48aDI+TGVhcm4gVGVjaCAxPC9oMj5cbjxpbWcgIHNyYz1cImh0dHBzOi8vcGxhY2VpbWcuY29tLzIwMC8zMDAvdGVjaFwiIGFsdD1cInRlc3RcIiAvPlxuPHA+JDE5Ljk5PC9wPlxuPGJ1dHRvbiBvbjpjbGljaz17Y29uc29sZS5sb2coXCJjb3Vjb3VcIil9XG4gIGNsYXNzPVwic25pcGNhcnQtYWRkLWl0ZW1cIlxuICBkYXRhLWl0ZW0taWQ9XCJsZWFybi10ZWNoXCJcbiAgZGF0YS1pdGVtLXByaWNlPVwiMTkuOTlcIlxuICBkYXRhLWl0ZW0tdXJsPVwiL2xlYXJuLXRlY2hcIlxuICBkYXRhLWl0ZW0taW1hZ2U9XCJodHRwczovL3BsYWNlaW1nLmNvbS8yMDAvMzAwL3RlY2hcIlxuICBkYXRhLWl0ZW0tbmFtZT1cIkxlYXJuIFRlY2ggMVwiXG4+XG4gIEFkZCB0byBjYXJ0XG48L2J1dHRvbj5cblxuPGhyIC8+XG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWVrQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
