import { useRouter } from 'next/router';
import React, { useState } from 'react';

const JoinPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 회원가입 로직 & 회원가입 성공하면 회사 선택 페이지로
    router.push('/auth/set-company');
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-4xl font-semibold">Join</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-800">
            Email
          </label>

          <div className="mt-1">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-md border  px-4 py-2 border-gray-600 bg-gray-800 text-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40"
              value={email}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm text-gray-800">
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="mt-2 block w-full rounded-md border  px-4 py-2 border-gray-600 bg-gray-800 text-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-40"
              value={password}
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            Join
          </button>
        </div>
      </form>
    </main>
  );
};

export default JoinPage;
