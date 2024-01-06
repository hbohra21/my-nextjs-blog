import React from 'react';

const PostDetail = ({ post }) => {
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <img src={post.thumbnail} alt={`Thumbnail for ${post.title}`} className="card-img-top" />
                    <p className="card-text">{post.content}</p>
                    <p className="card-text"><small className="text-muted">Author: {post.author}</small></p>
                    <p className="card-text"><small className="text-muted">Published At: {post.publishedAt}</small></p>
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
            </div>
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

                /* Override Bootstrap button styling */
                .btn-primary {
                    color: #fff;
                    background-color: #0070f3;
                    border: none;
                }

                /* Override Bootstrap button hover styling */
                .btn-primary:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    );
};

export default PostDetail;
