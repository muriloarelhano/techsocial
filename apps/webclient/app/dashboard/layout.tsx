import { Header, Sidebar } from '../components';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      <header className="flex justify-between items-center py-6 px-8 w-full absolute">
        <Header />
      </header>
      <main className="flex h-screen pt-28 pb-4">
        <Sidebar />
        {children}
      </main>
    </section>
  );
}
