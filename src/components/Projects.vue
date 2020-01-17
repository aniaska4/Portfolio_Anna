<template lang="pug">
    .project_box
        .container
            .project_box__title
                h1 My projects
            .project_box__projects_container
                .project_box__projects(v-for="project in projects")
                    .project_box__projects__image
                        img(:src="project.img")
                    .project_box__projects__title
                        h4 {{project.title}}
                    .project_box__projects__describe
                        p {{project.describe}}
                    .project_box__projects__technology
                        p technology: {{project.technology}}
                    .project_box__projects__url
                        .projects__url__demo 
                            a(:href="project.gh_pages_url" target="blank") DEMO
                        .projects__url__code 
                            a(:href="project.gh_pages_url" target="blank") Code
                    


</template>
<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    "img": "images/loan_slider.png",
                    "title" : "Loan slider",
                    "describe" : "Loan slider that helps you to choose the best loan option, using json locally file",
                    "technology" : "vue.js, JSON",
                    "code_url" : "https://github.com/aniaska4/loan_slider",
                    "gh_pages_url" : "https://aniaska4.github.io/loan_slider/"
                
                },
                {
                    "img": "images/movieList.png",
                    "title" : "Films playlist",
                    "describe" : "Movie playlist with top movies in 2019, using api request, created on vue-cli ",
                    "technology" : "vue.js, API",
                    "code_url" : "https://github.com/aniaska4/Playlist",
                    "gh_pages_url" : "https://github.com/aniaska4/Playlist"
                
                },
                {
                    "img": "images/business.png",
                    "title" : "Bussines Card",
                    "describe" : "Business card template created in nuxt.js",
                    "technology" : "vue.js, nuxt.js",
                    "code_url" : "https://github.com/aniaska4/business_card",
                    "gh_pages_url" : "https://aniaska4.github.io/business_card/"
                
                },
                {
                    "img": "images/quiz.png",
                    "title" : "Polish movies - quiz",
                    "describe" : "Quiz about Polish movies, 10 question. OOP in JavaScript.",
                    "technology" : "vanilla JS, JSON, SCSS",
                    "code_url" : "https://github.com/aniaska4/Polskie_seriale",
                    "gh_pages_url" : "https://aniaska4.github.io/Polskie_seriale/"
                
                },
                 {
                    "img": "images/random_jokes.png",
                    "title" : "Random Jokes",
                    "describe" : "Random jokes retreive from API, sorted from smallest to largest number of letters in a word",
                    "technology" : "jQuerry, AJAX, ",
                    "code_url" : "https://github.com/aniaska4/Polskie_seriale",
                    "gh_pages_url" : "https://aniaska4.github.io/Polskie_seriale/"
                
                }
            ]
        }
    }
    
}
</script>

<style lang="sass" scoped>
.project_box 
    display: flex;
    justify-content: center;
    align-items: center;

.project_box__title
    padding-bottom: 30px;
    h1 
        font-size: 40px;

.project_box__projects_container
    display: flex;
    flex-wrap: wrap;

.project_box__projects
    width: 50%
    padding: 15px 0 15px 0

.project_box__projects__image
    img
        width: 50%;
        border: 3px solid black;
        height: 150px;

.project_box__projects__describe
    text-align: left

.project_box__projects__technology
    text-align: left;

.project_box__projects__url
    display: flex;
    justify-content: space-around
    font-weight: 700;
    a
        text-decoration: none;
        color: #2c3e50;

</style>

