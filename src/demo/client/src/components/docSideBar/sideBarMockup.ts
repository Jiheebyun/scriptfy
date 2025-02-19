export interface MenuItem {
    idx: string;
    title: string;
    path?: string;
    children?: MenuItem[];
    category?: string; 
}


export const menuData: MenuItem[] = [
    {
        idx: "1",
        title: "Getting Started",
        path: "",
        children: [
            {
                idx: "1-1",
                title: "Installation",
                path: "/installation"
            },
            {
                idx: "1-2",
                title: "Configuration",
                path: "/configuration"
            }
        ]
    },
    {
        idx: "2",
        title: "Components",
        path: "",
        children: [
            {
                idx: "2-1",
                category: "Form",
                title: "AutoComplete",
                path: "/autocomplete",
            },
            {
                idx: "2-2",
                category: "Form",
                title: "Checkbox",
                path: "/checkbox",
            },
            {
                idx: "2-3",
                category: "Form",
                title: "InputText",
                path: "/inputtext",
            },
            {
                idx: "2-4",
                category: "Button",
                title: "Button",
                path: "/button",
            },
            {
                idx: "2-5",
                category: "Button",
                title: "SplitButton",
                path: "/splitbutton",
            },
        ],
    },
    {
        idx: "3",
        title: "Theming",
        children: [
            {
                idx: "3-1",
                title: "OverView",
                path: "/overview",
            },
            {
                idx: "3-2",
                title: "Colors",
                path: "/colors",
            },
            {
                idx: "3-3",
                title: "SASS API",
                path: "www.google.ca",
            },
            {
                idx: "3-4",
                category: "Unstyled Mode",
                title: "Overview",
                path: "/unstyled",
            },
            {
                idx: "3-5",
                category: "Unstyled Mode",
                title: "Bootstrap",
                path: "/bootstrap",
            },
        ],
    },
    {
        idx: "4",
        title: "Hooks",
        path: "",
        children: [
            {
                idx: "4-1",
                category: "Lifecycle" ,
                title: "useMountEffect",
                path: "/hooks/usemounteffect"
            },
            {
                idx: "4-2",
                category: "Listener" ,
                title: "useEventlistener",
                path: "/hooks/useeventlistener"
            }

        ]
    },
    {
        idx: "5",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "6",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "7",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "8",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "9",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "10",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "11",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "12",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "13",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "14",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "15",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "16",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "17",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "18",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "19",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "20",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "21",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "22",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "23",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "24",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
    {
        idx: "25",
        title: "Test:doesNOTHAVEChild",
        path: "",
        children: [

        ]
    },
  ];

  /* MongoDB
  sideMenu DB format

{
  "_id": ObjectId("67abc123def4567890123456"),
  "component_id": ObjectId("679b160ba73becf257db5bee"),
  "menuTitle": "Getting Started",
  "menuItems": [
    { "label": "Installation", "url": "/installation" },
    { "label": "Configuration", "url": "/configuration" }
  ]
},

{
  "_id": ObjectId("67abc123def4567890123456"),
  "component_id": ObjectId("679b160ba73becf257db5bee"),
  "menuTitle": "Components",
  "menuItems": [
    { "label": "Button", "url": "/button" },
    { "label": "input", "url": "/input" }
  ]
},
{
  "_id": ObjectId("67abc123def4567890123456"),
  "component_id": ObjectId("679b160ba73becf257db5bee"),
  "menuTitle": "Theming",
  "menuItems": [
    { "label": "example", "url": "/example" },
    { "label": "example", "url": "/example" }
  ]
},
{
  "_id": ObjectId("67abc123def4567890123456"),
  "component_id": ObjectId("679b160ba73becf257db5bee"),
  "menuTitle": "Utilities",
  "menuItems": [
    { "label": "useMountEffect", "url": "/useMountEffect" },
    { "label": "useEventListener", "url": "/useEventListener" }
    { "label": "stringValidation", "url": "/stringValidation" }
  ]
}
  


  */