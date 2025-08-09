import ArticleLayout from "~/common/ui/layout/article-layout";
import HeadSection from "~/common/ui/section/article/head-section";
import ReviewsSection from "~/common/ui/section/article/reviews-section";

const Article = () => {
  return (
    <ArticleLayout>
      <HeadSection />
      <ReviewsSection />
    </ArticleLayout>
  );
};

export default Article;