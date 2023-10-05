import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: '이메일',
          type: 'email',
        },
        password: {
          label: '비밀번호',
          type: 'password',
        },
      },

      async authorize(credentials, req) {
        // 추후 db 유효성 검사 로직 추가
        const sampleUser = { id: 14, name: 'jsub', email: credentials?.email };
        if (sampleUser) {
          return sampleUser as any;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/auth/login',
  },
};

export default NextAuth(authOptions);
