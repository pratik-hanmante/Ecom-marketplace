import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth:{
        verify:{
            generateEmailHTML: ({ token }) => {
                return `
                <>
                    <h2>PrisMatiK</h2>
                    <p>Hello Please Verify </p>
                    <h3>from Pratik Hanmante </h3>
                </>
                `
            }
        }
    },
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name:'role',
            defaultValue:'user',
            required:true,
            // admin:{
            //     condition: () => false,
            // },
            type:"select",
            options : [
                {label: "Admin", value:"admin"},
                {label: "User", value:'user'},
            ],
        },
    ],
}