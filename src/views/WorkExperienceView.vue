<template>
    <PageTemplate page="workexperience">
        <template v-slot:content>
            <SingleColumn>
                <div id="workcolumn">
                    <DisplayCard v-for="employment in employments" :key="employment.location" :subtitles="true" :title="employment.location">
                        <template v-slot:h1>{{employment.location}}</template>
                        <template v-slot:h2a>{{employment.jobTitle}}</template>
                        <template v-slot:h2b>{{employment.duration}}</template>
                        <template v-slot:p>{{employment.description}}</template>
                        <template v-slot:object><img :src="employment.file"/></template>
                    </DisplayCard>
                </div>
            </SingleColumn>
        </template>
    </PageTemplate>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue';
import DisplayCard from '@/components/DisplayCard.vue';
import SingleColumn from '@/components/SingleColumn.vue';
export default {
    name: 'WorkExperienceView',
    components: {
        PageTemplate,
        DisplayCard,
        SingleColumn
    },

    data() {
        return {
            employments: [
                {
                    location: 'Rosauers Supermarkets',
                    jobTitle: 'Courtesy Clerk',
                    duration: 'April, 2020 — September, 2021',
                    description: 'Working courtesy at Rosauers was my first job. I was first employed right at the start of the COVID-19 pandemic and gained customer service skills while earning some pocket money for my last two years in high school.',
                    file: '../img/object/rosauers.jpg'
                },
                {
                    location: 'WSDOT South Central Region Survey Crew',
                    jobTitle: 'Survey Tech Intern',
                    duration: 'June, 2022 — August, 2022',
                    description: 'Summer internship at the Washington State Department of Transportation South Central Region survey office. There, I completed training for various CAD programs, survey mathematics, hydraulics, and fish passage, as well as participated in topographic survey on multiple hydraulic and fish passage related projects along different state routes.',
                    file: '../img/object/wsdot.jpg'
                },
            ]
        }
    }
}
</script>

<style scoped>
    #workcolumn {
        animation: slideInFromRight .4s 0s 1;
    }
    img {
        width: 100%;
    }
    @media (max-width: 1200px) {
        #workcolumn {
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 470px) {
        #workcolumn {
            width: 98%;
            margin: 0 auto;
        }
    }
</style>