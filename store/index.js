import {
	backend
} from "~/plugins/backend";
export const state = () => ({
	posts: [],
	postDetail: {},
	faqs: [],
	counter: 0
});
// export const getters = {
// 	faqs_edit: state => {
// 		var newList = [];
// 		Array.from(state.faqs.results).forEach(element => {
// 			fe.push({
// 				question: element.question,
// 				answer: element.answer,
// 				open: false
// 			});
// 		});
// 		return newList;
// 	}
// }

export const mutations = {
	SET_POSTS: (state, posts) => {
		state.posts = posts;
	},
	SET_POST_DETAIL: (state, postDetail) => {
		state.postDetail = postDetail;
	},
	SET_FAQS: (state, faqs) => {
		state.faqs = faqs;
	},
	RESET_COUNTER: (state) => {
		state.counter = 0;
	},
	INC_COUNTER: (state) => {
		state.counter = state.counter + 1;
	}
};

export const actions = {
	/**
	 * Loads posts
	 */
	loadPostDetail({
		commit
	}, id) {
		return backend
			.get(`/blog/posts/${id}`)
			.then(response => {
				const data = response.data;
				return commit("SET_POST_DETAIL", data);
			})
			.catch(error => {
				console.log(error)
				return commit("SET_POST_DETAIL", []);
			});
	},
	loadPosts({
		commit
	}) {
		return backend
			.get("/blog/posts/")
			.then(response => {
				const data = response.data;
				return commit("SET_POSTS", data);
			})
			.catch(error => {
				console.log(error)
				return commit("SET_POSTS", []);
			});
	},
	loadPostsPage({
		commit
	}, pages) {
		return backend
			.get(`/blog/posts/?limit=20&offset=${pages}`)
			.then(response => {
				const data = response.data;
				return commit("SET_POSTS", data);
			})
			.catch(error => {
				console.log(error)
				return commit("SET_POSTS", []);
			});
	},
	loadFAQS({
		commit
	}) {
		return backend
			.get("/blog/faqs/")
			.then(response => {
				const data = response.data;
				return commit("SET_FAQS", data);
			})
			.catch(error => {
				console.log(error)
				return commit("SET_FAQS", []);
			});
	},
	searchPosts({
		commit
	}, filterParams) {
		return backend
			.get("/blog/posts/", {
				params: filterParams
			})
			.then(response => {
				const data = response.data;
				return commit("SET_POSTS", data);
			})
			.catch(error => {
				console.log(error)
				return commit("SET_POSTS", []);
			});
	},
	mailUs({
		commit
	}, mail) {
		return backend
			.post("/mail/send-mail/", mail)
			.then(response => {
				const data = response.data;
				console.log(data);
			})
			.catch(error => {
				console.log(error)
			});
	},

};
