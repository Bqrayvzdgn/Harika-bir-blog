import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <meta name="description" content="Buğra'nın Websitesi" />
      <meta name="author" content="Buğrahan Yavuzdoğan" />
      <meta name="language" content="NextJS-CSS" />
      <title>Buğra & Blog Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav className="navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="/">
              Anasayfa
            </a>
            <a className="nav-link" href="/hakkimda">
              Hakkımda
            </a>
            <a className="nav-link" href="/bilgi-ve-beceriler">
              Bilgi & Beceriler
            </a>
            <a
              target="_blank"
              className="nav-link"
              href="https://github.com/Bqrayvzdgn?tab=repositories"
            >
              Portfolyo
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div className="hero">
      <div className="hero-profile">
        <Image
          className="hero-profile-img"
          src="/bqr.jpg"
          width="300"
          height="300"
          alt="I'm"
        />
      </div>
      <h1 className="hero-title">Buğra Yavuzdoğan</h1>
      <div className="hero-social-links">
        <Link href="https://www.twitter.com/Bqrayvzdgn">
          <a target="_blank" className="social-link">
            Twitter
          </a>
        </Link>
        <Link href="https://www.instagram.com/Bqrayvzdgn">
          <a target="_blank" className="social-link">
            Instagram
          </a>
        </Link>
        <Link href="https://www.github.com/Bqrayvzdgn">
          <a target="_blank" className="social-link">
            Github
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/bu%C4%9Frahan-yavuzdo%C4%9Fan-515884216/">
          <a target="_blank" className="social-link">
            LinkedIn
          </a>
        </Link>
        <Link href="https://bqrayvzdgn.github.io/">
          <a target="_blank" className="social-link">
            Website
          </a>
        </Link>
      </div>
    </div>

    {posts.map((post) => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">{post.short_details}</div>
        <div className="blog-date">{post.date}</div>
        <div className="blog-author">
          Yazar :{" "}
          <a target="_blank" href={post.author_link}>
            {post.author}
          </a>
        </div>
      </div>
    ))}
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
