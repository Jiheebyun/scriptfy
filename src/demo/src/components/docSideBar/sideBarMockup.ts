export interface MenuItem {
    title: string;
    path?: string;
    children?: MenuItem[];
}



export const menuData: MenuItem[] = [
    {
      title: "홈",
      path: "/home",
    },
    {
      title: "소개",
      path: "/about",
      children: [
        {
          title: "팀",
          path: "/about/team",
        },
        {
          title: "회사",
          path: "/about/company",
        },
      ],
    },
    {
      title: "서비스",
      children: [
        {
          title: "디자인",
          path: "/services/design",
        },
        {
          title: "개발",
          path: "/services/development",
        },
        {
          title: "마케팅",
          path: "/services/marketing",
        },
      ],
    },
    {
      title: "연락처",
      path: "/contact",
    },
  ];