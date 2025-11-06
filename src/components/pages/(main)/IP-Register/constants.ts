import { FormData, LicenseOption } from "./types";

export const DEFAULT_FORM_DATA: FormData = {
  title: "",
  description: "",
  genre: "",
  bpm: "",
  key: "",
  tags: [],
  coverImage: null,
  audioFile: null,
  licenseType: "open-remix",
  royaltyPercentage: 10,
  allowDerivatives: true,
  creatorName: "",
  creatorWallet: "",
  coCreators: [],
};

export const LICENSE_OPTIONS: LicenseOption[] = [
  {
    value: "open-remix",
    emoji: "🆓",
    title: "Open Remix",
    subtitle: "Free for everyone",
    color: "green",
  },
  {
    value: "commercial-remix",
    emoji: "💼",
    title: "Commercial Remix",
    subtitle: "Business use allowed",
    color: "blue",
  },
  {
    value: "private",
    emoji: "🔒",
    title: "Private / Restricted",
    subtitle: "Limited access",
    color: "orange",
  },
];

export const ROYALTY_RANGE = {
  MIN: 5,
  MAX: 20,
};