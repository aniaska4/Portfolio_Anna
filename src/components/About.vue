<template lang="pug">
    .about_box
        .container
            .about_box__title
                h1 About me
            .about_box_picture
                img(src="images/me.jpg")
            .about_box__description
                p I am beginner Front-End Developer, seeking work in developing in an interesting company.
                            |I am strongly motivated and interested in challenges offered by the area of programming.
                            |I am a postgraduate of the Faculty of Management at the Warsaw University .
                            |I worked for several years at the governmental institutions where I was responsible for the
                            |implementation of EU projects.
                            |For the last three years I have been a happy mother of two children. During my free time
                            |I am improving my skills in the front-development.
                            |Over time I will post here my projects.
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.about_box 
    display: flex;
    justify-content: center;
    align-items: center;

.about_box__title
    padding-bottom: 30px;
    h1 
        font-size: 40px;  
         
.about_box_picture
    img
        width: 65%;

.about_box__description
    padding-top: 30px;
    p 
        text-align: center
        font-size: 20px;
        line-height: 1.5;


</style>
