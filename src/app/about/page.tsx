import AboutFaqSection from "@/components/about/about-faq-section";
import AboutMeSection from "@/components/about/about-me-section";
import AboutWhatIOfferSection from "@/components/about/about-what-i-offer-section";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "About",
  description:
    "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  openGraph: {
    type: "website",
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  },
  alternates: {
    canonical: "https://www.grizzlyguitar.com/about",
  },
};

export default function About() {
  return (
    <>
      <div className="flex w-full grow flex-col items-center">
        <AboutMeSection />
        <AboutFaqSection />
        <AboutWhatIOfferSection />
      </div>
      <Footer />
    </>
  );
}
