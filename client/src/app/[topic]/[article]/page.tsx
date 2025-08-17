import ArticleLayout from "~/common/ui/layout/article-layout";
import HeadSection from "~/common/ui/section/article/head-section";
import ImageSection from "~/common/ui/section/article/image-section";
import QuoteSection from "~/common/ui/section/article/quote-section";
import TextSection from "~/common/ui/section/article/text-section";

const section1Title = (<h3>1. Nutrition as the Foundation</h3>);
const section1Text = "Proper nutrition helps maintain energy and strengthen the immune system. It’s not only about what we eat, but also how we eat.";
const section1Quote = `"Let food be thy medicine and medicine be thy food." — Hippocrates`;

const section2Title = (<h3>2. Movement is Life</h3>);
const section2Text = "Even 20–30 minutes of active walking per day can improve mood and reduce stress. The main thing is that movement should bring joy.";
const section2Quote = `"When the body moves, the mind rests." — Eastern wisdom`;

const section3Title = (<h3>3. Sleep and Recovery</h3>);
const section3Text = "Sleep is not a waste of time, but an investment in health. A regular sleep routine helps the brain and body recover.";
const section3Quote = `"Sleep is that golden chain that ties health and our bodies together." — Thomas Dekker`;

const section4Title = (<h3>4. Emotional Balance</h3>);
const section4Text = "Health is not only about the body, but also about the mind. Meditation, reading, or a simple conversation with loved ones can help reduce stress.";
const section4Quote = `"Health is the harmony of body, mind, and soul." — Plato`;

const conclusionTitle = (<h4>Conclusion</h4>);
const conclusionText = "A healthy lifestyle doesn’t start with a revolution, but with small steps: more water, a walk in the fresh air, quality sleep. These simple habits create a solid foundation for a long and active life.";

const imageMock = {
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  text: "Fresh and colorful bowl full of vitamins"
};

const Article = () => {
  return (
    <ArticleLayout>
      <HeadSection />

      <TextSection text={section1Title} />
      <TextSection text={section1Text} />
      <QuoteSection text={section1Quote} />

      <TextSection text={section2Title} />
      <TextSection text={section2Text} />
      <QuoteSection text={section2Quote} />

      <TextSection text={section3Title} />
      <TextSection text={section3Text} />
      <QuoteSection text={section3Quote} />

      <TextSection text={section4Title} />
      <TextSection text={section4Text} />
      <QuoteSection text={section4Quote} />

      <TextSection text={conclusionTitle} />
      <TextSection text={conclusionText} />

      <ImageSection {...imageMock} />
    </ArticleLayout>
  );
};

export default Article;
