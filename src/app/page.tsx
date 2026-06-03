import InvestNowButton from "@/components/InvestNowButton";
import SideNavbar from "@/components/SideNavbar";
import SideNavbarFooter from "@/components/SideNavbarFooter";
import SideNavbarLogo from "@/components/SideNavbarLogo";
import SideNarbarMenu from "@/components/SideNavbarMenu";
import SideNavbarSupportLink from "@/components/SideNavbarSupportLink";
import SideNavbarUser from "@/components/SideNavbarUser";

export default function Home() {
    return (
        <>
            <SideNavbar>
                <SideNavbarLogo />
                <SideNarbarMenu />
                <SideNavbarFooter>
                    <SideNavbarUser />
                    <InvestNowButton />
                    <SideNavbarSupportLink />
                </SideNavbarFooter>
            </SideNavbar>
        </>
    );
}
