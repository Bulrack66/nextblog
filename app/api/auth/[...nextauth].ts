import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHubProvider from "next-auth/providers/github";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const githubId = process.env.GITHUB_ID;
  const githubSecret = process.env.GITHUB_SECRET;
  if (!githubId || !githubSecret) {
    throw new Error("Missing github_id or gitHub_secret");
  }

  return await NextAuth(req, res, {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
      GitHubProvider({
        clientId: githubId,
        clientSecret: githubSecret,
      }),
    ],
  });
}
