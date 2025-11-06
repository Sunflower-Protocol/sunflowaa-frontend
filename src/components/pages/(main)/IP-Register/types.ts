export interface FormData {
  title: string;
  description: string;
  genre: string;
  bpm: string;
  key: string;
  tags: string[];
  coverImage: File | null;
  audioFile: File | null;
  licenseType: string;
  royaltyPercentage: number;
  allowDerivatives: boolean;
  creatorName: string;
  creatorWallet: string;
  coCreators: Array<{ name: string; wallet: string; percentage: number }>;
}

export interface LicenseOption {
  value: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
}

export interface RegistrationState {
  isRegistering: boolean;
  showSuccess: boolean;
}

export interface FileUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  accept: string;
  placeholder: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface MusicDetailsProps {
  formData: FormData;
  onUpdate: (field: keyof FormData, value: unknown) => void;
}

export interface LicenseSetupProps {
  formData: FormData;
  onUpdate: (field: keyof FormData, value: unknown) => void;
}

export interface OwnershipSectionProps {
  formData: FormData;
  onUpdate: (field: keyof FormData, value: unknown) => void;
}

export interface SuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
}