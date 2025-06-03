import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const indexWhatWeDoType = defineType({
  name: "indexWhatWeDo",
  title: "Index - What We Do",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "index",
      type: "number",
      title: "Index",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
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
    }),
  ],
});
