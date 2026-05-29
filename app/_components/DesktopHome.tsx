import AboutMe from './AboutMe';
import Banner from './Banner';
import Experiences from './Experiences';
import Skills from './Skills';
import ProjectList from './ProjectList';

export default function DesktopHome() {
    return (
        <div className="desktop-home">
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectList />
        </div>
    );
}
