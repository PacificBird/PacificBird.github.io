<template>
    <div id="displayCard">
        <div class="text" :class="{'wide': !object}">
            <h1>
                <slot name="h1">title</slot>
            </h1>
            <div id="subtitles" v-if="subtitles">
                <h2>
                    <slot name="h2a">subtitle</slot>
                </h2>
                <h2>
                    <slot name="h2b">subtitle</slot>
                </h2>
            </div>
            <p>
                <slot name="p">description content</slot>
            </p>
        </div>
        <div class="object" v-if="object">
            <slot name="object">
                <img src="../assets/img/shared/triangles.svg"/>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DisplayCard",
    components: {
        
    },

    props: {
        object: {
            default: true,
            type: Boolean
        },
        subtitles: {
            default: false,
            type: Boolean
        },
        title: String
    },
}
</script>

<style scoped>
    #displayCard {
        display: flex;
        margin-top: 2em;
        margin-bottom: 1em;
        width: 100%;
    }
    @media (max-width: 1020px) {
        #displayCard {
            flex-direction: column;
            align-items: center;
        }
    }
    .text {
        width: 40%;
        margin: auto 2em auto 2em
    }
    #subtitles {
        display: flex;
        justify-content: space-between;
    }
    h1, p {
        text-align: center;
        padding: .5em;
        border-radius: .2rem;
    }
    h1 {
        background: var(--yellow);
        color: black;
    }
    h2 {
        text-align: center;
        width: 80%;
    }
    .object {
        width: 60%;
    }
    .wide {
        width: 90%;
    }

    @media (max-width: 1200px) {
        .text {
            width: 100%;
        }
        h1 {
            font-size: var(--step-3);
        }
        p {
            font-size: var(--step-1);
        }
        .object {
            width: 90%;
            margin-bottom: 5em;
        }
    }

    @media (max-width: 470px) {
        .text {
            width: 90%;
        }
        h1 {
            font-size: var(--step-2);
        }
        p {
            font-size: var(--step-1);
        }
        .object {
            width: 98%;
            margin-bottom: 5em;
        }
    }
</style>