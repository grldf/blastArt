import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, g as attr_dev, h as add_location, j as insert_dev, k as append_dev, n as noop } from './client.193cfdfe.js';

/* src/routes/blast/index.svelte generated by Svelte v3.35.0 */

const file = "src/routes/blast/index.svelte";

function create_fragment(ctx) {
	let a;
	let t;

	const block = {
		c: function create() {
			a = element("a");
			t = text("Projets");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", {
				rel: true,
				"aria-current": true,
				href: true
			});

			var a_nodes = children(a);
			t = claim_text(a_nodes, "Projets");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "aria-current", segment === "blast" ? "page" : undefined);
			attr_dev(a, "href", "blast");
			add_location(a, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
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
	validate_slots("Blast", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blast> was created with unknown prop '${key}'`);
	});

	return [];
}

class Blast extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blast",
			options,
			id: create_fragment.name
		});
	}
}

export default Blast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDEyMmEwYWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxhc3QvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxhXG4gICAgICAgIHJlbD1cInByZWZldGNoXCJcbiAgICAgICAgYXJpYS1jdXJyZW50PXtzZWdtZW50ID09PSBcImJsYXN0XCIgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgaHJlZj1cImJsYXN0XCI+UHJvamV0czwvYVxuICAgICAgPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBRXNCLE9BQU8sS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=