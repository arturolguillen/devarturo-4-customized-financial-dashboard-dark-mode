import InvestNowButton from "@/components/InvestNowButton";
import MainWrapper from "@/components/MainWrapper";
import SearchBar from "@/components/SearchBar";
import SideNavbar from "@/components/SideNavbar";
import SideNavbarFooter from "@/components/SideNavbarFooter";
import SideNavbarLogo from "@/components/SideNavbarLogo";
import SideNarbarMenu from "@/components/SideNavbarMenu";
import SideNavbarSupportLink from "@/components/SideNavbarSupportLink";
import SideNavbarUser from "@/components/SideNavbarUser";
import TopAppbar from "@/components/TopAppBar";
import TopAppBarLogo from "@/components/TopAppBarLogo";

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
            <MainWrapper>
                <TopAppbar>
                    <TopAppBarLogo />
                    <SearchBar />
                </TopAppbar>
            </MainWrapper>
        </>
    );
}
