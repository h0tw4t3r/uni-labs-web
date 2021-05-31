<template>
  <header>
    <div class="bg-dark collapse" id="navbarHeader" style="">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li><a href="https://github.com/h0tw4t3r" class="text-white">Follow my GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a href="#/" class="navbar-brand d-flex align-items-center mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/>
          </svg>
          <strong>Link Shortener</strong>
        </a>
        <div class="col-md-5 text-end">
          <router-link to="/profile" class="btn btn-primary me-2">My Profile</router-link>
          <router-link to="/login" v-show="this.email() === ''" class="btn btn-primary me-2">Login</router-link>
          <router-link to="/register" v-show="this.email() === ''" class="btn btn-primary me-2">Sign-up</router-link>
          <button class="btn btn-primary me-2" v-show="this.email() !== ''" v-on:click="logout">Logout</button>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import store from "@/store";

export default {
  name: 'Header',
  methods: {
    ...mapGetters([
      'email'
    ]),
    ...mapMutations([
      'login'
    ]),
    logout: function () {
      sessionStorage.clear()
      this.login({email: '', password: '', birth: '', sex: ''})
      console.log(this.email())
    }
  },
  store: store
}
</script>
