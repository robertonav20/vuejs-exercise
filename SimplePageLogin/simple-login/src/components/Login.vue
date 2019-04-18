<template>
  <div id="login">
            <div>
              <h2>Login</h2>
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    type="text"
                    v-model="username"
                    name="username"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && !username }"
                  >
                  <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    name="password"
                    class="form-control"
                    :class="{ 'is-invalid': submitted && !password }"
                  >
                  <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                </div>
                <div class="form-group">
                  <router-link to="/AdminPage"><button class="btn btn-primary" :disabled="username == '' || password == ''">Login</button></router-link>
                </div>
              </form>
            </div>
          </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Login page",
      password : '',
      username : '',
      submitted: true,
      status: false,
      alert : {
        message : 'Alert',
        type : 'success'
      }
    }
  },
  computed :{
  }, 
  methods :{
  },
  watch : {
    username: function (val) {
      this.$store.dispatch('UPDATE_USER', val);
    },
    password: function (val) {
      this.$store.dispatch('UPDATE_PWD', val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  text-align: left;
}
</style>
