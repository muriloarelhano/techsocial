import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          TechSocial
        </a>
      </h1>
      <div className="flex gap-8">
        <Link href="/dashboard">
          <button className="btn btn-primary">Login</button>
        </Link>
        <button className="btn btn-secondary">SignIn</button>
      </div>
    </main>
  );
}
