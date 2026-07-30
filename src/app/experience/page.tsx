import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return <ExperienceContent />;
}
