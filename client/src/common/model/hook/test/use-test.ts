import { useState } from "react";

export const useTest = () => {
  const [section, setSection] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleNext = (answer?: number) => {
    setSection(prev => prev + 1);
    if (typeof answer === "number") setAnswers(prev => [ ...prev, answer ]);
  };

  return {
    section,
    answers,
    handleNext
  };
};