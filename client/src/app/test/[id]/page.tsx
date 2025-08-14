import TestLayout from "~/common/ui/layout/test-layout";
import MeetSection from "~/common/ui/section/test/meet-section";
import QuestionSection from "~/common/ui/section/test/question-section";

const TestId = () => {
  return (
    <TestLayout>
      <MeetSection />
      <QuestionSection />
    </TestLayout>
  );
};

export default TestId;