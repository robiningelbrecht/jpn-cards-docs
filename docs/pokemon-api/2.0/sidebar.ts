import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pokemon-api/2.0/jpn-api-reference",
    },
    {
      type: "category",
      label: "Cards",
      link: {
        type: "doc",
        id: "pokemon-api/2.0/cards",
      },
      items: [
        {
          type: "doc",
          id: "pokemon-api/2.0/get-card",
          label: "Get a card",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/2.0/get-multiple-cards",
          label: "Get multiple cards",
          className: "menu__list-item--deprecated api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Set",
      items: [
        {
          type: "doc",
          id: "pokemon-api/2.0/get-set",
          label: "Get a set",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/2.0/get-set-uuid",
          label: "Get a set by uuid",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/2.0/get-sets",
          label: "Get all sets",
          className: "menu__list-item--deprecated api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        {
          type: "doc",
          id: "pokemon-api/2.0/get-artists",
          label: "Get all artists",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/2.0/get-subtypes",
          label: "Get all subtypes",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/2.0/get-rarities",
          label: "Get all rarities",
          className: "menu__list-item--deprecated api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;