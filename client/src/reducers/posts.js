import { DELETE, UPDATE, FETCH_ALL, CREATE } from '../constants/actionTypes';

export default function reducer(posts = [], action){
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload); //keep the post.id is not equal to payload
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}