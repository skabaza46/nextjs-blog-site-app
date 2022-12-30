import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const { Fragment } = require("react")


const HomePage = (props) => {

  return (
    <Fragment>
      <Head>
        <title>Simen's Blog</title>
        <meta 
          name="desription" 
          content="I post about programming and web development." 
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
};

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}


export default HomePage;