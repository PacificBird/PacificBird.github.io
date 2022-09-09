<template>
    <div id="columnWrapper">
        <div id="column">
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
    #columnWrapper {
        margin-left: 15%;
        width: 100%;
    }
    #column {
        margin: 0 auto;
        width:60%;
        min-width: 900px;
    }
    @media (max-width: 1200px) {
        #columnWrapper {
            margin-left: 0;
        }
        #column {
            width: 100%;
            min-width: 0;
        }
    }

</style>