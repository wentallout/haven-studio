import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'font',
  title: 'Font',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'fontCategory',
      title: 'Font Category',
      type: 'string',
      options: {
        list: [
          {
            title: 'Serif',
            value: 'serif',
          },
          {
            title: 'Sans Serif',
            value: 'sans serif',
          },
          {
            title: 'Display',
            value: 'display',
          },
          {
            title: 'Handwriting',
            value: 'handwriting',
          },
          {
            title: 'Monospace',
            value: 'monospace',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'fontCoverImage',
      title: 'Font Cover Image',
      type: 'image',
      options: {
        metadata: ['palette'],
        hotspot: true,
      },
    }),
    defineField({
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection;
      return {...selection, subtitle: author && `by ${author}`};
    },
  },
});
