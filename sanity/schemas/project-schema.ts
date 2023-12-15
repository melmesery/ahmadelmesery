const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" },
        },
        {
            name: "client",
            title: "Client",
            type: "string",
        },
        {
            name: "gif",
            title: "Gif",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "url",
            title: "URL",
            type: "string",
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "team",
            title: "Team",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                        },
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                        },
                    ],
                },
            ],
        },
        {
            name: "bigImage",
            title: "Add 1 image of size 1220*690px",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "meduimImages",
            title: "Add 2 images of size 600*340px",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (Rule: any) => Rule.max(2),
        },
        {
            name: "smallImages",
            title: "Add 3 images of size 400*230px",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (Rule: any) => Rule.max(3),
        },
    ],
};

export default project;
