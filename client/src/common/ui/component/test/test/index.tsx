"use client";

import { useTest } from "~/common/model/hook/test/use-test";
import MeetSection from "~/common/ui/section/test/meet-section";
import ProcessSection from "~/common/ui/section/test/process-section";
import QuestionSection from "~/common/ui/section/test/question-section";
import ResultSection from "~/common/ui/section/test/result-section";

const Test = () => {
  const { section, answers, handleNext } = useTest();

  const test = [
    {
      question: "Ce te împiedică să slăbești?",
      answers: [
        { id: 11, text: "😣 Foamea constantă" },
        { id: 12, text: "🐌 Metabolism lent" },
        { id: 13, text: "😴 Nu ai energie pentru sport" }
      ]
    },
    {
      question: "Câte kilograme vrei să dai jos?",
      answers: [
        { id: 21, text: "⭐ 2 – 5 kg" },
        { id: 22, text: "⭐⭐ 5 – 10 kg" },
        { id: 23, text: "⭐⭐⭐ 10+ kg" }
      ]
    },
    {
      question: "Când vrei să vezi primele rezultate?",
      answers: [
        { id: 31, text: "⚡️ Peste o săptămână" },
        { id: 32, text: "🌙 Treptat, fără grabă" },
        { id: 33, text: "🎯 În decurs de o lună" }
      ]
    }
  ];

  const list = [
    <MeetSection key="meet_section" handleNext={handleNext} />,
    ...test.map((testItem, index) => (
      <QuestionSection
        key={`block_question_${index}`}
        index={index}
        question={testItem.question}
        buttons={testItem.answers}
        handleNext={handleNext}
      />
    )),
    <ProcessSection key="process_section" handleNext={handleNext} />,
    <ResultSection
      key="result_section"
      answers={test.map(
        (testItem, index) => (
          testItem.answers.find(el => el.id === answers[index])!
        )
      )}
    />
  ];

  return <>{list[section]}</>;
};

export default Test;
