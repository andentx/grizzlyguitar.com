import Footer from "@/components/layout/footer";
import ServicesFaqSection from "@/components/services/services-faq-section";
import ServicesSection from "@/components/services/services-section";

export const metadata = {
  title: "Services",
  description:
    "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  openGraph: {
    type: "website",
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  },
  alternates: {
    canonical: "https://www.grizzlyguitar.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="flex w-full grow flex-col items-center pt-24 sm:pt-32">
        <div className="w-full">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-averia-regular)] text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services
            </h2>
          </div>
        </div>
        <ServicesSection />
        <ServicesFaqSection />
      </div>
      <Footer />
    </>
  );
}
