import ProfileAvatar from "./avatar-standard-4";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import { Stats } from "./Stats";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    // Added a subtle entrance animation for that premium feel when the page loads
    <section className="animate-in fade-in slide-in-from-bottom-4 w-full duration-700 ease-in-out">
      {/* Responsive top margin: slightly smaller on mobile, standard 20 on desktop */}
      <div className="mt-12 sm:mt-20">
        <ProfileAvatar />
      </div>

      <Intro />

      <GetInTouch />

      <SocialLinks />

      <Stats />

      <TechStack />
    </section>
  );
};

export default Hero;
