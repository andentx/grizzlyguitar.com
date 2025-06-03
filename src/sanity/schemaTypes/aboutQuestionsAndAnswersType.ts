import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutQuestionsAndAnswersType = defineType({
  name: "aboutQuestionsAndAnswers",
  title: "About - Questions and Answers",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "index",
      type: "number",
      title: "Index",
    }),
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
