const reel = {
    name: "reel",
    title: "Reel",
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
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
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
            name: "details",
            title: "Details",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "time",
                            title: "Time",
                            type: "string"
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string"
                        },
                    ]
                }
            ],
        }
    ]
}

export default reel;
