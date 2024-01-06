import React, { useState } from 'react';
import Layout from '../../components/Layout';
import PostForm from '../../components/PostForm';

const CreatePost = () => {
    const [formData, setFormData] = useState({ title: '', content: '', author: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async () => {
        try {
            setIsSubmitting(true);

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const postData = await response.json();
                console.log('Post created:', postData);

                // Show a simple alert instead of Ant Design Modal
                window.alert('Your post has been created successfully!');

                setFormData({ title: '', content: '', author: '' });
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Error in form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Layout>
            <div className="container" style={containerStyle}>
                <h2 style={headingStyle}>Create a New Blog</h2>
                <PostForm
                    formData={formData}
                    handleChange={handleChange}
                    onSubmit={handleFormSubmit}
                    isSubmitting={isSubmitting}
                />
            </div>
            <style jsx>{`
               
                .container {
                    font-family: 'Sen', sans-serif;
                }
            `}</style>
        </Layout>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',

};

const headingStyle = {
    marginBottom: '20px',
};

export default CreatePost;
