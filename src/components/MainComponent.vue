<template>
    <main>
        <!-- section start business -->
        <div class="my-container d-flex justify-content-between">
            <div class="business-wrapper d-flex align-items-center">
                <div class="business-img">
                    <img src="/images/image_box_1-221x231.png" alt="box-1 image">
                </div>
                <div class="business-text ms-5">
                    <h3>Become an Instructor</h3>
                    <p>Teach what you love. Masterstudy gives you the tools to create a course.</p>
                    <button class="my-btn-large">
                        <span class="text-uppercase">Start teaching</span>
                    </button>
                </div>
            </div>
            <div class="business-wrapper d-flex align-items-center">
                <div class="business-img">
                    <img src="/images/image_box_2-234x231.png" alt="box-1 image">
                </div>
                <div class="business-text ms-5">
                    <h3>Setup For Business</h3>
                    <p>Get unlimited access to 2,500 of Udemy’s top courses for your team.</p>
                    <button class="my-btn-large">
                        <span class="text-uppercase">Doing business</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="position-relative developers-feedbacks">
            <img src="/images/Tim-Sab.jpg" alt="tim-sab">
            <div class="feedback-text position-absolute">
                <h3>Come as you are</h3>
                <p class="my-4">MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.</p>
                <span class="d-block developer-name">Tim Sab</span>
                <span class="developer-role">Product Manager, Apple Inc</span>
                <i class="fa-solid fa-play position-absolute"></i>
            </div>
        </div>
    </main>
</template>

<script>

    export default {
        name:'MainComponent',
        data(){
            return{
                devFeedbacks:[
                    {
                        name: 'Tim Sab',
                        id:1,
                        title:'Come as you are',
                        text:'MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.',
                        role: 'General Developer, Stylemix Themes'
                    },
                    {
                        name: 'Xatashi Froust',
                        id:2,
                        title:'Paints of the Future',
                        text:'The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”',
                        role: 'SEO, Froust Inc'
                    },
                    {
                        name: 'Linda Green',
                        id:3,
                        title:'Investing for Your Future',
                        text:'It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!',
                        role: 'Product Manager, Apple Inc'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;
.business-text{
    h3{
    font-size: 2.2em;
    font-weight: 400
    }
    p{
        font-size:1.2em;
        font-weight: 300
    }
    button{
        span{
            font-size: 0.9em
        }
    }
}
.business-img{
    min-width:200px;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
}
.business-wrapper{
    width:49%;
    border:1px solid rgb(211, 211, 211);
    padding: 70px 50px;
    margin:100px 0;
    overflow: hidden;
}
.developers-feedbacks{
    width:100%;
    height:670px;
    overflow:hidden;
}
img{
    width:100%;
    height:100%;
    display:block;
    object-fit:cover
}
.feedback-text{
    top:10%;
    left:15%;
    width: 700px;
    height: 500px;
    z-index:1000;
    background-color:white;
    padding:80px;
    /* letter-spacing: 0.5px; */
    h3{
        font-size: 2.3em;
        font-weight: 400
    }
    p{
        font-size: 1.2em;
        color:gray;
        font-weight:300;
    }
    .developer-name{
        font-weight:600;
        font-size:1.2em
    }
    .fa-solid.fa-play{
        color:white;
        font-size:2.7em;
        top:50%;
        left: 99%;
        transform: translate(0, -50%);
    }
}
</style>