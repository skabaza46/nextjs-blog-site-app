import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const { Fragment } = require("react")

const HomePage = () => {

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  )
};


export default HomePage;