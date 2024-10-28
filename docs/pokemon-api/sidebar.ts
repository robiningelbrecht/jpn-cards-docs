import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "pokemon-api/jpn-api-reference",
    },
    {
      type: "category",
      label: "Cards",
      link: {
        type: "doc",
        id: "pokemon-api/cards",
      },
      items: [
        {
          type: "doc",
          id: "pokemon-api/get-card",
          label: "Get a card by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-card-by-uuid",
          label: "Get a card by uuid",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-name",
          label: "Get cards by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-set-id",
          label: "Get cards by set id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-set-code",
          label: "Get cards by set code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-illustrator",
          label: "Get cards by illustrator",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-type",
          label: "Get cards by type",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-subtype",
          label: "Get cards by subtype",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-print-number",
          label: "Get cards by print number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-cards-by-rarity",
          label: "Get cards by rarity",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-query-cards",
          label: "Query cards",
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
          id: "pokemon-api/get-set",
          label: "Get a set",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-set-uuid",
          label: "Get a set by uuid",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-sets",
          label: "Get all sets",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        {
          type: "doc",
          id: "pokemon-api/get-artists",
          label: "Get all artists",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-subtypes",
          label: "Get all subtypes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "pokemon-api/get-rarities",
          label: "Get all rarities",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
