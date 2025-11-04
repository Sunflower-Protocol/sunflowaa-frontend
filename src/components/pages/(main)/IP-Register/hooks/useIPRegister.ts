"use client";

import { useState } from "react";
import { FormData, RegistrationState } from "../types";
import { DEFAULT_FORM_DATA } from "../constants";

export function useIPRegister() {
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const updateFormData = (field: keyof FormData, value: unknown) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleRegister = async () => {
    setIsRegistering(true);

    setTimeout(() => {
      setIsRegistering(false);
      setShowSuccess(true);
    }, 3000);
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
  };

  const resetForm = () => {
    setFormData(DEFAULT_FORM_DATA);
    setIsRegistering(false);
    setShowSuccess(false);
  };

  return {
    formData,
    isRegistering,
    showSuccess,
    updateFormData,
    handleRegister,
    closeSuccessModal,
    resetForm,
  };
}