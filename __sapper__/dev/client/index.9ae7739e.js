import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as create_component, a as space, e as element, b as claim_component, f as claim_space, g as claim_element, h as children, j as detach_dev, k as attr_dev, l as add_location, m as mount_component, n as insert_dev, o as append_dev, p as noop, t as transition_in, q as transition_out, r as destroy_component } from './client.a10b9919.js';
import { S as SvelteSeo } from './SvelteSeo.ba18bcc5.js';

/* src/routes/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let svelteseo;
	let t;
	let div;
	let img;
	let img_src_value;
	let current;

	svelteseo = new SvelteSeo({
			props: {
				description: "Toujours plus monumentale, et toujours plus accessible, c'est avec cette devise que Blast crée sans cesse de nouveaux projets artistiques.\n\tA l' origine du projet comme l' Exposition - oeuvre in-situ Le Terminal  à Lyon en Juin 2018. Le collectif BLAST propose des œuvres artistiques atypiques grâce à la complémentarité des 3 artistes.\n\tEn mutualisant les talents d'un peintre graffeur muraliste et d'un sculpteur, L'imagination devient facilement réalité.",
				title: "Blastart collectif d'artistes aux multiples talenst. Kalouf grapheur\n    muraliste, Romain Lardanchet sculpteur monumental, FabeCollage photographe\n    créatif et Jean-Pierre(staffvidéo) vidéaste créatif."
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(svelteseo.$$.fragment);
			t = space();
			div = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			claim_component(svelteseo.$$.fragment, nodes);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true });
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "logo deco");
			attr_dev(img, "class", "svelte-ew5bl8");
			add_location(img, file, 13, 2, 773);
			attr_dev(div, "class", "svelte-ew5bl8");
			add_location(div, file, 12, 0, 765);
		},
		m: function mount(target, anchor) {
			mount_component(svelteseo, target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, img);
			current = true;
		},
		p: noop,
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
			if (detaching) detach_dev(t);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ SvelteSeo });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWFlNzczOWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
