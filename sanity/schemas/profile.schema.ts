const profile = {
    name: "profile",
    title: "Profile",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
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
            name: "coloredLogo",
            title: "Colored Logo",
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
            name: "darkLogo",
            title: "Dark Logo",
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
            name: "summary",
            title: "Summary",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "mobile",
            title: "Mobile",
            type: "string",
        },
        {
            name: "facebook",
            title: "Facebook",
            type: "string",
        },
        {
            name: "instagram",
            title: "Instagram",
            type: "string",
        },
        {
            name: "behance",
            title: "Behance",
            type: "string",
        },
        {
            name: "linkedin",
            title: "Linkedin",
            type: "string",
        },
        {
            name: "whatsapp",
            title: "Whatsapp",
            type: "string",
        },
        {
            name: "youtube",
            title: "Youtube",
            type: "string",
        },
    ]
}

export default profile;
