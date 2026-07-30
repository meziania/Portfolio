import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return <AboutContent />;
}
