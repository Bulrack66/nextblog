"use client";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

function LoginPage() {
  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Se connecter ou s'identifier" />
        <div className="m-auto flex max-w-md flex-col justify-center gap-4 p-10">
          <Button
            onClick={async () => {
              await signIn();
            }}
          >
            <Github className="mr-3" />
            S'identifier avec GitHub
          </Button>
          <Button>
            <Mail className="mr-3" />
            S'identifier avec Gmail
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}

export default LoginPage;
