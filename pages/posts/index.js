import AllPosts from "../../components/posts/all-posts";

const { Fragment } = require("react")

const DUMMY_POSTS = [
  {
    title:'Getting Started With NextJS', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs'
  },
  {
    title:'Getting Started With NextJS2', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs2'
  },
  {
    title:'Getting Started With NextJS3', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs3'
  },
  {
    title:'Getting Started With NextJS4', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs4'
  },
  {
    title:'Getting Started With NextJS5', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs5'
  },
  {
    title:'Getting Started With NextJS6', 
    image:'getting-started-nextjs.png', 
    excerpt:'NextJs is the React Framework for production - it makes building React apps and sites a breeze and ships with built-in Server Side Rendering ', 
    date:'2022-02-10', 
    slug:'getting-started-with-nextjs6'
  }
];

const AllPostsPage = () => {

  return ( <AllPosts posts={DUMMY_POSTS}/>
  )
};


export default AllPostsPage;