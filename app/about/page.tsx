import AboutHero from '../about/AboutHero';
import OurStory from './OurStory';
import AboutTimeline from './AboutTimeline';
import CoreValues from './CoreValues';
import Stats from '../Home/Stats';
import AboutFrameworks from './AboutFrameworks';
import AboutTeam from './AboutTeam';
import AboutClients from './AboutClients';
import AboutCTA from './AboutCTA';

export const metadata = {
  title: 'About Us | Thrive Consult',
  description: 'Learn about Thrive Consults — who we are, why we exist, and the team behind 13 years of building Nigerian businesses.',
};

export default function About() {
  return (
    <main>
      <AboutHero />
          <OurStory />
           <Stats />
    
          <AboutTimeline />
            <CoreValues />
      <AboutFrameworks />
      <AboutTeam />
      <AboutClients />
     
      <AboutCTA />
    </main>
  );
}
