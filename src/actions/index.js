import jsonPlaceholder from  '../api/JSONPlaceholder';

export const fetchPosts =  () => {
// Bad approach!!!
 const promise =  jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};