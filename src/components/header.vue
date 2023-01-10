<script>
import themeToggleButton from "../components/themeToggleButton.vue";
export default {
  components: { themeToggleButton },
};
</script>

<template>
  <header class="header">
    <a href="" class="logo">Fetching Data</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/trello">Trello</router-link></li>
      <li class="toggle-team"><theme-toggle-button /></li>
    </ul>
  </header>
</template>

<style>
.toggle-team {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>

