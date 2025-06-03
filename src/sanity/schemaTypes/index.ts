import { type SchemaTypeDefinition } from "sanity";
import { aboutMainImageType } from "./aboutMainImageType";
import { aboutQuestionsAndAnswersType } from "./aboutQuestionsAndAnswersType";
import { aboutWhatIOfferType } from "./aboutWhatIOfferType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { blogPostType } from "./blogPostType";
import { indexWhatWeDoType } from "./indexWhatWeDo";
import { landingFeaturedCategoriesType } from "./landingFeaturedCategories";
import { servicesMenuSectionType } from "./servicesMenuSection";
import { serviceType } from "./serviceType";
import { toolsType } from "./toolsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutMainImageType,
    aboutQuestionsAndAnswersType,
    aboutWhatIOfferType,
    authorType,
    blockContentType,
    blogPostType,
    indexWhatWeDoType,
    landingFeaturedCategoriesType,
    servicesMenuSectionType,
    serviceType,
    toolsType,
  ],
};
