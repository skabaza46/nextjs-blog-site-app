import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {

  return ( <AllPosts posts={props.posts}/>
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