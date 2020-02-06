<template lang="pug">
.contact_box
    .container
        .contact_box__title
            h1 Contact 
        .contact_box_main
            .contact_box__icons(v-for="icon in icons")
                .contact_box__icons--item(:class="icon.class")
                    img(:src="icon.img" target="blank" :alt="icon.alt" rel="nofollow" )
                    a(:href="icon.href")
            

</template>

<script>
export default {
    data(){
        return {
            icons: [
                {"class" : "contact_box__icons--mail", "img": "images/mail.png", "href":"", "alt":"mail"},
                {"class" : "contact_box__icons--github", "img": "images/github.png", "href":"https://github.com/aniaska4", "alt":"github"},
                {"class" : "contact_box__icons--linkedIn", "img": "images/linkedin.png", "href":"https://www.linkedin.com/in/anna-belka-71793649/", "alt":"linkedin" }
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

.contact_box_main
    display: flex;
    justify: center;
    align-items: center;
    margin-top: 40px;
    .contact_box__icons--item
        padding: 40px;
        img
            width: 70%;  
            cursor: pointer;  

</style>

