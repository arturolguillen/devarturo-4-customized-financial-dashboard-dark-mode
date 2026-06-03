import Dashboard from "@/components/Dashboard";
import InvestNowButton from "@/components/InvestNowButton";
import KpiGrid from "@/components/KpiGrid";
import MainWrapper from "@/components/MainWrapper";
import SearchBar from "@/components/SearchBar";
import SideNavbar from "@/components/SideNavbar";
import SideNavbarFooter from "@/components/SideNavbarFooter";
import SideNavbarLogo from "@/components/SideNavbarLogo";
import SideNarbarMenu from "@/components/SideNavbarMenu";
import SideNavbarSupportLink from "@/components/SideNavbarSupportLink";
import SideNavbarUser from "@/components/SideNavbarUser";
import TopAppbar from "@/components/TopAppBar";
import TopAppBarActions from "@/components/TopAppBarActions";
import TopAppBarLeftCol from "@/components/TopAppBarLeftCol";
import TopAppBarLogo from "@/components/TopAppBarLogo";
import TopAppBarMenu from "@/components/TopAppBarMenu";
import TopAppBarRightCol from "@/components/TopAppBarRightCol";
import TopAppBarUser from "@/components/TopAppBarUser";
import TotalBalance from "@/components/TotalBalance";

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
                    <TopAppBarLeftCol>
                        <TopAppBarLogo />
                        <SearchBar />
                        <TopAppBarMenu />
                    </TopAppBarLeftCol>
                    <TopAppBarRightCol>
                        <TopAppBarActions />
                        <TopAppBarUser />
                    </TopAppBarRightCol>
                </TopAppbar>
                <Dashboard>
                    <KpiGrid>
                        <TotalBalance />
                    </KpiGrid>
                </Dashboard>
            </MainWrapper>
        </>
    );
}
