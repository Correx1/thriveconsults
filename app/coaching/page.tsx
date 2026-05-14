import CoachingHero from './CoachingHero';
import CoachingStats from './CoachingStats';
import CoachingWhoIsItFor from './CoachingWhoIsItFor';
import CoachingProblem from './CoachingProblem';
import CoachingPricing from './CoachingPricing';
import CoachingEntryEvent from './CoachingEntryEvent';
import CoachingFAQ from './CoachingFAQ';
import CoachingCTA from './CoachingCTA';

export const metadata = {
  title: 'Thrive 90 Coaching Programme | Thrive Consults',
  description: 'A 12-week coaching programme for Nigerian business owners who are ready to stop the bleed, build real structure, and grow on purpose.',
};

export default function CoachingPage() {
  return (
    <main>
      <CoachingHero />
 
      <CoachingWhoIsItFor />
      <CoachingProblem />
      <CoachingPricing />
      <CoachingEntryEvent />
           <CoachingStats />
     
      <CoachingFAQ />
      <CoachingCTA />
    </main>
  );
}
