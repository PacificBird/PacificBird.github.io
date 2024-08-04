<template>
    <div class="background">
        <HeaderGen :page="this.page"></HeaderGen>
        <slot name="content" id="templateContent"></slot>
    </div>
</template>

<script>
import HeaderGen from "../components/HeaderGen.vue";
export default {
    name: 'PageTemplate',
    components: {
        HeaderGen,
    },

    props: {
        page: String,
    },

    created: () => {
        window.scrollTo(0, 0);
    },

    mounted() {
    },
}
</script>

<style>
    .background {
        margin: 0;
        background: url('../assets/img/shared/trianglesnew.svg');
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
        overflow-x: hidden;
        display: flex;
    }
</style>