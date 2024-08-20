import { useRef } from "react";
import "./protfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title : "React Commerce",
        img : "https://images.pexels.com/photos/379964/pexels-photo-379964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lroem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates repellat sed consectetur, dolorum officia quibusdam dignissimos placeat dolore commodi repudiandae itaque quae, eos error architecto ab esse aperiam. Laborum?" 
    },
    {
        id:2,
        title : "Next Blog",
        img : "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lroem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates repellat sed consectetur, dolorum officia quibusdam dignissimos placeat dolore commodi repudiandae itaque quae, eos error architecto ab esse aperiam. Laborum?" 
    },
    {
        id:3,
        title : "Vanilla Js App",
        img : "https://images.pexels.com/photos/13409672/pexels-photo-13409672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lroem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates repellat sed consectetur, dolorum officia quibusdam dignissimos placeat dolore commodi repudiandae itaque quae, eos error architecto ab esse aperiam. Laborum?" 
    },
    {
        id:4,
        title : "Music App",
        img : "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lroem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates repellat sed consectetur, dolorum officia quibusdam dignissimos placeat dolore commodi repudiandae itaque quae, eos error architecto ab esse aperiam. Laborum?" 
    },
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress,[0, 1], ["0%", "-300%"])
    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img className="image" src={item.img} alt="" />  
                    </div>
                    <motion.div className="textContainer"  style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Protofolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["end end", "start start"]
    });


    const scaleX = useSpring(scrollYProgress, {
        stiffness : 100,
        damping : 30,
    })

  return (
    <div className="protfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) =>{
            return(
                <Single item={item} key={item.id}/>
            )
        })}
        
    </div>
  )
}

export default Protofolio
