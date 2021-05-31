<template>
  <Header />
  <section>
    <ul class="list-group">
      <li class="list-group-item">Email: {{ email }}</li>
      <li class="list-group-item">Sex: {{ sex }}</li>
      <li class="list-group-item">Birthday: {{ birth }}</li>
    </ul>
  </section>
</template>

<script>
import Header from "@/components/Header"
import { mapGetters } from "vuex"

export default {
  name: 'Profile',
  components: {
    Header
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'email',
        'sex',
        'birth'
    ])
  }
}
</script>
