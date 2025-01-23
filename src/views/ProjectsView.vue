<template>
    <PageTemplate page="projects">
        <template v-slot:content>
            <SingleColumn>
                <div id="projectscolumn">
                    <DisplayCard v-for="project in projects" :key="project.key" :subtitles="true" :object="false">
                        <template v-slot:h1>{{project.title}}</template>
                        <template v-slot:h2a>{{project.subtitle}}</template>
                        <template v-slot:h2b><a :href="project.link">{{project.linktext}}</a></template>
                        <template v-slot:p>{{project.description}}</template>
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
    name: 'ProjectsView',
    components: {
        PageTemplate,
        DisplayCard,
        SingleColumn
    },

    data() {
        return {
            projects: [
                {
                    title: 'GIS Portfolio',
                    subtitle: 'Mapping and Analysis',
                    linktext: 'Github Repository',
                    link: 'https://github.com/PacificBird/GIS_Portfolio',
                    description: 'A gallery of compositions made during the course of my professional and academic career.',
                },
                {
                    title: 'Pear Scylla IPM Landscape Analysis',
                    subtitle: 'Geospatial Landscape Effects Study',
                    linktext: 'Github Repository',
                    link: 'https://github.com/PacificBird/pear_ipm_landscape_analysis',
                    description: 'Required R code, data specifications, and documentation therein to perform a multiple ring buffer analysis on the spatial effects of conventional orchard management on the efficacy of non-conventional management strategies for pear scylla, including the novel IPM strategy developed at the WSU Tree Fruit Research Extension Center in Wenatchee, WA.',
                },
                {
                    title: 'WSU NSC Experimental Design and Review Poster',
                    subtitle: 'Public-Facing Facility Education',
                    linktext: 'Document Link',
                    link: 'http://pacificbird.github.io/docs/experimental_design_review_izzym.pdf',
                    description: 'Poster project made during my training reactor operator training program detailing the technical specifications and review/approval process pertaining to experiments at the WSU Nuclear Science Center, as well as examples of apparatus design and ongoing experiment types',
                },
                {
                    title: 'Codling Moth Population Simulation and Analysis',
                    subtitle: 'Population Dynamics Research',
                    linktext: 'Github Repository',
                    link: 'https://github.com/PacificBird/InsectPhenologyCaptureSim',
                    description: 'A Rust-based simulation for the emergence, mortality, and capture of codling moth in the field, created using earlier models from the Jones & Wiman articles published in the Journal of Population Ecology, as well as the associated Python-based analysis of simulation and field data resulting in the creation of novel models for the extraction of trapping efficiency from field data and the accurate prediction of overall population size from early field data.',
                },
                {
                    title: 'Portfolio',
                    subtitle: 'Vue-based portfolio website',
                    linktext: 'Portfolio Home Page',
                    link: 'https://github.com/PacificBird/PacificBird.github.io',
                    description: 'The very website you\'re looking at now! Created with Vue.JS 3 and designed for view on mobile and desktop devices, landscape or portrait. No fancy CSS libraries needed.',
                },
                {
                    title: 'Human Regex',
                    subtitle: 'Expressive Rust Regex-Builder API',
                    linktext: 'Github Repository',
                    link: 'https://github.com/cmccomb/human_regex',
                    description: 'A declarative, human-readable API for making regular expressions in Rust with the standard regex crate.',
                },
            ]
        }
    }
}
</script>

<style scoped>
    #projectscolumn {
        animation: slideInFromRight .4s 0s 1;
    }
    a {
        color: var(--lightred);
        font-weight: 400;
    }
    @media (max-width: 1200px) {
        #projectscolumn {
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 470px) {
        #projectscolumn {
            width: 98%;
            margin: 0 auto;
        }
    }
</style>
