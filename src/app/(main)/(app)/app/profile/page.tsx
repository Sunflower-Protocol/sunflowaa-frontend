import ProfileIndex from "@/components/pages/(main)/Profile/ProfileIndex";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile - Sunflowaa",
};

export default function ProfilePage() {
  return <ProfileIndex />;
}