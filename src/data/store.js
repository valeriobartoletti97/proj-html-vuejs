import {reactive} from 'vue'
export const store = reactive ({
    categories:[
        {
            img:'cat_1-770x375.jpg',
            name:'Software Development',
            id:1,
            coursesNumber: '4'
        },
        {
            img:'cat_2-370x155.jpg',
            name: 'Art',
            id:2,
            coursesNumber: '8'
        },
        {
            img:'cat_3-370x155.jpg',
            name:'Material Design',
            id:3,
            coursesNumber: '4'
        },
        {
            img:'cat_4-370x155.jpg',
            name:'Music',
            id:4,
            coursesNumber: '5'
        },
        {
            img:'cat_5-370x155.jpg',
            name:'Exercise',
            id:5,
            coursesNumber: '7'
        },
        {
            img:'cat_6-370x155.jpg',
            name:'Photography',
            id:6,
            coursesNumber: '4'
        },
    ],
    courses:[
        {
            img:'course-preview-544x322.jpg',
            title:'Basic of MasterStudy Education Theme',
            id:1,
            category:'Software Development',
            oldPrice:'',
            price:'Free',
            badge:'hot',
            stars: 5
        },
        {
            img:'cat_2-544x322.jpg',
            title:'Real Things Art Painting by Jason Ni',
            id:2,
            category:'Art',
            oldPrice:'60.99',
            price:'45.99',
            badge:'new',
            stars: 5
        },
        {
            img:'landscape-544x322.jpg',
            title:'Minimalism, How to make things simpler',
            id:3,
            category:'Art',
            oldPrice:'79.99',
            price:'39.99',
            badge:'hot',
            stars: false,
            hours: '5 hours'
        },
        {
            img:'photo-1496307042754-b4aa456c4a2d-544x322.jpeg',
            title:'How to be a DJ? Make Electronic Music',
            id:4,
            category:'Electronic',
            oldPrice:'59.99',
            price:'49.99',
            badge:'Special',
            stars: 5
        },
        {
            img:'photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg',
            title:'Graphic Design Basics Masterclass',
            id:5,
            category:'Communication',
            oldPrice:'',
            price:false,
            badge:false,
            stars: false,
            hours:'8 hours'
        },
        {
            img:'photo-1461749280684-dccba630e2f6-544x322.jpeg',
            title:'Web Coding and Apache Basics theory',
            id:6,
            category:'Apache',
            oldPrice:'',
            price:'Free',
            badge:'hot',
            stars: false,
            hours: '10 hours'
        },
        {
            img:'cathryn-lavery-67852-unsplash-272x161.jpg',
            title:'Interior design concepts Masterclass',
            id:7,
            category:'Art',
            oldPrice:'69.99',
            price:'39.99',
            badge:'new',
            stars: false,
            hours:'11 hours'
        },
    ]
});