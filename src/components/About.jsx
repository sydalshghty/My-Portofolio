import imgBackground from "../assets/About me.png";
import scrollImg from "../assets/Scroll.svg";
import "../css/about.css";
import imgTitle from "../assets/Title.svg";
import imgLine from "../assets/Line 22.svg";
import imgAbout from "../assets/Image.png";

function About(){
    const p1 = `<p>`;
    const p2 = `</p>`;

    return(
        <div className="about-departament">
            <div className="col-img">
                <img className="img-background" src={imgBackground} alt="About-me"/>
            </div>
            <div className="container">
                <div className="col-Title">
                    <img className="scroll-img" src={scrollImg} alt="img-title"/>
                    <div className="content-Title">
                        <div className="col">
                            <img src={imgTitle} alt="img-Title"/>
                            <img src={imgLine} alt="img-line"/>
                        </div>
                        <p>I had the pleasure of working with these awesome Projects</p>
                    </div>
                </div>
                <div className="content-Aboutme">
                    <div className="col-Aboutme">
                        <div className="heading">
                            <h1>About me</h1>
                        </div>
                        <div className="content-information">
                            <span className="span-p p-one">{p1}</span>
                            <h2>Hello!</h2>
                            <p>My name is Sinan and I specialize in web developement that utilizes <span>HTML</span>, <span>CSS</span>, <span>JS</span>, and <span>REACT</span> etc.</p>
                            <p>I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.</p>
                            <p>When I'm not coding, I am <span>writing bolgs</span>, reading, or picking up some new hands-on art project like <span>photography</span>.</p>
                            <p>I like to have my perspective and belief systems challenged so that I see the world through new eyes.</p>
                            <span className="span-p">{p2}</span>
                        </div>
                    </div>
                    <div className="col-image">
                        <img src={imgAbout} alt="About-me"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;