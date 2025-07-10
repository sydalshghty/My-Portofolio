import HomeContent from "./HomeContent";
import About from "./About";
import SkillsDepartament from "./Skills";
import WorksDepartament from "./Works";
import BlogsHome from "./blogs-home";
import ContactDepartament from "./contact";
function HomePage(){
    return(
        <>
            <HomeContent/>
            <About/>
            <SkillsDepartament/>
            <WorksDepartament/>
            <BlogsHome/>
            <ContactDepartament/>
        </>
    )
}
export default HomePage;