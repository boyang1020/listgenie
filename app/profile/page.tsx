import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold">Welcome, {session.user?.name || session.user?.email}!</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          This is your profile page. Here you will be able to generate Amazon listings with AI and manage your account.
        </p>
        <div className="mt-8">
          <a href="/" className="text-primary hover:underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
}
