import Head from 'next/head';
import { Fragment } from 'react';

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {

  return ( 
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts." />
      </Head>

      <AllPosts posts={props.posts}/>
    </Fragment>
  )
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  // console.log(allPosts)

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage;