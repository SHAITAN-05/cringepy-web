import {
  AnalysisSection,
  CoachesSection,
  DownloadSection,
  FAQSection,
  FlirtSection,
  FriendSection,
  PremiumSection,
  VoiceSection,
} from "@/components/landing/LandingSections";
import { LandingHero } from "@/components/landing/LandingHero";

export default function HomePage() {
  return (
    <>
      <LandingHero />
      <CoachesSection />
      <FlirtSection />
      <FriendSection />
      <AnalysisSection />
      <VoiceSection />
      <PremiumSection />
      <FAQSection />
      <DownloadSection />
    </>
  );
}
