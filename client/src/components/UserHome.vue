<template lang="html">
  <div class="">
    <h1>User Home</h1>
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myNewArticle">Add New Article</button>
    <button type="button" class="btn btn-danger" @click="doLogout">Logout</button>
    <ul class="list-group text-left" >
      <li class="list-group-item" v-for="post in userPost">
        <span class="badge">Delete</span>
        <span class="badge">Edit</span>
        <b>{{post.title}}</b>
      </li>
    </ul>

    <!-- Modal New Article -->
    <div class="modal fade text-left" id="myNewArticle" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">New Article Form</h4>
          </div>
          <div class="modal-body">
              <form @submit.prevent="KirimArtikel(newArticle)">
                <label>Judul</label>
                <input type="text" class="form-control" v-model="newArticle.title">
                <label>Konten</label>
                <textarea name="name" rows="8" cols="80" class="form-control" v-model="newArticle.content"></textarea>
                <label>Kategori</label>
                <select class="" name="" class="form-control" v-model="newArticle.category">
                  <option value="berita">Berita</option>
                  <option value="tutorial">Tutorial</option>
                  <option value="teknologi">Teknologi</option>
                </select>
                <button type="submit" name="button" class="btn btn-primary">Kirim Artikel</button>
              </form>
        </div>
      </div>
    </div>
  </div>
    <!--  Modal New Article-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: localStorage.getItem('username'),
      userPost: [],
      newArticle: {
        title: '',
        content: '',
        category: '',
        author: localStorage.getItem('id')
      }
    }
  },
  methods: {
    getUserPost () {
      this.$axios.get(`author/${this.name}`)
      .then(({data}) => {
        this.userPost = data
      })
    },
    doLogout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.getUserPost()
  }
}
</script>

<style lang="css">
</style>
