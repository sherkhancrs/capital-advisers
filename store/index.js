import { backend } from "~/plugins/backend";
export const state = () => ({
  posts: [],
	faqs: [],
	counter: 0
});

export const mutations = {
  SET_POSTS: (state, posts) => {
    state.posts = posts;
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
  loadPosts({
    commit
  }) {
    return backend
      .get("/blog/posts/")
      .then(response => {
				const data = response.data;
        console.log(data);
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
				const data = response.data.response;
				console.log(data);
        return commit("SET_FAQS", data.data);
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
      .get("/blog/posts/", { params: filterParams })
      .then(response => {
				const data = response.data;
				console.log(data);
        return commit("SET_POSTS", data);
      })
      .catch(error => {
        console.log(error)
        return commit("SET_POSTS", []);
      });
	},
	
};
