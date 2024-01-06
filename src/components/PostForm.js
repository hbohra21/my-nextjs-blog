import React, { useState } from 'react';

const PostForm = ({ formData, handleChange, onSubmit, isSubmitting }) => {
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }
        if (!formData.content.trim()) {
            newErrors.content = 'Content is required';
        }
        if (!formData.author.trim()) {
            newErrors.author = 'Author Name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit();
        }
    };

    const styles = {
        form: {
            maxWidth: '400px',
            margin: '0 auto',
        },
        inputContainer: {
            marginBottom: '20px',
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            color: '#333',
            fontSize: '14px',
        },
        input: {
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ddd',
        },
        error: {
            color: 'red',
            fontSize: '12px',
        },
        submitButton: {
            backgroundColor: '#0070f3',
            color: '#fff',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputContainer}>
                <label style={styles.label}>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.title && <span style={styles.error}>{errors.title}</span>}
            </div>
            <div style={styles.inputContainer}>
                <label style={styles.label}>Content:</label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.content && <span style={styles.error}>{errors.content}</span>}
            </div>
            <div style={styles.inputContainer}>
                <label style={styles.label}>Author Name:</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    style={styles.input}
                />
                {errors.author && <span style={styles.error}>{errors.author}</span>}
            </div>
            <button type="submit" style={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default PostForm;
