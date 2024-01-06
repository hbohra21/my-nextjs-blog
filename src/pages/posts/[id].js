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

export async function getServerSideProps({ query }) {
    const post = JSON.parse(query.post);

    return {
        props: {
            post,
        },
    };
}

export default PostDetailPage;
