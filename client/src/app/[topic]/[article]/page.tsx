import ArticleLayout from "~/common/ui/layout/article-layout";
import ImageSection from "~/common/ui/section/article/image-section";
import QuoteSection from "~/common/ui/section/article/quote-section";
import ReviewsSection from "~/common/ui/section/article/reviews-section";
import TextSection from "~/common/ui/section/article/text-section";

const Article = () => {
  return (
    <ArticleLayout>
      <TextSection />
      <QuoteSection />
      <ImageSection />
      <ReviewsSection />
    </ArticleLayout>
  );
};

export default Article;
