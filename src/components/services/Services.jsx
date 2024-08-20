import { useRef } from "react";
import "./services.scss";
import {  motion, useInView} from "framer-motion";

const variants = {
    initial :{
        x:-500,
        y:100,
        opacity : 0
    }, 
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref,{margin: "-100px"});

  return (
    <motion.div className="services"
      variants={variants}
      initial="initial" 
      whileInView="animate"
        ref={ref}
        animate={isInView && "animate"}
    > 
        <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on helping your brand grow <br />
                And move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{ color:"orange" }}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{ color:"orange" }}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit ipsam, dicta assumenda sequi consectetur similique, voluptas error incidunt ratione magnam amet id itaque delectus saepe. Dolorem dolorum eligendi corrupti?</p>
                <button>GO!</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit ipsam, dicta assumenda sequi consectetur similique, voluptas error incidunt ratione magnam amet id itaque delectus saepe. Dolorem dolorum eligendi corrupti?</p>
                <button>GO!</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit ipsam, dicta assumenda sequi consectetur similique, voluptas error incidunt ratione magnam amet id itaque delectus saepe. Dolorem dolorum eligendi corrupti?</p>
                <button>GO!</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit ipsam, dicta assumenda sequi consectetur similique, voluptas error incidunt ratione magnam amet id itaque delectus saepe. Dolorem dolorum eligendi corrupti?</p>
                <button>GO!</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services
