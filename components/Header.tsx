import { GetServerSideProps } from "next";
import PageContainer from "./PageContainer";
import HeaderNavigation from "@/components/HeaderNavigation";
import ProfileButton from "./ProfileButton";
import ResponsiveMenu from "./ResponsiveMenu";

const Header = () => {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <ResponsiveMenu />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600 ">
              FrigoBlog
            </h1>
          </div>
          <HeaderNavigation />
          <div className="flex items-center">
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
