<template>
    <PageTemplate page="music">
        <template v-slot:content>
            <SingleColumn>
                <div id="musiccolumn">
                    <DisplayCard v-for="publication in publications" :key="publication.key">
                        <template v-slot:h1>{{publication.title}}</template>
                        <template v-slot:p>{{publication.description}}</template>
                        <template v-slot:object>
                            <iframe style="border: 0;" :src="embedSource(publication.code)" seamless>
                            </iframe>
                        </template>
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
    name: 'MusicView',
    components: {
        PageTemplate,
        SingleColumn,
        DisplayCard
    },
    
    data() {
        return {
            publications: [
                {
                    title: 'Birdcalls',
                    description: "By far my biggest project yet. The distilled emotion of the past two-ish years into a 55 minute sequence of bangers. I put a lot of effort (and money) into overhauling my recording process in order to put something out much more high quality than I have before. Like Dinnerdate, it is a very personal record, written mostly during the lowest low I've ever been in. It's definitely not all sad though, I made sure to give it a good amount of hope as well.",
                    code: '2388469711'
                },
                {
                    title:"Bird Isn't Real! Vol 1",
                    description:"A collection of some of the faster DnB and electronic stuff I produced while working on other projects. It has gotten decently popular (relative to my other releases) in the Netherlands for some reason.",
                    code:"1289708501"
                },
                {
                    title:"Dinnerdate",
                    description:"I think I started writing this EP somewhere around September 2020, and it details mostly my struggles in exploration of my identity, personality, and sexuality, as well as the uphill battle that was maintaining a 4.0 in college while working 20-25 hours a week and recording this. The production, I feel, is tastefully shitty, in a charming way.",
                    code:"2803400483"
                },
                {
                    title:"Dinnerdate (Cal's Mix)",
                    description:"This version of the album was made for my boyfriend following his transition. I had recorded the stuff on it a month or two before he started going by a different name so I made this as a valentines gift so he could comfortably listen to it again without getting deadnamed. I also took the opportunity to fix a few issues with the mix, as well as convert Salad For Dinner pt.1 into a single edit without the long cinematic ending bit so it can go on regular listening playlists. I hope you like it Calvin, I love you :)",
                    code:"1801146768"
                },
                {
                    title:"Nature Walk on .mp3",
                    description:"The story of a guy who gets fed up with the city and drops everything on a whim to run off into the forest forever, after taking a hike there. I was inspired by the crunchy, overcompressed acoustic guitars of Neutral Milk Hotel and The Microphones, and I leaned into it heavily with this album. ",
                    code:"2573015270"
                },
                {
                    title:"Gibson USA",
                    description:"The first album I ever made! Looking back on it there's a decent amount of flops (especially in the lyrics department), but there's still some gems and fun moments. My biggest regret still is not double tracking the guitars.", 
                    code:"1378293711"
                }
            ]
        }
    },

    methods: {
        embedSource: (code) => {
            return "https://bandcamp.com/EmbeddedPlayer/album=" + code + "/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/transparent=true/";
        }
    },
    mounted: () => {
        document.querySelector("iframe").onload=()=> {
            document.querySelector("#musiccolumn").style.transform = "translateX(0%)"
        }
    }
}
</script>

<style scoped>
    iframe {
        width: 100%;
        aspect-ratio: 5/8;
    }
    #musiccolumn {
        transform: translateX(+200%);
        transition-duration: .4s;
    }
    @media (max-width: 1200px) {
        #musiccolumn {
            width: 90%;
            margin: 0 auto;
        }
    }
    @media (max-width: 470px) {
        #musiccolumn {
            width: 98%;
            margin: 0 auto;
        }
    }
</style>