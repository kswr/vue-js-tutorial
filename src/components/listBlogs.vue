<template xmlns:v-theme="http://www.w3.org/1999/xhtml">
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input id ="search" v-model="search" type="text" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>
      <p>{{blog.body | snippet }}</p>
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
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(
        function (data) {
          console.log(data);
          this.blogs = data.body.slice(0,10);
        }
      )
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


  input {
    width: 794px;
    height: 1.2em;
    font-size: 1em;
  }
</style>
