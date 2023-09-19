import { signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <div>
        <p>로그인 이메일: {session.user?.email}</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      hello
    </main>
  );
}
