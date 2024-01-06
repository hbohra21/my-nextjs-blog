// api/posts.js
// Mock API functions for fetching and submitting posts
const posts = [
    // Add mock data here
];

export const getAllPosts = () => {
    return Promise.resolve(posts);
};

export const getPostById = (id) => {
    const post = posts.find((p) => p.id === id);
    return Promise.resolve(post);
};

export const createPost = (postData) => {
    // Implement logic to create a new post
    const newPost = {
        id: posts.length + 1,
        ...postData,
    };
    posts.push(newPost);
    return Promise.resolve(newPost);
};
