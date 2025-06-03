import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutMainImageType = defineType({
  name: "aboutMainImage",
  title: "About - Main Image",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
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
    }),
  ],
});
