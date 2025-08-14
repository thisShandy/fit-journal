import TestLayout from "~/common/ui/layout/test-layout";
import MeetSection from "~/common/ui/section/test/meet-section";
import QuestionSection from "~/common/ui/section/test/question-section";

const TestId = () => {
  const test = [
    { id: 1, text: "😵‍💫 Постоянный голод" },
    { id: 2, text: "😵‍💫 Постоянный голод" }
  ];

  return (
    <TestLayout>
      <MeetSection />
      {/*<QuestionSection buttons={test} question={"Мой вопрос"} />*/}
    </TestLayout>
  );
};

export default TestId;
