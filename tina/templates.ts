import type { TinaField } from "tinacms";
export function authorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "string",
      name: "bio",
      label: "Bio",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar Image",
    },
    {
      type: "object",
      name: "social",
      label: "Social Media",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Author",
    },
  ] as TinaField[];
}
export function home_heroFields() {
  return [
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "number",
      name: "maxWidthPX",
      label: "Max Width",
      required: true,
    },
  ] as TinaField[];
}
export function homeFields() {
  return [...home_heroFields()] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "categories",
      label: "Category",
      list: true,
      options: [
        "アイルランドで暮らす",
        "まだまだ英語は難しい",
        "アイルランドで日本語を考える",
        "日本・ヨーロッパ旅行記",
      ],
    },
    {
      type: "image",
      name: "thumbnailImage",
      label: "Thumbnail Image",
    },
    {
      type: "string",
      name: "thumbnailImagePosition",
      label: "Thumbnail Image Position",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "string",
      name: "tags",
      label: "Tag",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "showTags",
      label: "Show Tags",
    },
  ] as TinaField[];
}
