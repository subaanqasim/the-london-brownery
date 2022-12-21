import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Full Ingredients List",
      name: "ingredients",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Allergens",
      name: "allergens",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
