<template>
  <div id="app">
    <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/statistic">Statistic</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>