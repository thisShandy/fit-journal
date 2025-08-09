import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleHeadSection extends Struct.ComponentSchema {
  collectionName: 'components_article_head_sections';
  info: {
    displayName: 'head-section';
    icon: 'book';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ArticleQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_article_quote_sections';
  info: {
    displayName: 'quote-section';
    icon: 'italic';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
    icon: 'cast';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.head-section': ArticleHeadSection;
      'article.quote-section': ArticleQuoteSection;
      'common.seo': CommonSeo;
    }
  }
}
