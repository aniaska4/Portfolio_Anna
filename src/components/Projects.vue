<template lang="pug">
    .project_box
        .container
            .project_box__title
                h1 My projects
            .project_box__projects

</template>
<script>
export default {
    name: "Projects",
    data() {
        return {
            projects: [
                {
                    "title" : "Loan slider",
                    "describe" : "",
                    "technology" : "",
                    "code_url" : "",
                    "Gh-pages_url" : ""
                
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
    align-items: center
    height: 600px;

.project_box__title
    padding-bottom: 30px;
    h1 
        font-size: 40px;
</style>

