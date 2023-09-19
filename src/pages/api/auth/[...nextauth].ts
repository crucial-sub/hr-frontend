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
          placeholder: '이메일을 입력하세요.',
        },
        password: {
          label: '비밀번호',
          type: 'password',
          placeholder: '비밀번호를 입력하세요',
        },
      },

      async authorize(credentials, req) {
        // 추후 db 유효성 검사 로직 추가
        const user = { id: 1, name: 'jsub', email: credentials?.email };

        if (user) {
          return user as any;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
