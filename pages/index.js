import Footer from "../components/Footer";
import SectionFeatures from "../components/SectionFeatures";
import SectionHero from "../components/SectionHero";
import SectionInterface from "../components/SectionInterface";
import SectionWhy from "../components/SectionWhy";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SectionHero />
      <SectionFeatures />
      <SectionInterface />
      <SectionWhy />
      <Footer />
    </div>
  );
}
