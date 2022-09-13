<template>
    <div id="columnWrapper">
        <div id="doubleColumn">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SingleColumn",
    components: {

    },

    props: {

    }
}
</script>

<style>
    #doubleColumn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        width: 45%;
        margin: 0 auto;
    }
    @media (max-width: 1200px) {
        #doubleColumn {
            grid-template-columns: 1fr;
            width: 95%;
        }
    }

</style>