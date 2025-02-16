// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8962dd155c3941759ba3d41387146ca5@o4508827829927936.ingest.us.sentry.io/4508827830190080",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
