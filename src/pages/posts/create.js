import React, { useState } from 'react';
import Layout from '../../components/Layout';
import PostForm from '../../components/PostForm';
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'antd';

const CreatePost = () => {
    const { handleSubmit, reset, formState: { isSubmitting } } = useForm();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const showSuccessModal = () => {
        setSuccessModalVisible(true);
    };

    const handleSuccessModalOk = () => {
        setSuccessModalVisible(false);
    };

    const handleSuccessModalCancel = () => {
        setSuccessModalVisible(false);
    };

    const handleFormSubmit = async (formData) => {
        try {
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

                showSuccessModal();

                reset();
            } else {
                console.error('Failed to create post');
            }
        } catch (error) {
            console.error('Error in form submission:', error);
        }
    };


    return (
        <Layout>
            <div style={containerStyle}>
                <h2 style={headingStyle}>Create a New Blog</h2>
                <PostForm onSubmit={handleFormSubmit} resetForm={reset} isSubmitting={isSubmitting} />
            </div>


            <Modal
                title="Post Created"
                visible={isSuccessModalVisible}
                onOk={handleSuccessModalOk}
                onCancel={handleSuccessModalCancel}
                footer={[
                    <Button key="ok" type="primary" onClick={handleSuccessModalOk}>
                        OK
                    </Button>,
                ]}
            >
                <p>Your post has been created successfully!</p>
            </Modal>
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
