import IndustriesHero from './IndustriesHero';
import IndustriesGrid from './IndustriesGrid';
import IndustriesOpenCTA from './IndustriesOpenCTA';

export const metadata = {
  title: 'Industries | Thrive Consult',
  description: 'We have worked inside Nigerian businesses across trading, real estate, manufacturing, and retail. Here is where we have built the systems.'
};

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesGrid />
      <IndustriesOpenCTA />
    </main>
  );
}

