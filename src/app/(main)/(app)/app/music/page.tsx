import MusicIndex from "@/components/pages/(main)/Music/MusicIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Music - Sunflowaa",
};

export default function MusicPage() {
  return <MusicIndex />;
}
