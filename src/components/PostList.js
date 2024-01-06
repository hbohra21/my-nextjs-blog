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
            <h2 className="mb-4">Blog Posts</h2>
            <div className="row">
                {posts.map((post, index) => (
                    <div key={post.id} className="col-md-6 mb-4">
                        <div className="card">
                            <Link href={{ pathname: '/posts/[id]', query: { post: JSON.stringify(post) } }} as={`/posts/${post.id}`}>

                                {post.image && <img src={post.image} alt={`Image for ${post.title}`} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text post-content">{post.content}</p>
                                </div>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {lastPostRef && (
                <div ref={lastPostRef} className="text-center mt-4">
                    <button className="btn btn-primary" onClick={loadMore}>
                        Load More
                    </button>
                </div>
            )}
            <style jsx>{`
                /* Override Bootstrap card styling */
                .card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    transition: transform 0.2s;
                }

                /* Hover effect for cards */
                .card:hover {
                    transform: scale(1.05);
                }

                /* Override Bootstrap card image styling */
                .card-img-top {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px 8px 0 0;
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

                /* Custom styles for the "Load More" button */
                .btn-primary {
                    background-color: #0070f3;
                    color: #fff;
                }

                .btn-primary:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default PostList;
