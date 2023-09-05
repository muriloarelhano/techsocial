import { Sidebar } from '../components';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <header className="flex justify-between items-center py-6 px-8">
        <h1 className="text-2xl">Tech Social</h1>
      </header>
      <main className="flex h-screen">
        <Sidebar />
        {children}
      </main>
    </section>
  );
}
