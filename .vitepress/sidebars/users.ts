import { DefaultTheme } from "vitepress";

export default {
  "/users": [
    {
      text: "For Users",
      link: "/users",
      items: [
        // TODO - Finish this
        // { text: "Common Issues", link: "/users/common-issues" },
        {
          text: "Development Status",
          link: "/users/development-status",
        },
        { text: "Supporting Create", link: "/users/support-create" },
        { text: "View changelogs", link: "/users/changelogs/" },
        // TODO - Redo this, it's really old and needs a update
        // {
        //   text: "How to use Create Schematics",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Saving schematics",
        //       link: "/users/schematics/saving-schematic",
        //     },
        //     {
        //       text: "Loading schematics",
        //       link: "/users/schematics/loading-and-positioning-schematics",
        //     },
        //     {
        //       text: "Printing schematics",
        //       link: "/users/schematics/printing-schematic",
        //     },
        //   ],
        // },
        {
          text: "Create's Computercraft Integration",
          collapsed: true,
          items: [
            {
              text: "Logistics",
              items: [
                {
                  text: "Packager",
                  link: "/users/cc-tweaked-integration/logistics/packager",
                },
                {
                  text: "Re-Packager",
                  link: "/users/cc-tweaked-integration/logistics/repackager",
                },
                {
                  text: "Package",
                  link: "/users/cc-tweaked-integration/logistics/package",
                },
                {
                  text: "Package Order",
                  link: "/users/cc-tweaked-integration/logistics/package-order",
                },
                {
                  text: "Stock Ticker",
                  link: "/users/cc-tweaked-integration/logistics/stock-ticker",
                },
                {
                  text: "Redstone Requester",
                  link: "/users/cc-tweaked-integration/logistics/redstone-requester",
                },
                {
                  text: "Table Cloth",
                  link: "/users/cc-tweaked-integration/logistics/table-cloth",
                },
                {
                  text: "Package Frogport",
                  link: "/users/cc-tweaked-integration/logistics/package-frogport",
                },
                {
                  text: "Postbox",
                  link: "/users/cc-tweaked-integration/logistics/postbox",
                }
              ],
            },
            {
              text: "Trains",
              items: [
                {
                  text: "Train station",
                  link: "/users/cc-tweaked-integration/train/train-station",
                },
                {
                  text: "Train schedule",
                  link: "/users/cc-tweaked-integration/train/train-schedule",
                },
              ],
            },
            {
              text: "Display Link",
              link: "/users/cc-tweaked-integration/display-link",
            },
            {
              text: "Rotational Speed Controller",
              link: "/users/cc-tweaked-integration/rotational-speed-controller",
            },
            {
              text: "Sequenced Gearshift",
              link: "/users/cc-tweaked-integration/sequenced-gearshift",
            },
            {
              text: "Speedometer",
              link: "/users/cc-tweaked-integration/speedometer",
            },
            {
              text: "Stressometer",
              link: "/users/cc-tweaked-integration/stressometer",
            },
          ],
        },
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;
