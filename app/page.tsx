import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import StorySection from "@/components/StorySection";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import FeaturedMenu from "@/components/FeaturedMenu";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import PressBar from "@/components/PressBar";
import WeeklyTeaser from "@/components/WeeklyTeaser";
import HoursLocation from "@/components/HoursLocation";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StorySection />
      <DepartmentsGrid />
      <FeaturedMenu />
      <StatsCounter />
      <TestimonialsMarquee />
      <PressBar />
      <WeeklyTeaser />
      <HoursLocation />
    </>
  );
}
