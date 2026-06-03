import SideNavbar from "@/components/SideNavbar";
import SideNavbarLogo from "@/components/SideNavbarLogo";
import SideNarbarMenu from "@/components/SideNavbarMenu";

export default function Home() {
    return (
        <>
            <SideNavbar>
                <SideNavbarLogo />
                <SideNarbarMenu />
            </SideNavbar>
        </>
    );
}
