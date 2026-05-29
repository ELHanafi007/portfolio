import BannerMobile from './mobile/BannerMobile';
import AboutMeMobile from './mobile/AboutMeMobile';
import SkillsMobile from './mobile/SkillsMobile';
import ExperiencesMobile from './mobile/ExperiencesMobile';
import ProjectListMobile from './mobile/ProjectListMobile';

export default function MobileHome() {
    return (
        <div className="mobile-home">
            <BannerMobile />
            <AboutMeMobile />
            <SkillsMobile />
            <ExperiencesMobile />
            <ProjectListMobile />
        </div>
    );
}
