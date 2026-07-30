import type { Metadata } from "next";
import EducationContent from "./EducationContent";

export const metadata: Metadata = { title: "Education" };

export default function EducationPage() {
  return <EducationContent />;
}
