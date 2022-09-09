<template>
  <div class="background">
    <div class="container">
      <h1>PORTFOLIO REDESIGN UNDER CONSTRUCTION!!</h1>
      <router-link to="/writing">Writing</router-link>
      <br/>
      <router-link to="/music">Music</router-link>
      <br/>
      <router-link to="/photography">Photography</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
  .background {
    background:#181b36;
  }
  .container {
    background:#181b36;
    box-shadow:7px 7px 16px #111327,
              -7px -7px 16px #1f2345;
    width: 50vw;
    height: 80vh;
    padding: 1em;
    border-radius: 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: #fafafa;
    font-size: var(--step-2);
    text-align: center;
  }
  a {
    color: var(--red);
    font-size: var(--step-0);
  }
</style>