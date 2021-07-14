/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.tsx can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// https://docs.cypress.io/guides/tooling/typescript-support#Types-for-plugins

// @ts-ignore cypress/react/plugins/next types are missing.
import injectDevServer from "@cypress/react/plugins/next";

/**
 * @type {Cypress.PluginConfig}
 */
const plugins = (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  injectDevServer(on, config);

  return config;
};

export default plugins;
