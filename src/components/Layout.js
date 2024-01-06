// components/Layout.js
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bansal Blog</title>
                <meta name="description" content="Your blog description goes here." />

            </Head>

            <nav className="nav-bar">
                <Link href="/">
                    Home
                </Link>
                <span> | </span>
                <Link href="/posts/create">
                    Create Post
                </Link>
            </nav>

            {children}

            <style jsx>{`
                .nav-bar {
                    background-color: #333;
                    padding: 1rem;
                    color: white;
                }

                .nav-bar a {
                    color: white;
                    margin-right: 1rem;
                    text-decoration: none;
                    font-weight: bold;
                }

                .nav-bar a:hover {
                    color: #0070f3;
                }
            `}</style>

            <style jsx global>{`
                /* Add global styles here */
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </div>
    );
};

export default Layout;
