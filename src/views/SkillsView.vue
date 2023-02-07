<template>
    <PageTemplate page="skills">
        <template v-slot:content>
            <DoubleColumn class="doubleColumn">
                <div v-for="skill in skills" :key="skill.skill" class="cards">
                    <DisplayCard  :object="false">
                        <template v-slot:h1>{{skill.skill}}</template>
                        <template v-slot:p>{{skill.description}}</template>
                    </DisplayCard>
                </div>
            </DoubleColumn>
        </template>
    </PageTemplate>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue';
import DisplayCard from '@/components/DisplayCard.vue';
import DoubleColumn from '@/components/DoubleColumn.vue';
export default {
    name: 'SkillsView',
    components: {
    PageTemplate,
    DisplayCard,
    DoubleColumn
},

    data() {
        return {
            skills: [
                {
                    skill: 'Rust',
                    description: 'My favorite language by a mile, Rust combines low level speed within 10% of bare C and high level ergonomics borrowed from the functional world with memory safety implemented without a garbage collector.'
                },
                {
                    skill: 'C#/F#',
                    description: 'Object oriented and functional programming in the .NET ecosystem.',
                },
                {
                    skill: 'JavaScript',
                    description: 'Familiarity and experience with modern JS patterns, like promises and lambda functions.',
                },
                {
                    skill: 'Vue.JS',
                    description: 'Familiarity with Vue.JS, its router, and its extensive componentization features, like views, slots, and directives.',
                },
                {
                    skill: 'Java',
                    description: 'Academic and personal experience in object oriented programming using Java.',
                },
                {
                    skill: 'Python with Pandas and Polars',
                    description: 'Experience using Python for data anlysis, leveraging the Pandas and Polars DataFrame libraries.',
                },
                {
                    skill: 'HTML/CSS Web Development',
                    description: 'Experience in modern CSS features and development.',
                },
                {
                    skill: 'CAD in Microstation',
                    description: 'Computer Assisted Design training in Microstation and its geometrics extension, InRoads.',
                },
                {
                    skill: 'Audio Engineering',
                    description: 'Multiple years of experience in mixing, mastering, recording, and live audio.',
                },
                {
                    skill: 'Technical and Creative Writing',
                    description: 'Writing skills honed in a wide variety of academic and personal projects.',
                },
                {
                    skill: 'Field Data Collection',
                    description: 'Hands-on and classroom training in collecting data in the field using LIDAR, Total Stations, and manual observation.',
                },
            ]
        }
    }
}
</script>

<style scoped>
    .cards {
        animation: slideInFromRight .4s 0s 1;
        margin: 0 auto;
        width: 90%;
    }
    @media (max-width: 1200px) {
    }
    @media (max-width: 470px) {
    }
</style>