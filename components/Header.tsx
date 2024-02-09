import { GetServerSideProps } from "next";
import PageContainer from "./PageContainer";
import HeaderNavigation from "@/components/HeaderNavigation";
import ProfileButton from "./ProfileButton";
import ResponsiveMenu from "./ResponsiveMenu";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <header className="border-b p-4">
      <PageContainer>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <ResponsiveMenu />
            <h1 className="bg-gradient-to-br from-red-400 to-blue-600 bg-clip-text text-2xl font-bold text-transparent ">
              FrigoBlog
            </h1>
          </div>
          <HeaderNavigation />
          <div className="flex items-center justify-center">
            <DarkMode />
            <ProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Header;
