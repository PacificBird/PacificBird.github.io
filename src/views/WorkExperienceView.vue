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
                    location: 'WSU Department of Entomology',
                    jobTitle: 'Research Assistant',
                    duration: 'January, 2023 — Present',
                    description: 'Assisting Liesl Oeller in David Crowder\'s lab with research on pea aphids as a vector of PEMV to better understand the spread of the virus and better predict the time and location of outbreaks on agricultural land.',
                    file: '../img/object/fshn.jpg'
                },
                {
                    location: 'Dodgen Research Facility',
                    jobTitle: 'Reactor Operator Trainee',
                    duration: 'August, 2022 — Present',
                    description: 'The practical portion of my reactor operator trainee program involves at least ten hours of work per week at the facility. This encompasses running samples, packaging irradiated materials, maintaining labs, performing maintenance, keeping records, in addition to operating the reactor itself.',
                    file: '../img/object/dodgen.jpg'
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