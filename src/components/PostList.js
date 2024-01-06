import React, { useRef, useCallback } from 'react';
import Link from 'next/link';

const PostList = ({ posts, loadMore }) => {
    const observer = useRef();

    const lastPostRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Load more posts when the last post is visible
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [loadMore]);

    return (
        <div className="container mt-4">
            <h2>Blog Posts</h2>
            <ul className="list-unstyled">
                {posts.map((post, index) => (
                    <li key={post.id} className="card mb-4" ref={index === posts.length - 1 ? lastPostRef : null}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <p className="card-title h4">{post.title}</p>
                        </Link>
                        {post.image && <img src={post.image} alt={`Image for ${post.title}`} className="card-img-top" />}
                        <div className="card-body">
                            <p className="card-text post-content">{post.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                /* Additional styles specific to this component if needed */

                /* Override Bootstrap card styling */
                .card {
                    max-width: 800px;
                    margin: 0 auto;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                }

                /* Override Bootstrap card title styling */
                .card-title {
                    color: #333;
                }

                /* Override Bootstrap card image styling */
                .card-img-top {
                    max-width: 100%;
                    height: auto;
                    margin-bottom: 10px;
                }

                /* Override Bootstrap card text styling */
                .card-text {
                    color: #555;
                    line-height: 1.6;
                }

                /* Limit post content to two lines */
                .post-content {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2; /* Limit to two lines */
                    -webkit-box-orient: vertical;
                }
            `}</style>
        </div>
    );
};

export default PostList;
