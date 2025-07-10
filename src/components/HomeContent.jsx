import imgGrid from "../assets/icon-grid.svg";
import imgUser from "../assets/icon-user.svg";
import imgCode from "../assets/icon-code.svg";
import imgMonitor from "../assets/icon-monitor.svg";
import imgEdit from "../assets/icon-edit.svg";
import imgEmail from "../assets/icon-mail.svg";
import imgdeveloper from "../assets/developer.svg";
import imgemail from "../assets/icon-mail1.svg";
import iconMap from "../assets/icon-map-pin.svg";
import imgWork from "../assets/icon-briefcase.svg";
import imgLink from "../assets/icon-link.svg";
import imgHtml from "../assets/HTML.svg";
import imgCss from "../assets/CSS.svg";
import imgJs from "../assets/JS.svg";
import imgReact from "../assets/REACT.svg";
import imgDownload from "../assets/icon-download.svg";
import imgProfile from "../assets/Profile photo.svg";
import "../css/homeContent.css";
import { Link } from "react-router-dom";
import buttonEmail from "../assets/Button.svg";

function HomeContent(){
    const h1 = `<h1>`;
    const h2 = `</h1>`;
    const p1 = `<p>`;
    const p2 = `</p>`;

    return(
        <div className="homeContent-Departament">
            <div className="container">
                <div className="developer-col">
                    <div 
                    className="account-col">
                        <div className="col-one">
                            <img src={imgGrid} alt="icon-Grid"/>
                        </div>
                        <div>
                            <img src={imgUser} alt="icon-User"/>
                        </div>
                        <div>
                            <img src={imgCode} alt="icon-Code"/>
                        </div>
                        <div>
                            <img src={imgMonitor} alt="icon-Monitor"/>
                        </div>
                        <div>
                            <img src={imgEdit} alt="icon-Edit"/>
                        </div>
                        <div>
                            <img src={imgEmail} alt="icon-Email"/>
                        </div>
                    </div>
                    <div 
                    className="heading-developer">
                        <img src={imgdeveloper}/>
                    </div>
                </div>
                <div 
                className="content-col">
                    <div 
                    className="content-information">
                        <div className="col-person">
                            <img src={imgProfile} alt="developer"/>
                            <h2>saeed</h2>
                            <h4>Front-End Developer</h4>
                        </div>
                        <div className="content-social">
                            <div>
                                <img src={imgemail} alt="img-Email"/>
                                <Link target="_blank" to={"mailto:sydalshghty15@gmail.com"}>sydalshghty15@gmail.com
                                </Link>
                            </div>
                            <div>
                                <img src={iconMap} alt="img-home"/>
                                <p>Egypt</p>
                            </div>
                            <div>
                                <img src={imgWork} alt="img-work"/>
                                <p>Full-time / Freelancer</p>
                            </div>
                            <div>
                                <img src={imgLink} alt="img-link"/>
                                <Link to={"www.saeedmohamed.com"}>www.saeedmohamed.com</Link>
                            </div>
                        </div>
                        <div className="content-skills">
                            <img src={imgHtml} alt="img-Html"/>
                            <img src={imgCss} alt="img-Css"/>
                            <img src={imgJs} alt="img-Js"/>
                            <img src={imgReact} alt="img-React"/>
                        </div>
                        <div className="download-CV">
                            <Link target="_blank" to={"https://drive.google.com/file/d/19MBjhA1nGhRmpwOmfpaa9fC-Zv5mXfQB/view?usp=sharing"}>Download CV</Link>
                            <img src={imgDownload} alt="download"/>
                        </div>
                    </div>
                    <div className="col-Text-Programming">
                        <div className="content-text">
                            <div className="col-heading">
                                <span className="span-h1">{h1}</span>
                                <h1>Hey</h1>
                                <h1>I’m <span className="span-name">saeed</span>,</h1>
                                <div>
                                    <h1>Front-End Developer</h1>
                                    <span className="span-h1">{h2}</span>
                                </div>
                            </div>
                            <div className="col-paragraph">
                                <span>{p1}</span>
                                <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                                <span>{p2}</span>
                            </div>
                            <div className="col-email">
                                <Link className="link-email" target="_blank" to={"mailto:saeed10mohamed01271@gmail.com"}>let’s talk</Link>
                                <img src={buttonEmail} alt="img-Email"/>
                            </div>
                        </div>
                        <div className="content-programming">
                            <div className="col-div">
                                <span>4</span>
                                <p>Programming
                                Language</p>
                            </div>
                            <div className="col-div">
                                <span>6</span>
                                <p>Development
                                Tools</p>
                            </div>
                            <div className="col-div">
                                <span>1</span>
                                <p>Years of
                                Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeContent;