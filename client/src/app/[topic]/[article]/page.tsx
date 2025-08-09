import ArticleLayout from "~/common/ui/layout/article-layout";
import ImageSection from "~/common/ui/section/article/image-section";
import QuoteSection from "~/common/ui/section/article/quote-section";
import ReviewsSection from "~/common/ui/section/article/reviews-section";
import TextSection from "~/common/ui/section/article/text-section";

const textMock = "Still, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves. Over, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves.";
const quoteMock = "Still, this simple change in mindset helped me get way more out of ChatGPT by changing the mental model I hold for it. Try these ideas out and let the results speak for themselves.";
const imageMock = {
  image: "https://cdn.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
  text: "Photo description here"
};

const Article = () => {
  return (
    <ArticleLayout>
      <TextSection text={textMock} />
      <QuoteSection text={quoteMock} />
      <ImageSection {...imageMock} />
      <ReviewsSection />
    </ArticleLayout>
  );
};

export default Article;
