import React from 'react';

const PostDetail = ({ post }) => {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    {post.thumbnail && (
                        <img src={post.thumbnail} alt={`Thumbnail for ${post.title}`} className="card-img-top" />
                    )}
                    <p className="card-text">{post.content}</p>
                    <div className="card-text-meta">
                        <p className="text-muted">Author: {post.author}</p>
                        <p className="text-muted">Published At: {new Date(post.publishedAt).toLocaleDateString()}</p>
                    </div>
                    <div className="card-actions">
                        <a href="#" className="btn btn-primary">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .card {
                    max-width: 800px;
                    margin: 0 auto;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    font-family: 'Sen', sans-serif;
                }

                .card-body {
                    padding: 20px;
                    font-family: 'Sen', sans-serif;
                }

                .card-title {
                    font-size: 28px;
                    color: #333;
                    margin-bottom: 16px;
                }

                .card-img-top {
                    max-width: 100%;
                    height: auto;
                    margin-bottom: 16px;
                    border-radius: 8px;
                }

                .card-text {
                    color: #555;
                    line-height: 1.6;
                    font-family: 'Sen', sans-serif;
                }

                .card-text-meta {
                    margin-top: 16px;
                    display: flex;
                    justify-content: space-between;
                }

                .text-muted {
                    color: #777;
                    font-size: 14px;
                }

                .card-actions {
                    margin-top: 20px;
                }

                .btn-primary {
                    color: #fff;
                    background-color: #0070f3;
                    border: none;
                    padding: 10px 16px;
                    border-radius: 4px;
                    text-decoration: none;
                    display: inline-block;
                    cursor: pointer;
                }

                .btn-primary:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default PostDetail;
