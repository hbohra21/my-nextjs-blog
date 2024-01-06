import React from 'react';
import { useForm } from 'react-hook-form';

const PostForm = ({ onSubmit, resetForm, isSubmitting }) => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit((formData) => {
            onSubmit(formData);
            resetForm();
        })} style={formStyle}>
            <div style={inputContainerStyle}>
                <label style={labelStyle}>Title:</label>
                <input {...register('title', { required: 'Title is required' })} style={inputStyle} />
                {errors.title && <span style={errorStyle}>{errors.title.message}</span>}
            </div>
            <div style={inputContainerStyle}>
                <label style={labelStyle}>Content:</label>
                <textarea {...register('content', { required: 'Content is required' })} style={inputStyle} />
                {errors.content && <span style={errorStyle}>{errors.content.message}</span>}
            </div>
            <div style={inputContainerStyle}>
                <label style={labelStyle}>Author Name:</label>
                <input {...register('author', { required: 'Author Name is required' })} style={inputStyle} />
                {errors.author && <span style={errorStyle}>{errors.author.message}</span>}
            </div>
            <button type="submit" style={submitButtonStyle} disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</button>
        </form>
    );
};

// Styles
const formStyle = {
    maxWidth: '400px',
    margin: '0 auto',
};

const inputContainerStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#333',
    fontSize: '14px',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
};

const errorStyle = {
    color: 'red',
    fontSize: '12px',
};

const submitButtonStyle = {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};
export default PostForm;
