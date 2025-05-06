import { defineField } from "sanity"
export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Title",
        type: "string",
        }),
        defineField({
        name: "description",
        title: "Description",
        type: "string",
        }),
        defineField({
        name: "amount",
        title: "Amount",
        type: "number",
        }),
        defineField({
        name: "quantity",
        title: "Quantity",
        type: "number",
        }),
        defineField({
        name: "image",
        title: "Image",
        type: "string",
        }),
        defineField({
            name: 'email',
            title: "Email",
            type: "string"
        }),
        defineField({
        name: "author",
        to: [{ type: "author" }],
        title: "Author",
        type: "reference",
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        })
    ],
}