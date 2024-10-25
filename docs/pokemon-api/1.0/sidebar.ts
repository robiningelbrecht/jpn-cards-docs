import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pokemon-api/1.0/jpn-api-reference",
    },
    {
      type: "category",
      label: "Cards",
      link: {
        type: "doc",
        id: "pokemon-api/1.0/cards",
      },
      items: [
        {
          type: "doc",
          id: "pokemon-api/1.0/get-card",
          label: "Get a card",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/1.0/get-multiple-cards",
          label: "Get multiple cards",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Set",
      items: [
        {
          type: "doc",
          id: "pokemon-api/1.0/get-set",
          label: "Get a set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/1.0/get-sets",
          label: "Get all sets",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
