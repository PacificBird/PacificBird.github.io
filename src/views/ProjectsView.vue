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
                    title: 'Music',
                    subtitle: 'Solo artist',
                    linktext: 'Bandcamp Page',
                    link: 'https://pacificbird.bandcamp.com',
                    description: 'I write, record, mix, and master music. My albums can be previewed and listened to on all major streaming platforms, as well the music page of this website.',
                },
                {
                    title: 'Writing',
                    subtitle: 'Philosophy',
                    linktext: 'Writing Gallery',
                    link: '../#/writing',
                    description: 'I write philosophy on the topics of community, revolution, henology, ecology, and social organization.',
                },
                {
                    title: 'Portfolio',
                    subtitle: 'Vue-based portfolio website',
                    linktext: 'Portfolio Home Page',
                    link: 'https://github.com/PacificBird/PacificBird.github.io',
                    description: 'The very website you\'re looking at now! Created with Vue.JS 3 and designed for view on mobile and desktop devices, landscape or portrait. No fancy CSS libraries needed.',
                },
                {
                    title: 'Infix Macro',
                    subtitle: 'Small Rust utility',
                    linktext: 'Github Repository',
                    link: 'https://github.com/PacificBird/Infix_Macro',
                    description: 'A declaritive macro for quickly creating the boilerplate necessary for making infix operators in Rust, using a clever abuse of operator overloading.',
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