<template>
    <div id="displayCard">
        <div class="text">
            <h1>
                <slot name="h1">title</slot>
            </h1>
            <p>
                <slot name="p">description content</slot>
            </p>
        </div>
        <div class="object">
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

}
</script>

<style scoped>
    #displayCard {
        display: flex;
        margin-top: 2em;
        margin-bottom: 1em;
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1020px) {
        #displayCard {
            flex-direction: column;
            align-items: center;
        }
    }
    .text {
        width: 40%;
        margin: auto 2em;
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
    .object {
        width: 60%;
    }

    @media (max-width: 1200px) {
        .text {
            width: 80%;
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