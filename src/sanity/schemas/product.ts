import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The descriptive title of the product",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the product",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "extendedDescription",
      title: "Extended description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Default variant",
      name: "defaultVariant",
      type: "productVariant",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Other variants",
      name: "variants",
      type: "array",
      of: [
        defineArrayMember({
          title: "Variant",
          type: "productVariant",
        }),
      ],
    }),

    defineField({
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "ingredient" },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "nutritionTags",
      title: "Nutrition tags",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
      options: {
        list: [
          {
            title: "Gluten free",
            value: "gluten-free",
          },
          {
            title: "Vegan",
            value: "vegan",
          },
          {
            title: "Vegetarian",
            value: "vegetarian",
          },
          {
            title: "Dairy free",
            value: "dairy-free",
          },
          {
            title: "Halal",
            value: "halal",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      title: "Keywords",
      name: "keywords",
      type: "array",
      description: "Keywords for SEO",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "category" },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "images[0]",
    },
  },
});
