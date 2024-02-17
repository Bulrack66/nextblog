"use client";
import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import NextAuthProvider from "../../providers/NextAuth";

function LoginPage() {
  const { data: session } = useSession();
  return (
    <NextAuthProvider>
      <PageContainer>
        <div className="p-10">
          <PageTitle title="Se connecter ou s'identifier" />
          <div className="m-auto flex max-w-md flex-col justify-center gap-4 p-10">
            {!session ? (
              <>
                <Button
                  onClick={async () => {
                    await signIn("github"); // Use the provider name for GitHub
                  }}
                >
                  <Github className="mr-3" />
                  S'identifier avec GitHub
                </Button>
                <Button disabled>
                  <Mail className="mr-3" />
                  S'identifier avec Gmail (coming soon)
                </Button>
              </>
            ) : (
              <Button onClick={() => signOut()}>Déconnexion</Button>
            )}
          </div>
        </div>
      </PageContainer>
    </NextAuthProvider>
  );
}

export default LoginPage;
