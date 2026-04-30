import Hero from "./Hero";
import Challenges from "./Challenges";
import SystemSolution from "./SystemSolution";
import Services from "./Services";
import Stats from "./Stats";
import WhyChooseUs from "./WhyChooseUs";
import DiagnosticCTA from "./DiagnosticCTA";
import Testimonials from "./Testimonials";
import FinalCTA from "./FinalCTA";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <Challenges />
      <SystemSolution />
      <Services />
       <DiagnosticCTA />
      <WhyChooseUs />
     <Stats />
     <Testimonials />
     <FinalCTA />
    </main>
  );
}
