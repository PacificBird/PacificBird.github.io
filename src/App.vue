<template>
  <router-view to="/"></router-view>
</template>

<style>

@font-face{
  font-family:manrope;
  src:url('./assets/fonts/Manrope[wght].ttf') format("truetype"),
      url('./assets/fonts/Manrope[wght].woff2') format("woff2");
  }

/* FLUID TYPE */
/* ---------- */
:root {
  font-family:manrope;

  --step--2:clamp(0.51rem,calc(0.2rem + 0.72vw),1.92rem);
  --step--1:clamp(0.62rem,calc(0.22rem + 0.91vw),2.40rem);
  --step-0:clamp(0.74rem,calc(0.23rem + 1.15vw),3.00rem);
  --step-1:clamp(0.89rem,calc(0.18rem + 1.4vw),3.75rem);
  --step-2:clamp(1.07rem,calc(0.25rem + 1.85vw),4.69rem);
  --step-3:clamp(1.29rem,calc(0.24rem + 2.34vw),5.86rem);
  --step-4:clamp(1.55rem,calc(0.22rem + 2.96vw),7.32rem);
  --step-5:clamp(1.86rem,calc(0.18rem + 3.74vw),9.15rem);

  --dark-blue: #181B36;
  --light-blue-transparent: rgba(146, 175, 215, .9);
  --red: #C03E3E;
  --lightred: #f03e3e;
  --yellow: #FFD046;

  }

  @media (max-width:1279px){
    :root{
      --step--2:clamp(0.48rem,calc(0.31rem + 0.41vw),0.64rem);
      --step--1:clamp(0.57rem,calc(0.34rem + 0.58vw),0.80rem);
      --step-0:clamp(0.69rem,calc(0.37rem + 0.79vw),1.00rem);
      --step-1:clamp(0.83rem,calc(0.39rem + 1.08vw),1.25rem);
      --step-2:clamp(0.99rem,calc(0.4rem + 1.45vw),1.56rem);
      --step-3:clamp(1.19rem,calc(0.4rem + 1.94vw),1.95rem);
      --step-4:clamp(1.43rem,calc(0.38rem + 2.58vw),2.44rem);
      --step-5:clamp(1.71rem,calc(0.33rem + 3.41vw),3.05rem)
      }
  }

  @media (max-width:1024px){
    :root{
      --step--2:clamp(0.78rem,calc(0.77rem + 0.04vw),0.80rem);
      --step--1:clamp(0.94rem,calc(0.91rem + 0.14vw),1.00rem);
      --step-0:clamp(1.13rem,calc(1.06rem + 0.28vw),1.25rem);
      --step-1:clamp(1.35rem,calc(1.24rem + 0.47vw),1.56rem);
      --step-2:clamp(1.62rem,calc(1.45rem + 0.74vw),1.95rem);
      --step-3:clamp(1.94rem,calc(1.7rem + 1.11vw),2.44rem);
      --step-4:clamp(2.33rem,calc(1.97rem + 1.6vw),3.05rem);
      --step-5:clamp(2.80rem,calc(2.29rem + 2.26vw),3.82rem)
      }
  }

  /* TYPOGRAPHY */
  /* ---------- */
  body{
    margin:0
  }

  h1{
    font-size: var(--step-1);
    font-weight: 500;
  } 
  h2 {
    font-weight: 400;
    color: #a8a8a8;
    font-size: var(--step--2);
  }
  p{
    font-weight: 400;
    color: #ebebeb;
    font-size: var(--step--1);
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: var(--step-0);
    }
  }

  /* ANIMATIONS */
  /* ---------- */
    @-webkit-keyframes slideInFromLeft{
      0%{
        transform:translateX(-100%)
      }
      to {
        transform:translateX(0)
      }
    }
    @keyframes slideInFromLeft{
      0%{
        transform:translateX(-100%)
      }
      to{
        transform:translateX(0)
      }
    }
    @-webkit-keyframes slideInFromRight{
      0%{
        transform:translateX(200%)
        }
      to{
        transform:translateX(0)
      }
    }
    @keyframes slideInFromRight{
      0%{
        transform:translateX(200%)
      }
      to{
        transform:translateX(0)
      }
    }
    @-webkit-keyframes slideInFromTop{
      0%{
        transform:translateY(-100%)
      }
      to{
        transform:translateY(0)
      }
    }
    @keyframes slideInFromTop{
      0%{
        transform:translateY(-100%)
      }
      to{
        transform:translateY(0)
      }
    }

</style>
