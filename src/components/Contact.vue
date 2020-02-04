<template lang="pug">
.contact_box
    .container
        .contact_box__title
            h1 Contact 
        .contact_box__icons
            .contact_box__icons--mail
                img(src="./public/images/mail.png")
            //- .contact_box__icons--github
            //-     img(src="./images/github.png")
            //-         a(href="https://github.com/aniaska4")
            //- .contact_box__icons--linkedIn
            //-     img(src="./images/linkedin.png")
            //-         a(href="https://www.linkedin.com/in/anna-belka-71793649/")
        

</template>

<script>
export default {
    data(){
        return {
            icons: [
                {"class" : "contact_box__icons--mail", "img": "./public/images/mail.png"},
                {"class" : "contact_box__icons--github", "img": "./public/images/mail.png"},
                {"class" : "contact_box__icons--linkedIn", "img": "./public/images/mail.png"}
            ]
        }
    }
    
}
</script>

<style lang="sass" scoped>
.contact_box 
    display: flex;
    justify-content: center;
    align-items: center;

.contact_box__title
    padding-bottom: 30px;
    h1 
        font-size: 40px;


</style>

