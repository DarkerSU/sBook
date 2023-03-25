import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/',
    title: 'sBook',
    description: '描述',
    themeConfig: {
        nav: [
            { text: "Home", link: "/" }, // 对应首页
            { text: "Foo", link: "/foo/" }, // 对应/foo/index.md,
            { text: "Bar", link: "/bar/" }, // 对应/bar/index.md
            {
                text: "下拉菜单", items: [
                    { text: "Item A", link: "/item-1" },
                    { text: "Item B", link: "/item-2" },
                    { text: "Item C", link: "/item-3" }
                ]
            }
        ],
        sidebar: {
            // 对应Nav中foo菜单激活时显示的菜单
            "/foo/": [
                {
                    text: "Foo", collapsible: true, items: [
                        { text: "index", link: "/foo/" },
                        { text: "one", link: "/foo/one" },
                        { text: "two", link: "/foo/two" }
                    ]
                },
            ],
            "/bar/": [
                {
                    text: "Bar", items: [
                        { text: "index", link: "/bar/" },
                        { text: "san", link: "/bar/three" },
                        { text: "si", link: "/bar/four" }
                    ],
                }
            ],
            "/": [
                {
                    text: "首页", items: [
                        { text: "home", link: "/" }
                    ]
                }
            ]
        },
        algolia: {
            appId: 'MCTPBQG4ZA', // 需要替换
            apiKey: '60bb4d65a48ef0757411799be5c05e60', // 需要替换
            indexName: 'sBook', // 需要替换
            placeholder: '请输入关键词',
            translations: {
                button: {
                    buttonText: '搜索文档',
                },
            },
        }
    }
})