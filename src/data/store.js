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
});