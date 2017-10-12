<template lang="html">
  <div class="panel panel-success text-left">
    <div class="panel-heading">
      <h3 class="panel-title">{{ detailPost.title }}</h3>
    </div>
    <div class="panel-body">
      <p>Category: <router-link :to="'/category/'+ detailPost.category">{{detailPost.category}}</router-link> | Publish by: <router-link :to="'/author/'+ detailPost.author.username">{{detailPost.author.username}}</router-link> </p>
      <p>{{detailPost.content}}</p>
    </div>
  </div>

</template>

<script>
export default {
  props: ['slug'],
  data () {
    return {
      detailPost: ''
    }
  },
  methods: {
    getArticle (slug) {
      this.$axios.get(`articles/${slug}`)
      .then(({data}) => {
        console.log('datanya', data);
        this.detailPost = data
      })
    }
  },
  created () {
    this.getArticle(this.slug)
  },
  watch: {
    slug () {
      this.getArticle(this.slug)
    }
  }
}
</script>

<style lang="css">
</style>
