import { defineQuery } from "next-sanity";

export const WHAT_WE_DO_FEATURES_QUERY = defineQuery(`
  *[_type == "indexWhatWeDo"] | order(index asc) {
    _id,
    index,
    title,
    description,
    image {
      asset->{
        url
      }
    },
    imageAltText
  }
`);

export const ABOUT_MAIN_IMAGE_QUERY = defineQuery(`
  *[_type == "aboutMainImage"] {
    _id,
    image {
      asset->{
        url
      }
    },
    imageAltText
  }
`);

export const ABOUT_QUESTIONS_AND_ANSWERS_QUERY = defineQuery(`
  *[_type == "aboutQuestionsAndAnswers"] | order(index asc) {
    _id,
    index,
    question,
    answer
  }
`);

export const ABOUT_WHAT_I_OFFER_QUERY = defineQuery(`
  *[_type == "aboutWhatIOffer"] | order(index asc) {
    _id,
    index,
    title,
    description,
    url,
    linkText,
    image {
      asset->{
        url
      }
    },
    imageAltText
  }
`);

export const SERVICES_MENU_SECTION_QUERY = defineQuery(`
  *[_type == "servicesMenuSection"] | order(index asc) {
    _id,
    index,
    title,
    subtitle,
    menuItems[]->{
      _id,
      title,
      description,
    }
  }
`);

export const SERVICES_QUERY = defineQuery(`
  *[_type == "servicesMenuSection"] | order(index asc) {
    _id,
    index,
    title,
    subtitle,
    menuItems[]->{
      _id,
      title,
      description,
      price
    },
    images[] {
      asset->{
        url
      },
      alt
    }
  }
`);

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "blogPost"] | order(publishedAt asc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    excerpt,
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    }
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    publishedAt,
    excerpt,
    content,
    author->{
      name,
      image {
        asset->{
          url
        }
      },
      bio
    },
    "next": *[_type == "blogPost" && publishedAt > ^.publishedAt] | order(publishedAt asc)[0] {
      title,
      slug
    },
    "previous": *[_type == "blogPost" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0] {
      title,
      slug
    }
  }
`);

export const LANDING_FEATURED_CATEGORIES_QUERY = defineQuery(`
  *[_type == "landingFeaturedCategories"] {
    _id,
    title,
    image {
      asset->{
        url
      }
    },
    imageAltText,
    url
  }
`);

export const TOOLS_QUERY = defineQuery(`
  *[_type == "tools"] | order(index asc) {
    _id,
    index,
    title,
    description,
    url,
    linkText,
    image {
      asset->{
        url
      }
    },
    imageAltText
  }
`);
