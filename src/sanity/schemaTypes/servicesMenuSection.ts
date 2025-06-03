import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const servicesMenuSectionType = defineType({
  name: "servicesMenuSection",
  title: "Services Menu Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "index",
      title: "Index",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        {
          type: "reference",
          title: "Service",
          to: [
            {
              type: "service",
              title: "Service",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
});
