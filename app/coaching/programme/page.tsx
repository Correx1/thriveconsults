import ProgrammeHero from './ProgrammeHero';
import ProgrammeCurriculum from './ProgrammeCurriculum';
import ProgrammeDeliverables from './ProgrammeDeliverables';
import ProgrammeDelivery from './ProgrammeDelivery';
import ProgrammeCTA from './ProgrammeCTA';

export const metadata = {
  title: 'Programme Details | Thrive 90 Coaching | Thrive Consults',
  description: 'The full 12-week curriculum, every deliverable, and how the sessions work for the Thrive 90 Business Growth Programme.',
};

export default function ProgrammePage() {
  return (
    <main>
      <ProgrammeHero />
      <ProgrammeCurriculum />
       <ProgrammeDelivery />
      <ProgrammeDeliverables />
     
      <ProgrammeCTA />
    </main>
  );
}
