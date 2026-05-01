import ServiceHero from './ServiceHero';
import ServiceList from './ServiceList';
import ServiceDiagnostic from './ServiceDiagnostic';
import ServiceCTA from './ServiceCTA';
import DiagnosticCTA from '../Home/DiagnosticCTA';

export const metadata = {
  title: 'Our Services | Thrive Consult',
  description: 'Six Ways We Help Your Business Grow. Discover the core services offered by Thrive Consult.',
};

export default function Services() {
  return (
    <main>
      <ServiceHero />
      <ServiceList />
    <DiagnosticCTA/>
      <ServiceCTA />
    </main>
  );
}
