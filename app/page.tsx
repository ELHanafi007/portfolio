import DesktopHome from './_components/DesktopHome';
import MobileHome from './_components/MobileHome';

export default function Home() {
    return (
        <>
            <div className="md:hidden">
                <MobileHome />
            </div>
            <div className="hidden md:block">
                <DesktopHome />
            </div>
        </>
    );
}
