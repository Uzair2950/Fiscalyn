import { renderToString } from "react-dom/server";
import ServerApp from "./ServerApp";
import {
  getSeoForPath,
  LEGACY_BLOG_REDIRECTS,
  PUBLIC_ROUTES,
  SITE_URL,
} from "./lib/seo";

export const render = (url: string): string =>
  renderToString(<ServerApp location={url} />);

export { getSeoForPath, LEGACY_BLOG_REDIRECTS, PUBLIC_ROUTES, SITE_URL };
