import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, w as validate_each_argument, v as validate_slots, e as element, z as text, a as space, g as claim_element, h as children, A as claim_text, j as detach_dev, f as claim_space, k as attr_dev, l as add_location, n as insert_dev, o as append_dev, D as set_data_dev, c as create_component, b as claim_component, m as mount_component, t as transition_in, q as transition_out, r as destroy_component, x as destroy_each } from './client.cc063590.js';
import { S as SvelteSeo } from './SvelteSeo.3c160c11.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/video/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/video/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (39:0) {#each videos as video}
function create_each_block(ctx) {
	let div;
	let h3;
	let t0_value = /*video*/ ctx[1].titre + "";
	let t0;
	let t1;
	let video;
	let track;
	let video_src_value;
	let video_poster_value;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			h3 = element("h3");
			t0 = text(t0_value);
			t1 = space();
			video = element("video");
			track = element("track");
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, t0_value);
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);

			video = claim_element(div_nodes, "VIDEO", {
				src: true,
				controls: true,
				poster: true,
				type: true,
				preload: true,
				class: true
			});

			var video_nodes = children(video);
			track = claim_element(video_nodes, "TRACK", { kind: true });
			video_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", "svelte-63c1bj");
			add_location(h3, file, 40, 4, 942);
			attr_dev(track, "kind", "captions");
			add_location(track, file, 42, 6, 1092);
			if (video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) attr_dev(video, "src", video_src_value);
			video.controls = true;
			attr_dev(video, "poster", video_poster_value = urlpApi + /*video*/ ctx[1].cover.url);
			attr_dev(video, "type", "video/mp4");
			attr_dev(video, "preload", "none");
			attr_dev(video, "class", "svelte-63c1bj");
			add_location(video, file, 41, 4, 969);
			add_location(div, file, 39, 0, 932);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h3);
			append_dev(h3, t0);
			append_dev(div, t1);
			append_dev(div, video);
			append_dev(video, track);
			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*videos*/ 1 && t0_value !== (t0_value = /*video*/ ctx[1].titre + "")) set_data_dev(t0, t0_value);

			if (dirty & /*videos*/ 1 && video.src !== (video_src_value = urlpApi + /*video*/ ctx[1].video.url)) {
				attr_dev(video, "src", video_src_value);
			}

			if (dirty & /*videos*/ 1 && video_poster_value !== (video_poster_value = urlpApi + /*video*/ ctx[1].cover.url)) {
				attr_dev(video, "poster", video_poster_value);
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
		source: "(39:0) {#each videos as video}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let svelteseo;
	let t;
	let div;
	let current;

	svelteseo = new SvelteSeo({
			props: {
				description: "Retrouvez toutes les vidéos du collectif ",
				title: "Projets réalisés par le collectif Blastart. Fresques, graphes sculptures les artistes relèvent tous les défis"
			},
			$$inline: true
		});

	let each_value = /*videos*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			create_component(svelteseo.$$.fragment);
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			claim_component(svelteseo.$$.fragment, nodes);
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
			attr_dev(div, "class", "container svelte-63c1bj");
			add_location(div, file, 36, 0, 883);
		},
		m: function mount(target, anchor) {
			mount_component(svelteseo, target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*urlpApi, videos*/ 1) {
				each_value = /*videos*/ ctx[0];
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

const videoQuery = gql`
  query video {
        jpvideos(sort:"ordre:desc") {
            titre
            cover{
                url
            }
  	        video{
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

	const results = await client.query({ query: videoQuery });
	return { videos: results.data.jpvideos };
}

let urlpApi = "https://www.grldfaure.xyz";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Video", slots, []);
	let { videos } = $$props;
	const writable_props = ["videos"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Video> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		SvelteSeo,
		videoQuery,
		preload,
		urlpApi,
		videos
	});

	$$self.$inject_state = $$props => {
		if ("videos" in $$props) $$invalidate(0, videos = $$props.videos);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [videos];
}

class Video extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { videos: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Video",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*videos*/ ctx[0] === undefined && !("videos" in props)) {
			console.warn("<Video> was created without expected prop 'videos'");
		}
	}

	get videos() {
		throw new Error("<Video>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set videos(value) {
		throw new Error("<Video>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Video;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDMyMjBkZjEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8vaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCBBcG9sbG9DbGllbnQsIHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuICAgIGltcG9ydCBTdmVsdGVTZW8gZnJvbSBcInN2ZWx0ZS1zZW9cIjtcbmNvbnN0IHZpZGVvUXVlcnkgPSBncWxgXG4gIHF1ZXJ5IHZpZGVvIHtcbiAgICAgICAganB2aWRlb3Moc29ydDpcIm9yZHJlOmRlc2NcIikge1xuICAgICAgICAgICAgdGl0cmVcbiAgICAgICAgICAgIGNvdmVye1xuICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgfVxuICBcdCAgICAgICAgdmlkZW97XG4gICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICB9XG4gIH1cbn1cbmA7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCgpIHtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICB9KTtcbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IHZpZGVvUXVlcnksXG4gIH0pO1xuICByZXR1cm4geyB2aWRlb3M6IHJlc3VsdHMuZGF0YS5qcHZpZGVvcyB9O1xufVxubGV0IHVybHBBcGkgPSBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXpcIjtcbjwvc2NyaXB0PlxuPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IHZpZGVvcztcbjwvc2NyaXB0PlxuXG48U3ZlbHRlU2VvXG4gIGRlc2NyaXB0aW9uPVwiUmV0cm91dmV6IHRvdXRlcyBsZXMgdmlkw6lvcyBkdSBjb2xsZWN0aWYgXCJcbiAgdGl0bGU9XCJQcm9qZXRzIHLDqWFsaXPDqXMgcGFyIGxlIGNvbGxlY3RpZiBCbGFzdGFydC4gRnJlc3F1ZXMsIGdyYXBoZXMgc2N1bHB0dXJlcyBsZXMgYXJ0aXN0ZXMgcmVsw6h2ZW50IHRvdXMgbGVzIGTDqWZpc1wiXG4vPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG57I2VhY2ggdmlkZW9zIGFzIHZpZGVvfVxuPGRpdj5cbiAgICA8aDM+e3ZpZGVvLnRpdHJlfTwvaDM+XG4gICAgPHZpZGVvIHNyYz0ge3VybHBBcGkgKyB2aWRlby52aWRlby51cmx9IGNvbnRyb2xzIHBvc3Rlcj17dXJscEFwaSArIHZpZGVvLmNvdmVyLnVybH0gdHlwZT1cInZpZGVvL21wNFwiIHByZWxvYWQ9XCJub25lXCI+XG4gICAgICA8dHJhY2sga2luZD1cImNhcHRpb25zXCIgIC8+XG4gICAgPC92aWRlbz5cbjwvZGl2Plxuey9lYWNofVxuPC9kaXY+XG48c3R5bGU+XG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDYwcHggMjBweCAwIDIwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMnJlbTtcbiAgICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XG4gIH1cbiAgaDN7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuICB2aWRlb3tcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogLW1vei1maXQtY29udGVudDtcbiAgICBtYXgtaGVpZ2h0OjIwMHB4O1xuICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXdDUyxHQUFLLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQ0gsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7a0RBQW1CLE9BQU8sYUFBRyxHQUFLLElBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQUQ3RSxHQUFLLElBQUMsS0FBSzs7Z0VBQ0gsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7Ozs0RUFBbUIsT0FBTyxhQUFHLEdBQUssSUFBQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFIL0UsR0FBTTs7OztnQ0FBWCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUFDLEdBQU07Ozs7K0JBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbkNBLFVBQVUsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7OztlQWFBLE9BQU87T0FDckIsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFYixPQUFPLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDaEMsS0FBSyxFQUFFLFVBQVU7VUFFVixNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFROzs7SUFFcEMsT0FBTyxHQUFHLDJCQUEyQjs7Ozs7T0FHMUIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
