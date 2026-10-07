import Header from "@/features/home/components/header";
import Footer from "@/features/home/components/Footer";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
