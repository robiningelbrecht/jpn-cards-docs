/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const {
  versionSelector
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils"); // imports utility
const pokemonApiVersions = require("./docs/pokemon-api/versions.json");

const sidebars: SidebarsConfig = {
  pokemonApiV2: [
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "API Reference",
        slug: "/pokemon-api",
      },
      items: require("./docs/pokemon-api/sidebar.ts"),
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(pokemonApiVersions),
      className: "version-button",
    }
  ],
  pokemonApiV1: [
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "API Reference",
        slug: "/pokemon-api/v1",
      },
      items: require("./docs/pokemon-api/1.0/sidebar.ts"),
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(pokemonApiVersions),
      className: "version-button",
    }
  ],
};

export default sidebars;
