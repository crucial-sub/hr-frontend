import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === 'loading') return <></>;
  else if (status === 'unauthenticated') {
    router.push('/api/auth/signin');
  } else if (status === 'authenticated') {
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <p>로그인 이메일: {session.user?.email}</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </main>
    );
  }
}
