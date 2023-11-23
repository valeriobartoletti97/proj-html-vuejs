<template>
    <main>
        <HeroComponent/>
        <!-- section read more -->
        <div id="read-more" class="overflow-y-hidden">
            <div class="container read-more-text">
                <div class="row">
                    <div class="col-6">
                        <h3>Limitless learning, more possibilities</h3>
                        <p>Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.</p>
                        <button class="my-btn-large">
                            <span class="text-uppercase">Read more</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- section stats -->
        <div id="stats-section">
            <div class="we-are-proud text-center">
                <h4 class="mb-3">We are Proud</h4>
                <p>Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master’s level degrees.</p>
            </div>
            <div class="numbers-stats">
                <div class="container">
                    <div class="row">
                        <div class="col-3 text-center stat-wrapper">
                            <span class="d-block stat-number">2000</span>
                            <span class="text-uppercase stat-object">Students</span>
                        </div>
                        <div class="col-3 text-center stat-wrapper">
                            <span class="d-block stat-number">950</span>
                            <span class="text-uppercase stat-object">Courses</span>
                        </div>
                        <div class="col-3 text-center stat-wrapper">
                            <span class="d-block stat-number">1600</span>
                            <span class="text-uppercase stat-object">Hours video</span>
                        </div>
                        <div class="col-3 text-center">
                            <span class="d-block stat-number">150</span>
                            <span class="text-uppercase stat-object">Countries reached</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section subscribe -->
        <div id="subscribe">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <h5>Subscribe our newsletter</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                    </div>
                    <div class="col-6">
                        <span class="d-block text-uppercase mail-label mb-3">Your e-mail address</span>
                        <div class="d-flex flex-nowrap searchbar-newsletter">
                            <input type="email" placeholder="Enter your e-mail">
                            <button class="search-btn text-uppercase">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        <!-- feedbacks section -->
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
import HeroComponent from './HeroComponent.vue';


    export default {
        name:'MainComponent',
        components:{
    HeroComponent
},
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
#subscribe{
    padding: 50px 0;
    background-color: $green;
    color:white;
    p{
        font-size:0.9em
    }
    input{
        width:400px;
        height: 44px;
        padding: 20px;
        display:block
    }
    .searchbar-newsletter{
        font-size:0.9em;
        button{
            font-weight: 500;
        }
    }
}
.stat-wrapper{
    border-right:1px solid rgb(209, 209, 209);
}
.stat-number{
    font-size: 4.5em;
    font-weight: 300;
}
.stat-object{
    font-size: 1.3em;
    font-weight: 300;
}
.numbers-stats{
    height: 440px;
    width:100%;
    background-image: url('/images/we_proud.png');
    background-repeat: no-repeat;
}
.we-are-proud{
    max-width:1000px;
    margin:0 auto;
    padding: 100px 0;
    h4{
        font-size: 3em;
        font-weight:300;
    }
    p{
        font-size: 1.2em;
        font-weight:300;
    }
}
 #stats-section{
    background-color: #F0F4FA;
} 
.read-more-text{
    padding: 150px 0px;
    height:50%;
    h3{
        font-size: 3em;
        font-weight:300;
        margin-bottom: 30px;
    }
    p{
        font-size: 1.4em;
        margin-bottom:30px
    }
}
#read-more{
    width:100%;
    height:600px;
    background-image: url('/images/read-me-bg.png');
}
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