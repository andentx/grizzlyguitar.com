import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const landingFeaturedCategoriesType = defineType({
  name: "landingFeaturedCategories",
  title: "Landing Featured Categories",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "imageAltText",
      type: "string",
      title: "Image Alt Text",
      description:
        "Alternative text for the image. If left empty, will use the category title.",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
  ],
});
