<template>
  <Header />
  <section>
    <form class="form-signin" @submit.prevent="processForm">
      <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" name="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" name="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required="">
      <label>
        Birth Date</label>
      <div class="row">
        <div class="col-xs-4 col-md-4">
          <input id="birthMonth" v-model="birthMonth" class="form-control">
          <option value="Month">Month</option>
        </div>
        <div class="col-xs-4 col-md-4">
          <input id="birthDay" v-model="birthDay" class="form-control">
          <option value="Day">Day</option>
        </div>
        <div class="col-xs-4 col-md-4">
          <input id="birthYear" v-model="birthYear" class="form-control">
          <option value="Year">Year</option>
        </div>
      </div>
      <label class="sr-only">Sex</label>
      <div class="d-block w-100 mb-4">
        <label class="radio-inline me-4">
          <input type="radio" v-model="sex" id="inlineCheckbox1" value="male" />
          Male
        </label>
        <label class="radio-inline">
          <input type="radio" v-model="sex" id="inlineCheckbox2" value="female" />
          Female
        </label>
      </div>
      <button id="submit" class="btn btn-lg btn-primary btn-block">Sign up</button>
    </form>
  </section>
</template>

<script>
import Header from "@/components/Header"

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      birthDay: '',
      birthMonth: '',
      birthYear: '',
      sex: ''
    }
  },
  methods: {
    processForm: async function() {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          birth: `${this.birthDay}/${this.birthMonth}/${this.birthYear}`,
          sex: this.sex
        })})
      if (res.status === 200) await this.$router.push('/login')
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
