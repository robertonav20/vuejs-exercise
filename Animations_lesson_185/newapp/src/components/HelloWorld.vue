<template>
  <div class="container">
    <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1>Animations</h1>
              <hr>
              <button class="btn btn-primary" @click="show = !show">Show</button>
              <br><br>
              <transition name="fade">
                   <div class="alert alert-info" v-if="show">Alert info</div>
              </transition>
              <br>
              <transition name="slide">
                   <div class="alert alert-info" v-if="show">Alert info</div>
              </transition>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show : false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter{
      opacity: 0;
  }

  .fade-enter-active{
      transition: opacity 1s;
  }

  .fade-leave{

  }

  .fade-leave-active{
      transition: opacity 1s;
      opacity: 0;
  }

  .slide-enter{
      opacity: 0;
  }

  .slide-enter-active{
      animation: slide-in 1s ease-out forwards;
      transition: opacity .5s;
  }

  .slide-leave{

  }

  .slide-leave-active{
      animation: slide-out 1s ease-out forwards;
      transition: opacity .5s;
      opacity: 0;
  }

  @keyframes slide-in{
    from {
          transform: translateY(20px);
    }
    to{
          transform: translateY(0px);
    }
  }

  @keyframes slide-out{
    from {
          transform: translateY(0px);
    }
    to{
          transform: translateY(20px);
    }
  }
</style>

