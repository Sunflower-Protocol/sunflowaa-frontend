export interface UserProfile {
  username: string;
  email: string;
  walletAddress: string;
  bio: string;
  location: string;
  website: string;
  twitter: string;
  instagram: string;
  joinDate: string;
  avatar: string;
  stats: UserStats;
}

export interface UserStats {
  totalTracks: number;
  totalCollaborations: number;
  totalRoyalties: number;
  ipAssets: number;
  unclaimedRoyalties: number;
}

export interface ProfileEditData extends UserProfile {}

export interface ProfileState {
  isEditing: boolean;
  showSuccess: boolean;
  copiedWallet: boolean;
}

export interface ProfileActions {
  handleSave: () => void;
  handleCancel: () => void;
  copyWalletAddress: () => void;
  setIsEditing: (editing: boolean) => void;
  setShowSuccess: (show: boolean) => void;
  updateProfile: (field: keyof UserProfile, value: any) => void;
}