import {reactive} from 'vue'
export const store = reactive ({
    categories:[
        {
            categoryName:'Art',
            id: 1
        },
        {
            categoryName:'Exercise',
            id: 2
        },
        {
            categoryName:'Material Design',
            id: 3
        },
        {
            categoryName:'Music',
            id: 4
        },
        {
            categoryName:'Photography',
            id: 5
        },
        {
            categoryName:'Software Development',
            id: 6
        },
    ]
});