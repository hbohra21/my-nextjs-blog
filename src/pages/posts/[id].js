import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';

const PostDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.org/posts/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPost(data);
                } else {
                    console.error('Failed to fetch post data');
                }
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <Layout>
            {post ? (
                <PostDetail post={post} />
            ) : (
                <p>Loading...</p>
            )}
        </Layout>
    );
};

export default PostDetailPage;
