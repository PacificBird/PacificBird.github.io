<template>
    <PageTemplate page="photography">
        <template v-slot:content>
            <div class="flexbin flexbin-margin photobox">
                <a v-for="n in 45" v-bind:key="n.key" :href="'../img/gallery/'+n+'.jpg'">
                    <img :src="'../img/gallery/'+n+'.jpg'"/>
                </a>
            </div>
        </template>
    </PageTemplate>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
export default {
    name: 'PhotographyView',
    components: {
        PageTemplate,
    },
}
</script>

<style scoped>
/* FLEXBIN STUFF */
.flexbin {
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  margin: 1em; }
  .flexbin:after {
    content: '';
    flex-grow: 999999999;
    min-width: 300px;
    height: 0; }
  .flexbin > * {
    position: relative;
    display: block;
    height: 300px;
    margin: 2.5px;
    flex-grow: 1;}
    .flexbin > * > img {
      height: 300px;
      object-fit: cover;
      max-width: 100%;
      min-width: 100%;
      vertical-align: bottom; }
  .flexbin.flexbin-margin {
    padding: 2.5px; 
    padding-top: 5px;
    margin-bottom: 0px;
    }
  @media (max-width: 980px) {
    .flexbin {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      margin: -2.5px; }
      .flexbin:after {
        content: '';
        flex-grow: 999999999;
        min-width: 150px;
        height: 0; }
      .flexbin > * {
        position: relative;
        display: block;
        height: 150px;
        margin: 2.5px;
        flex-grow: 1; }
        .flexbin > * > img {
          height: 150px;
          object-fit: cover;
          max-width: 100%;
          min-width: 100%;
          vertical-align: bottom; }
      .flexbin.flexbin-margin {
        margin: 2.5px;
        margin-bottom: 0px; } }
  @media (max-width: 400px) {
    .flexbin {
      display: flex;
      overflow: hidden;
      flex-wrap: wrap;
      margin: -2.5px; }
      .flexbin:after {
        content: '';
        flex-grow: 999999999;
        min-width: 100px;
        height: 0; }
      .flexbin > * {
        position: relative;
        display: block;
        height: 100px;
        margin: 2.5px;
        flex-grow: 1; }
        .flexbin > * > img {
          height: 100px;
          object-fit: cover;
          max-width: 100%;
          min-width: 100%;
          vertical-align: bottom; }
      .flexbin.flexbin-margin {
        margin: 2.5px; 
        margin-bottom: 0px;} }

.photobox {
    margin-left: 15%;
    animation: slideInFromRight .4s 0s 1; 
}
@media (max-width: 1200px) {
    .photobox {
        margin-left: 0;
        margin-top: 15vh !important;
    }
}
</style>