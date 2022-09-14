<template>
    <PageTemplate page="education">
        <template v-slot:content>
            <SingleColumn>
                <div id="educationcolumn">
                    <DisplayCard v-for="education in educations" :key="education.key" :subtitles="true">
                        <template v-slot:h1>{{education.location}}</template>
                        <template v-slot:h2a>{{education.study}}</template>
                        <template v-slot:h2b>{{education.duration}}</template>
                        <template v-slot:p>{{education.description}}</template>
                        <template v-slot:object><img :src="education.file"/></template>
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
    name: 'EducationView',
    components: {
        PageTemplate,
        DisplayCard,
        SingleColumn
    },

    data() {
        return {
            educations: [
                {
                    location: 'Washington State University',
                    study: 'Bachelors of Data Analytics, Agriculture and Environmental Systems',
                    duration: 'August, 2022 — Present',
                    description: 'My current place of residence and university of study, I transfered into WSU August of 2022 with five semesters to the completion of my degree in Data Analytics. I\'m excited to see all the things Pullman campus has to offer me, such as internships, research experience, and all the people I\'ll meet!',
                    file: '../img/object/wsu.jpg'
                },
                {
                    location: 'WSU Nuclear Research Center',
                    study: 'USNRC Reactor Operator Liscence',
                    duration: 'September, 2022 — Present',
                    description: 'One year student reactor operator training at the Dodgen Research Facility TRIGA reactor, culminating in a Nuclear Regulatory Commission Reactor Operator\'s License.',
                    file: '../img/object/nsc.jpg'
                },
                {
                    location: 'Yakima Valley College',
                    study: 'Associate in Arts (AA-DTA) [4.0 GPA]',
                    duration: 'September, 2020 — June, 2022',
                    description: 'I attented YVC during my Junior and Senior years of high school through it\'s running start program, which also happened to be during the height of the COVID-19 pandemic and the lockdown. Subsequently, I spent most of my time doing online classes, but I was still able to earn my Associates and fill out nearly two years of credit to my major at WSU before I graduated high school.',
                    file: '../img/object/yvc.jpg'
                },
                {
                    location: 'West Valley High School Yakima',
                    study: '[4.0 GPA]',
                    duration: 'August, 2018 — June, 2022',
                    description: 'At WVHS I spent my Freshmen and Sophomore years attending honors classes and earning college credit through Central Washington University and University of Washington\'s college in the high school programs. I also ran for West Valley\'s cross country and track teams, and qualified for state in cross country my senior year.',
                    file: '../img/object/wvhs.jpg'
                },
            ]
        }
    }
}
</script>

<style scoped>
    #educationcolumn {
        animation: slideInFromRight .4s 0s 1;
    }
    img {
        width: 100%;
    }
    @media (max-width: 1200px) {
        #educationcolumn {
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 470px) {
        #educationcolumn {
            width: 98%;
            margin: 0 auto;
        }
    }
</style>