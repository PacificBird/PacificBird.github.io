<template>
  <div class="background">
    <img src='../../public/img/homephoto.jpg' class="landscape"/>
    <div class="container">
      <h1>Izzy McDonald // Pacific Bird</h1>
      <p>
        Hello! I'm Izzy, I enjoy <router-link to="/writing">writing</router-link>, 
        recording <router-link to="/music">music</router-link>, 
        and doing <router-link to="/photography">photography</router-link>.
      </p>
      <p>
        I've had a relatively varied amount of <router-link to="/workexperience">work experience</router-link> so far, 
        as well as well-rounded <router-link to="/education">education</router-link>. 
        During that time spent in academia I've earned a few <router-link to="/awards">awards</router-link> as well!
      </p>
      <p>
        Through my personal, professional, and academic <router-link to="/projects">projects</router-link>, 
        I've continuously acquired and honed my <router-link to="/skills">skills</router-link> for a wide variety of digital, scientific, and social applications.
      </p>
      <br>
      <p>
        You can contact me via my email, israel.mcdonald@wsu.edu, 
        or shoot me a call/text at my number, (509)834-9094.
      </p>

      <p class="smltxt">
        This webpage, its source code, and its contents are dedicated to the public domain under the language expressed in this modified version of the <a href="../docs/UNLICENSE.txt">Unlicense</a>
      </p>
    </div>
    <img src='../../public/img/homephoto.jpg' class="portrait"/>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
  /* LAYOUT */
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: auto 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: slideInFromRight .4s 0s 1;
  }
  .portrait {
    display: none;
  }
  @media (max-width: 1024px) {
    .background {
      flex-direction: column;
    }
    .container {
      width: 90%;
      height: auto;
      min-height: 80vh;
      margin: 2em 2em;
    }
    .portrait {
      display: block;
    }
    .landscape {
      display: none;
    }
  }
  /* DESIGN */
  img{
    height: 100vh;
    width: auto;
    box-shadow: 10px 0px 7px #111327;
    animation: slideInFromRight .4s 0s 1;
  }
  @media (max-width: 1024px) {
    img {
      height: 100vw;
    }
  }
  /* TYPOGRAPHY */
  h1 {
    color: #fafafa;
    font-size: var(--step-2);
    text-align: center;
  }
  a {
    color: var(--red);
    font-size: var(--step-0);
    text-decoration: none;
    border-bottom: .1em dotted var(--red);
    transition-duration: .3s;
  }
  a:hover {
    font-size:calc(var(--step-0)*1.2);
    letter-spacing:-.05em;
  }
  p {
    text-align: center;
  }
  .smltxt,
  .smltxt > a {
    font-size: var(--step--2);
  }
  .smltxt > a:hover{
    font-size:calc(var(--step--2)*1.1);
  }
</style>