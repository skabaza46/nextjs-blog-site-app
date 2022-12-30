import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const { Fragment } = require("react")

const PostDetailPage = (props) => {

  return (
    
    <PostContent post={props.post}/>
  )
};

export function getStaticPaths(){

  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename)=> filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug)=>({params: {slug: slug}})),

    fallback: false // The data will be automatically loaded if set to true
  }
}


export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600 // Once every 10 minutes
  }

}

export default PostDetailPage;