import { motion, stagger } from "framer-motion";
import "./contact.scss";

const variants = {
    initial : {
        y:500,
        opacity:0,

    },
    animate : {
        y : 0,
        opacity:1,
        transition:{
            duration : 0.5,
            staggerChildren : 0.1,
        }
    }
}

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>alyahmedrbk@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>Islamabad Pakistan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+923705150554</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <form action="">
            <input type="text" placeholder="Name"  required/>
            <input type="text" placeholder="Email"  required/>
            <textarea name="" id="" rows={8} placeholder="Message"/>

            <button>Submit</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
