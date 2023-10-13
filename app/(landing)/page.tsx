import { LandingHero } from '@/components/landing-hero';
import { LandingNavbar } from '@/components/landing-navbar';

const LandingPage = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      {/* TODO */}
      {/* <LandingContent /> */}
    </div>
  );
};

export default LandingPage;
