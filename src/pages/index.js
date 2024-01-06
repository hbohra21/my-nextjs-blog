import React, { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import PostList from '../components/PostList';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({ initialPosts }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const loadMorePosts = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.org/posts?_page=${page + 1}&_limit=10`);
            if (response.ok) {
                const newPosts = await response.json();
                if (newPosts.length > 0) {
                    setPosts([...posts, ...newPosts]);
                    setPage(page + 1);
                } else {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error('Error fetching more posts:', error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasMore) {
                loadMorePosts();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMorePosts, hasMore]);

    return (
        <Layout>
            <Head>
                <title>Bansal App</title>
                <meta name="description" content="Blogging Page " />
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Freehand&family=Sen&display=swap"
                    rel="stylesheet" />

            </Head>
            <PostList posts={posts} loadMore={loadMorePosts} />
        </Layout>
    );
};

export async function getStaticProps() {
    // Fetch initial posts from your API 
    const res = await fetch('https://jsonplaceholder.org/posts?_page=1&_limit=10');
    const initialPosts = await res.json();

    return {
        props: {
            initialPosts,
        },
    };
}

export default Home;
