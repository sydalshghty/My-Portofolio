import blogsBG from "../assets/Blogs-bg.png";
import { NavLink } from "react-router-dom";
import blogsTitle from "../assets/blogsTitleDP.svg";
import lineBlogs from "../assets/Line-blogs 22.svg";
import "../css/blogs-departament.css";
import { motion } from "motion/react";
import WebDeveloper from "./webDeveloper";
import Footer from "./Footer";
function BlogsDepartament(){
    return(
    <>
        <div className="blogs-departament">
            <img className="img-bg" src={blogsBG} alt="blogs-bg" />
            <div className="container">
                <div className="blogs-section1">
                    <div 
                    className="blogs-content">
                        <motion.img 
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 0.6}}
                        src={blogsTitle} alt="blogs-title-img" />
                        <motion.img 
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 0.6}}
                        src={lineBlogs} alt="line-img" />
                        <motion.p
                        initial={{y: 100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 1}}
                        >My thoughts on technology and business, welcome to subscribe</motion.p>
                    </div>
                    <motion.div 
                    className="col-btn"
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1.2}}
                    >
                        <NavLink className={"link"} to={""}>Subscribe My Blogs</NavLink>
                    </motion.div>
                </div>
                <div className="all-Web-Developer">
                    <WebDeveloper/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}
export default BlogsDepartament;