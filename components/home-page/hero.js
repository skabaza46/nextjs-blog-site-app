
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {

    return (
        <section className={classes.hero}>

            <div className={classes.image}>
                <Image 
                    src="/images/site/photo-of-anmial.jpeg" 
                    alt="An image showing Simen" 
                    width={300} 
                    height={300}/>
            </div>

            <h1> Hi, I'm Simen</h1>

            <p>I blog about web development - escpecially frontend frameworks 
                like Angular or React and back-end technologies like Django REST, 
                ExpressJS with Node, PHP Lumen.
            </p>
        </section>
    )
}

export default Hero;