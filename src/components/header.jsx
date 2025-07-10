import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink,Link } from "react-router-dom";
import "../css/header.css";
import { useRef, useState } from "react";

function Header(){
    const logo = `<S/>`;
    const [appear,setAppear] = useState(false);
    const [xMark,setxMark] = useState(true);
    const inputRef = useRef("");
    if(inputRef.current){
        inputRef.current.focus();
    }

    const handleAppear = () => {
        setAppear(!appear);
    }
    const handleMark = () => {
        setxMark(!xMark);
    }

    return(
        <>
        <div className="header-departament">
            <div className="container">
                <div className="col-logo">
                    <h2>{logo}</h2>
                    <h3>saeedMohamed</h3>
                </div>
                <div className="content-Social">
                    <ul>
                        <li>
                            <Link to={"/Home"}>Home</Link>
                        </li>
                        <li>
                            <Link className="blogsLink" to={"/Blogs"}>Blogs</Link>
                        </li>
                    </ul>
                    <div className="col-search">
                        <input type="text"/>
                        {xMark ? 
                            <FontAwesomeIcon className="icon" onClick={() => {
                                handleAppear();
                                handleMark();
                            }} icon={faSearch}/>
                            :
                            <FontAwesomeIcon className="icon" onClick={() => {
                                handleAppear();
                                handleMark();
                            }} icon={faXmark}/>
                        }
                    </div>
                    <div className="col-social">
                        <div>
                            <NavLink target="_blank"  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>
                            <FontAwesomeIcon  className="icon" icon={faLinkedin}/>
                            </NavLink>
                            <NavLink className={"link"} target="_blank"  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>linkedin</NavLink>
                        </div>
                        <div>
                            <NavLink target="_blank" to={"https://wa.me/201271382350"}>
                            <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                            </NavLink>
                            <NavLink className={"link"} target="_blank" to={"https://wa.me/201271382350"}>whatsapp</NavLink>
                        </div>
                        <div>
                            <NavLink target="_blank" to={"https://github.com/sydalshghty"}>
                            <FontAwesomeIcon className="icon" icon={faGithub}/>
                            </NavLink>
                            <NavLink className={"link"} target="_blank" to={"https://github.com/sydalshghty"}>Github</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`input-search ${appear ? "appearSearch" : ""}`}>
            <input ref={inputRef}  type="search"/>
        </div>
        </>
    )
}
export default Header;