export interface MenuItem {
    title: string;
    path?: string;
    children?: MenuItem[];
    category?: string; 
}


export const menuData: MenuItem[] = [
    {
        title: "Installation",
        path: "",
        children: [
            {
                title: "Installation",
                path: "/installation"
            },
            {
                title: "Configuration",
                path: "/configuration"
            }
        ]
    },
    {
        title: "Components",
        path: "",
        children: [
            {
                category: "Form",
                title: "AutoComplete",
                path: "/autocomplete",
            },
            {
                category: "Form",
                title: "Checkbox",
                path: "/checkbox",
            },
            {
                category: "Form",
                title: "InputText",
                path: "/inputtext",
            },
            {
                category: "Button",
                title: "Button",
                path: "/button",
            },
            {
                category: "Button",
                title: "SplitButton",
                path: "/splitbutton",
            },
        ],
    },
    {
      title: "Theming",
      children: [
        {
          title: "OverView",
          path: "/overview",
        },
        {
          title: "Colors",
          path: "/colors",
        },
        {
          title: "SASS API",
          path: "www.google.ca",
        },
        {
            category: "Unstyled Mode",
            title: "Overview",
            path: "/unstyled",
        },
        {
            category: "Unstyled Mode",
            title: "Bootstrap",
            path: "/bootstrap",
        },
      ],
    },
    {
      title: "Hooks",
      path: "",
      children: [
        {
            category: "Lifecycle" ,
            title: "useMountEffect",
            path: "/hooks/usemounteffect"
        },
        {
            category: "Listener" ,
            title: "useEventlistener",
            path: "/hooks/useeventlistener"
        }

      ]
    },
  ];