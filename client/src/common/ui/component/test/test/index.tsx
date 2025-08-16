"use client";

import { useTest } from "~/common/model/hook/test/use-test";
import MeetSection from "~/common/ui/section/test/meet-section";
import ProcessSection from "~/common/ui/section/test/process-section";
import QuestionSection from "~/common/ui/section/test/question-section";
import ResultSection from "~/common/ui/section/test/result-section";

const Test = () => {
  const { section, handleNext } = useTest();

  const test = [
    {
      question: "Что мешает тебе похудеть?",
      answers: [
        { id: 11, text: "😣 Постоянный голод" },
        { id: 12, text: "🐌 Медленный метаболизм" },
        { id: 13, text: "😴 Нет сил на спорт" }
      ]
    },
    {
      question: "Сколько килограммов хочешь убрать?",
      answers: [
        { id: 21, text: "⭐ 2 – 5 кг" },
        { id: 22, text: "⭐⭐ 5 – 10 кг" },
        { id: 23, text: "⭐⭐⭐ 10+ кг" }
      ]
    },
    {
      question: "Когда хочешь увидеть первые результаты?",
      answers: [
        { id: 31, text: "⚡️ Уже через неделю" },
        { id: 32, text: "🌙 Постепенно, без спешки" },
        { id: 33, text: "🎯 В течение месяца" }
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
    <ProcessSection
      key="process_section"
      handleNext={handleNext}
    />,
    <ResultSection
      key="result_section"
    />
  ];

  return (
    <>
      {list[section]}
    </>
  );
};

export default Test;