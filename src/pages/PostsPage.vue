<template>
    <div>
      <h1>Page for Posts</h1>
      <MyInput v-focus type="search" placeholder="Search..." v-model="searchPosts" />
      <div class="postsBtns">
        <MyButton @click="showModal">CreatePost</MyButton>
        <MySelect v-model="selectedSort" :options="sortOptions" />
      </div>
      <MyModal v-model:show="showCreatePost">
        <PostForm @create="createPost" />
      </MyModal>
      <PostList
        v-if="!isPostsLoading"
        :posts="sortedAndSearchPosts"
        @removePost="removePost" />
      <MyLoading v-else />
      <div class="pageWraper">
        <div
          v-for="page in totalPages"
          class="pageWraperNumber"
          :class="{
            currentPage: pageNumber === page,
          }"
          :key="page"
          @click="changeWraperNumber(page)">
          {{ page }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PostForm from "../components/PostForm.vue";
  import PostList from "../components/PostList.vue";
  import axios from "axios";
  
  export default {
    components: {
      PostForm,
      PostList,
    },
    data() {
      return {
        posts: [],
        showCreatePost: false,
        isPostsLoading: false,
        selectedSort: "",
        sortOptions: [
          { value: "title", name: "By Name" },
          { value: "body", name: "By Body" },
        ],
        searchPosts: "",
        pageNumber: 1,
        limitPosts: 10,
        totalPages: 0,
      };
    },
    methods: {
      createPost(post) {
        if (post.title.length > 0 && post.body.length > 0) {
          this.posts.push(post);
          this.showCreatePost = false;
        } else alert("Please write text all sections");
      },
      removePost(id) {
        this.posts = this.posts.filter((p) => p.id !== id);
      },
      showModal() {
        this.showCreatePost = true;
      },
      async fetchPosts() {
        try {
          this.isPostsLoading = true;
          let response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.pageNumber,
                _limit: this.limitPosts,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limitPosts
          );
          this.posts = response.data;
        } catch (error) {
          alert("posts not found");
        } finally {
          this.isPostsLoading = false;
        }
      },
      changeWraperNumber(num){
        this.pageNumber = num;
        // this.fetchPosts()
      }
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((a, b) =>
          a[this.selectedSort]?.localeCompare(b[this.selectedSort])
        );
      },
      sortedAndSearchPosts() {
        return this.sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(this.searchPosts.toLowerCase())
        );
      },
    },
    watch:{
      pageNumber(){
        this.fetchPosts()
      }
    },
  };
  </script>
  
  <style>
  .app {
    padding: 20px;
  }
  .postsBtns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
  .pageWraper {
    display: flex;
    margin-top: 15px;
  }
  .pageWraperNumber {
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
  }
  .currentPage {
    border: 2px solid black;
  }
  </style>