import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const toolsType = defineType({
  name: "tools",
  title: "Tools",
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
      name: "url",
      type: "url",
      title: "Url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "linkText",
      type: "string",
      title: "Link Text",
      description:
        "Custom text for the link button. If left empty, defaults to 'View more'",
      initialValue: "View more",
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
