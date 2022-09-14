<template>
    <button id="menuToggle" @click="toggleMobileMenu" data-boxshadow="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
            <path d="M0 0h24v24H0z" id="buttonFill" data-transparent="false"/>
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255, 255, 255,1)"/>
        </svg>
    </button>
    <div class="wrapper" data-visible="false">
        <router-link to="/" class="gridspan"> <h1 class="home">Izzy McDonald</h1> </router-link>
        <router-link to="/writing"> <p class="writing">Writing</p> </router-link>
        <router-link to="/music"> <p class="music">Music</p> </router-link>
        <router-link to="/photography"> <p class="photography">Photography</p> </router-link>
        <router-link to="/workexperience"> <p class="workexperience">Work Experience</p> </router-link>
        <router-link to="/education"> <p class="education">Education</p> </router-link>
        <router-link to="/skills"> <p class="skills">Skills</p> </router-link>
        <router-link to="/awards"> <p class="awards">Awards</p> </router-link>
        <router-link to="/projects"> <p class="projects">Projects</p> </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderGen",
    components: {

    },

    props: {
        page: String,

    },

    methods: {
        toggleMobileMenu() {
            const menuToggle = document.querySelector("#menuToggle");
            const wrapper = document.querySelector(".wrapper");
            const buttonFill = document.querySelector("#buttonFill");

            if(wrapper.getAttribute('data-visible') === "false") {
                wrapper.setAttribute('data-visible','true');
                menuToggle.setAttribute('data-boxshadow','false');
                buttonFill.setAttribute('data-transparent', 'true');
            }
            else {
                wrapper.setAttribute('data-visible','false');
                menuToggle.setAttribute('data-boxshadow','true');
                buttonFill.setAttribute('data-transparent', 'false');
            }
        }
    },

    mounted() {
        document.querySelector("." + this.page).classList.add("currentPage");
    },
    unmounted() {
        document.querySelector("." + this.page).classList.remove("currentPage");
    }
}
</script>

<style scoped>
    /* CLASSES */
    .wrapper {
        width: 15%;
        height: 100vh;
        position: fixed;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        animation: .4s slideInFromLeft 0s 1;
        background: none;
        z-index: 10;
    }
    #menuToggle {
        width: 3.5em;
        aspect-ratio: 1;
        display: none;
        overflow: hidden;
        border: 0;
        box-shadow: .2em .2em .3em black;
        background: transparent;
    }
    #menuToggle svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1200px) {
        #menuToggle {
            display: block;
            position: fixed;
            top: .5em;
            left: .5em;
            z-index: 11;
            transition-duration: .4s;
        }
        #menuToggle[data-boxshadow='false'] {
            box-shadow: none;
        }
        #buttonFill {
            fill: rgb(146, 175, 215);
            transition-duration: .4s;
        }
        #buttonFill[data-transparent='true'] {
            fill: transparent;
        }
        .wrapper {
            background: var(--light-blue-transparent);
            width: 70%;
            height: 100vh;
            transform: translateX(-100%);
            transition-duration: .4s;
            animation: none;
        }
        .wrapper[data-visible='true'] {
            transform: translateX(0%);
        }
    }
    @media (max-height: 500px) { 
        .wrapper {
            grid-template-columns: 1fr 1fr;
        }
        .gridspan {
            grid-column: span 2;
        }
    }

    /* TYPOGRAPHY */
    h1, p {
        margin: 1em auto;
        color: white;
        width: 80%;
        text-align: center;
    }
    h1 {
        margin-top: .5em;
        font-size: var(--step-2);
    }
    p {
        font-size: var(--step-0);
        font-style: italic;
    }
    a {
        text-decoration: none;
    }
    .currentPage {
        color: var(--red);
    }

    @media (max-width: 1200px) { 
        h1 {
            font-size: var(--step-3);
        }
        p {
            font-size: var(--step-2);
        }
    }
    @media (max-width: 470px) { 
        h1 {
            font-size: var(--step-2);
        }
        p {
            font-size: var(--step-1);
        }
    }
    @media (max-height: 500px) { 
        h1 {
            font-size: var(--step-1);
        }
        p {
            font-size: var(--step-0);
        }
    }
</style>