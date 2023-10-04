import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { signOut, useSession } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <></>;
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <p>로그인 이메일: {session.user?.email}</p>
      <button onClick={() => signOut()}>로그아웃</button>
    </main>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
      },
    };
  }

  return { props: {} };
};
