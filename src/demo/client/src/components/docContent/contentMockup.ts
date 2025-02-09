const data ={
    title: "Checkbox",
    content: "Checkbox is an extension to standard checkbox element with theming.",
    id: "abc1",
    subContents: [
        {
            index: "1",
            id: "ab2",
            subTitle: "import",
            code: "import { CheckBox } from 'scriptify/checkbox';",
        },
        {
            index: "2",
            id: "ab3",
            subTitle: "Basic",
            content: "Checkbox is used as a controlled input with checked and onChange properties.",
            component: 'button',
            code: "<CheckBox onChange={e => setChecked(e.checked)}>\n</Checkbox><CheckBox onChange={e => setChecked(e.checked)}></Checkbox>\n<CheckBox onChange={e => setChecked(e.checked)}></Checkbox>",
        },
        {
            index: "3",
            id: "ab4",
            subTitle: "Group",
            content: "Multiple checkboxes can be grouped together.",
            code: '<CheckBox onChange={e => setChecked(e.checked)}></Checkbox><CheckBox onChange={e => setChecked(e.checked)}></Checkbox>',
        },
        {
            index: "4",
            id: "ab5",
            subTitle: "Dynamic",
            content: "Checkboxes can be generated using a list of values.",
        },
        {
            index: "5",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
        {
            index: "6",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
        {
            index: "7",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
        {
            index: "8",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
        {
            index: "9",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
        {
            index: "10",
            id: "ab6",
            subTitle: "Invalid",
            content: "Invalid state is displayed using the invalid prop to indicate a failed validation. You can use this style when integrating with form validation libraries.",
            code: '<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>',
            component: ""
        },
    ]
};

export default data