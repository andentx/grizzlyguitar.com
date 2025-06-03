import Footer from "@/components/layout/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full grow flex-col items-center pt-12">
        <div className="mx-8 mb-20 max-w-2xl sm:mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
