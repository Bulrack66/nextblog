/** @type {import('next').NextConfig} */

// Exportez la configuration du module Next.js
export default {
  // Configuration des redirections
  async redirects() {
    return [
      {
        source: "/api/auth/[...nextauth]",
        destination: "/api/auth",
        permanent: true,
      },
    ];
  },
};
