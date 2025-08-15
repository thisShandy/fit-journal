import { useState } from "react";

export const useTest = () => {
  const [section, setSection] = useState<number>(0);

  const handleNext = () => {
    setSection(prev => prev + 1);
  };

  return {
    section,
    handleNext
  };
};