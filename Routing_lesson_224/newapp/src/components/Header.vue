<template>
  <div class="card">
    <div class="card-header d-inline">
        <div>Routing</div>
        <div>Header Component</div>
    </div>
    <div class="card-body">
      <nav class="nav nav-pills nav-fill flex-column flex-sm-row">
        <router-link to="/user">
          <button class="btn btn-success btn-sm m-1">User</button>
        </router-link>
        <router-link to="/userDetail">
          <button class="btn btn-success btn-sm m-1">User Detail</button>
        </router-link>
        <router-link to="/userEdit">
          <button class="btn btn-success btn-sm m-1">User Edit</button>
        </router-link>
        <router-link to="/userStart">
          <button class="btn btn-success btn-sm m-1">User Start</button>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
