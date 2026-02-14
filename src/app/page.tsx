import Navigation from "@/components/Navigation";
import HeroAenexz from "@/components/HeroAenexz";
import KPIStats from "@/components/sections/KPIStats";
import Programs from "@/components/sections/Programs";
import JobGuarantee from "@/components/sections/JobGuarantee";
import Categories from "@/components/sections/Categories";
import Mentors from "@/components/sections/Mentors";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroAenexz />
        <KPIStats />
        <Programs />
        <JobGuarantee />
        <Categories />
        <Mentors />
        <Partners />
      </main>
    </>
  );
}
