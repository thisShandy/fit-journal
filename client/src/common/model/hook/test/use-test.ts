/* eslint-disable */
import { useState } from "react";

export const useTest = () => {
  const [section, setSection] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleNext = (answer?: number) => {
    try {
      // @ts-ignore
      window.gtag("event", `st_${section + 1}`, {
        event_category: "-",
        event_label: `st_${section + 1}`,
        answer: answer
      });
    } catch (error) {}

    setSection(prev => prev + 1);
    if (typeof answer === "number") setAnswers(prev => [ ...prev, answer ]);
  };

  return {
    section,
    answers,
    handleNext
  };
};