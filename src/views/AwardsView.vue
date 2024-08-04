<template>
    <PageTemplate page="awards">
        <template v-slot:content>
            <DoubleColumn class="doubleColumn">
                <div v-for="award in awards" :key="award.award" class="cards">
                    <DisplayCard  :object="false">
                        <template v-slot:h1>{{award.award}}</template>
                        <template v-slot:p>{{award.description}}</template>
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
    name: 'AwardsView',
    components: {
    PageTemplate,
    DisplayCard,
    DoubleColumn
},

    data() {
        return {
            awards: [
                {
                    award: 'ΦΘΚ Honors Member',
                    description: 'Inducted into the Phi Theta Kappa Honors Society for maintaining high academic performance at YVC.',
                },
                {
                    award: 'WSU Top Scholar',
                    description: 'Awarded for being in the top 10% of incoming students in academic performance for the 2022/2023 academic year.',
                },
                {
                    award: 'YVC President\'s List',
                    description: 'Held above a 3.85 GPA every quarter attended.',
                },
                {
                    award: 'WSOS Baccalaureate',
                    description: 'Awarded by the Washington State Opportunity Scholarship to high performing students intending to earn their Bachelors degree leading to high demand STEM careers in Washington State.',
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