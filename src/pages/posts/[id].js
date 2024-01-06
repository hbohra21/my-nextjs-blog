// pages/posts/[id].js
import React from 'react';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';

const PostDetailPage = ({ post }) => {
    return (
        <Layout>
            <PostDetail post={post} />
        </Layout>
    );
};

export async function getServerSideProps({ params }) {

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const res = await fetch(`https://jsonplaceholder.org/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}

export default PostDetailPage;
