import type { Metadata } from "next";
import SkillsContent from "./SkillsContent";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return <SkillsContent />;
}
