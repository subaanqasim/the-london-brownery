import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  title: "Product variant",
  name: "productVariant",
  type: "object",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description:
        "The title of the product variant e.g. 8 pieces, 16 pieces etc.",
    }),

    defineField({
      title: "Price",
      name: "price",
      type: "number",
      description:
        "The price of the product variant in pence - e.g. 999 = £9.99",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Weight in grams (approximately)",
      name: "grams",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Dimensions",
      name: "dimensions",
      type: "object",
      fields: [
        defineField({
          title: "Width",
          name: "width",
          type: "number",
        }),

        defineField({
          title: "Height",
          name: "height",
          type: "number",
        }),

        defineField({
          title: "Depth",
          name: "depth",
          type: "number",
        }),
      ],
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
