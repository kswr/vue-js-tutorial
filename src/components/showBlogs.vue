<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input id ="search" v-model="search" type="text" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="/blog/ + blog.id"><h2>{{blog.title | to-uppercase }}</h2></router-link>
      <p>{{blog.content| snippet }}</p>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin'

  export default {
    components: {
    },
    data () {
      return {
        blogs: [],
        search: ''
      }
    },
    created() {
      this.$http.get('https://vue-js-tutorial-eb1c6.firebaseio.com/posts.json').then(
        function (data) {
          return data.json();
        }).then(function (data) {
          var blogsArray = [];
          for (let key in data) {
            data[key].id = key;
            blogsArray.push(data[key])
          }
          this.blogs = blogsArray;
      })
    },
    computed: {

    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#"+Math.random().toString().slice(2,8);
        }
      }
    },
    mixins: [
      searchMixin
    ]
  }
</script>


<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }

  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }

  .single-blog a {
    text-decoration: none;
    color: #444;
  }

  input {
    width: 794px;
    height: 1.2em;
    font-size: 1em;
  }
</style>
