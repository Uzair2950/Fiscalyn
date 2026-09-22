import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoForPath } from "../../lib/seo";

const upsertMeta = (selector: string, attributes: Record<string, string>): void => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: seo.robots });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: seo.type });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "47 Accountants" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: seo.image });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: seo.image });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = seo.canonical;

    document.head
      .querySelectorAll('script[type="application/ld+json"][data-seo-jsonld]')
      .forEach((script) => script.remove());

    seo.structuredData.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoJsonld = "true";
      script.text = JSON.stringify(item).replace(/</g, "\\u003c");
      document.head.appendChild(script);
    });
  }, [location.pathname]);

  return null;
};

export default SeoManager;
