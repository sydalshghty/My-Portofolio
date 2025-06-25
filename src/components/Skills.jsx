import backgroundSkills from "../assets/Skills@2x.png";
import imgScroll from "../assets/Scroll.svg";
import imgTitle from "../assets/Title.svg";
import imgLine22 from "../assets/Line 22.svg";
import imgTag from "../assets/_.svg";
import imgWeb from "../assets/Icon.svg";
import imgApp from "../assets/Icon-App.svg";
import imgHtml from "../assets/Icon-Html.svg";
import HtmlText from "../assets/Text-Html.svg";
import imgCSS from "../assets/Icon-Css.svg";
import CSSText from "../assets/Text-CSS.svg";
import imgJs from "../assets/Icon-Js.svg";
import JsText from "../assets/Text-JS.svg";
import imgReact from "../assets/Icon-React.svg";
import ReactText from "../assets/Text-React.svg";
import "../css/skills.css";

function SkillsDepartament(){
    return(
        <div className="skills-departament">
            <img className="skills-background" src={backgroundSkills} alt="img-skills"/>
            <div className="container">
                <div className="col-skills">
                    <div className="skills-Title">
                        <img className="img-scroll" src={imgScroll} alt="img-Scroll"/>
                        <div className="col-title">
                            <img className="img-title" src={imgTitle} alt="img-Title"/>
                            <img className="img-line" src={imgLine22} alt="img-Line22"/>
                            <p>I am striving to never stop learning and improving</p>
                        </div>
                    </div>
                    <img className="img-tag" src={imgTag} alt="img-skills"/>
                </div>
                <div className="content-Development">
                    <div className="web-development">
                        <img src={imgWeb} alt="web-development"/>
                        <h3>web developement</h3>
                        <p>HTML·CSS·JS·REACT</p>
                    </div>
                    <div className="app-development">
                        <img src={imgApp} alt="app-development"/>
                        <h3>App developement</h3>
                        <p>React Native</p>
                    </div>
                </div>
                <div className="content-skills">
                    <div className="Html-Css">
                        <div className="col-img">
                            <img src={imgHtml} alt="Html-Language"/>
                            <img src={HtmlText} alt="Html-Text"/>
                        </div>
                        <div className="col-img">
                            <img src={imgCSS} alt="CSS-Language"/>
                            <img src={CSSText} alt="CSS-Text"/>
                        </div>
                    </div>
                    <div className="JS-React">
                        <div className="col-img">
                            <img src={imgJs} alt="JS-Language"/>
                            <img src={JsText} alt="JS-Text"/>
                        </div>
                        <div className="col-img">
                            <img src={imgReact} alt="React-Language"/>
                            <img src={ReactText} alt="React-Text"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SkillsDepartament;