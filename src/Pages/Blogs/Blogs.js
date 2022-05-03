import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <section className='container pb-5'>
            <div className='blogs-container'>
                <article className='article'>
                    <h3 className='blog-title mb-5'>Difference between Javascript and NodeJS</h3>
                    <p className='mb-5'><b>NodeJS</b> is a cross-platform, open-source Javascript runtime environment that enables server-side javascript execution.
                        Javascript code can now execute outside of the browser thanks to Nodejs.
                        Nodejs is a programming language that comes with a large number of modules and is primarily used in web development. </p>
                    <p>On the other hand, A scripting language is <b>Javascript</b> .
                        JS is the most common abbreviation.
                        Javascript can be thought of as an upgraded version of the ECMA script.
                        Javascript is a high-level programming language that is built on prototype inheritance and employs the Oops concept. </p>
                </article>
                <article className='article'>
                    <h3 className='blog-title mb-4'>Purpose of JWT</h3>
                    <p><b>JWT</b> (JSON Web Token) is an open standard that allows two parties, a client and a server, to share security information.
                        JWTs ensure that the claims can't be changed after they've been distributed.</p>
                    <h3 className='blog-title my-4'>How JWT Works</h3>
                    <p>A <b>JWT</b> is a three-part string separated by dots (.). Two JSON strings are found after decoding:
                        <ol>
                            <li>The payload and the header.</li>
                            <li>The signature</li>
                        </ol></p>
                    <p>The claims are contained in the payload.
                        The server uses this to verify who issued the token, how long it's valid.</p>
                    <p>The signature verifies that the token hasn't been tampered.
                        The receiving party checks that the header and payload match the signature when the token is utilized.
                    </p>
                </article>
                <article className='article'>
                    <h3 className='blog-title mb-4'>Differences between SQL and NoSQL databases</h3>
                    <p className='mb-5'><b>SQL</b> is a RELATIONAL DATABASE MANAGEMENT SYSTEM <b>(RDBMS).</b> These databases have fixed or static or predefined schema. These databases aren't designed to store hierarchical data. These databases are great for storing hierarchical data. Complex queries are best served by these databases. It is Vertically Scalable </p>
                    <p><b>NoSQL</b> is a <b>Non-relational</b> or distributed database system. They have dynamic schema. These databases are great for storing hierarchical data. These databases are not very good for sophisticated queries. It is Horizontally scalable</p>
                </article>
            </div>
        </section>
    );
};

export default Blogs;