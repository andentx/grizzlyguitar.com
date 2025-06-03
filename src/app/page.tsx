import AppointmentSection from "@/components/contact/appointment-section";
import GuitarPhotoSection from "@/components/landing/guitar-photo-section";
import LandingFeaturedCategories from "@/components/landing/landing-featured-categories";
import LandingHero from "@/components/landing/landing-hero";
import WhatWeDoSection from "@/components/landing/what-we-do-section";
import Footer from "@/components/layout/footer";

export const metadata = {
  description:
    "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  openGraph: {
    type: "website",
    description:
      "Your destination for instruments, parts and service guided by one principle - Craftsmanship.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="flex w-full grow flex-col items-center">
      <LandingHero />
      <WhatWeDoSection />
      <LandingFeaturedCategories />
      <AppointmentSection />
      <GuitarPhotoSection />
      <Footer />
    </div>
  );
}
