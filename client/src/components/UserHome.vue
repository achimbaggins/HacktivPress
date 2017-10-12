<template lang="html">
  <div class="">
    <h1>User Home</h1>
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myNewArticle">Add New Article</button>
    <button type="button" class="btn btn-danger" @click="doLogout">Logout</button>
    <ul class="list-group text-left" >
      <li class="list-group-item" v-for="(post, index) in userPost">
        <span class="badge" @click="removeMe(post._id, index)">Delete</span>
        <span class="badge">Edit</span>
        <router-link :to="'/read/'+ post.slug">
        <b>{{post.title}}</b></router-link>
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
    },
    KirimArtikel (data) {
      this.$axios.post('articles', data)
      .then(({data}) => {
        this.userPost.unshift(data)
        this.$swal(
          'Sukses Kirim Artikel',
          'weldone guys!',
          'success'
        )
      })
    },
    removeMe (id, idx) {
      if(window.confirm("Yakin mau hapus?")){
        this.$axios.delete(`articles/${id}`)
        .then(ok => {
          this.userPost.splice(idx,1)
          this.$swal(
            'Sukses Delete Artikel',
            'weldone guys!',
            'success'
          )
        })
      }
    }
  },
  created () {
    this.getUserPost()
  }
}
</script>

<style lang="css">
</style>
