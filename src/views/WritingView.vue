<template>
    <PageTemplate page="writing">
        <template v-slot:content>
            <SingleColumn>
                <div id="writingcolumn">
                    <DisplayCard v-for="publication in publications" :key="publication.key">
                        <template v-slot:h1>{{publication.title}}</template>
                        <template v-slot:p>{{publication.description}}</template>
                        <template v-slot:object><iframe :src="'https://docs.google.com/viewerng/viewer?url=http://pacificbird.github.io'+publication.file+'&embedded=true'"></iframe></template>
                    </DisplayCard>
                </div>
            </SingleColumn>
        </template>
    </PageTemplate>
</template>

<script>
import PageTemplate from '../components/PageTemplate.vue'
import SingleColumn from '@/components/SingleColumn.vue';
import DisplayCard from '@/components/DisplayCard.vue';
export default {
    name: 'WritingView',
    components: {
        PageTemplate,
        SingleColumn,
        DisplayCard
    },
    
    data() {
        return {
            publications: [
                {
                    title: 'The Life; The Art',
                    description: 'My first independent philosophical work covering a wide range of topics as they relate to building autonomy and the revolutionary community. It is partitioned into two main sections, The Life, which ranges in topics more in the theoretical spirit, and The Art, which covers more concrete topics.',
                    file: '/docs/thelifetheart.pdf'
                },
                {
                    title: 'Structure to Community to Individual',
                    description: "This was my final essay for my English Composition 101 class during my first year of dual-credit college classes. It explores the decidedly poor progress and extensive backpedaling that has occurred in the area of racial justice (especially pertaining to Black Americans) seen in the United States following the Civil Rights Movement of the 1960's. Topics follow from racism in the housing and loan market, to the consequent cycles of poverty, civil abandonment, and the many inequalities in schooling, healthcare, policing, and quality of life.",
                    file: '/docs/structuretocommunitytoindividual.pdf'
                },
                {
                    title: 'Race as Class Conflict In American History',
                    description: 'My final thematic essay for my US History class. Applies many of the concepts I talk about and establish in The Life; The Art as it relates historically to the racialization of Black and Native Americans from the Pre-Columbian era to the Reconstruction era.',
                    file: '/docs/raceasclassconflict.pdf'
                },
            ]
        }
    }
}
</script>

<style scoped>
    iframe {
        width: 100%;
        aspect-ratio: 5/7;
    }
    #writingcolumn {
        animation: slideInFromRight .4s 0s 1;
    }
    @media (max-width: 1200px) {
        #writingcolumn {
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 470px) {
        #writingcolumn {
            width: 98%;
            margin: 0 auto;
        }
    }
</style>