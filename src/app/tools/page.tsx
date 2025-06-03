import Footer from "@/components/layout/footer";
import ToolsLinksSection from "@/components/tools/tools-links-section";

export const metadata = {
  description:
    "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  openGraph: {
    type: "website",
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  },
  alternates: {
    canonical: "https://www.grizzlyguitar.com/tools",
  },
};

export default function Tools() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl grow flex-col items-center py-16">
        <ToolsLinksSection />
      </div>
      <Footer />
    </>
  );
}
