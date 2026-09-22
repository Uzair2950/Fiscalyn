export type ConversionName =
  | "contact_message"
  | "consultation_request"
  | "newsletter_subscription"
  | "outsourcing_enquiry"
  | "calendly_booking";

interface ConversionDetail {
  name: ConversionName;
  path: string;
}

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, string>>;
};

/**
 * Emits a privacy-safe conversion signal without collecting form contents.
 * If a consent-managed tag manager has already created dataLayer, the same
 * event is made available there; this module never loads analytics itself.
 */
export const trackConversion = (name: ConversionName): void => {
  if (typeof window === "undefined") return;

  const detail: ConversionDetail = { name, path: window.location.pathname };
  window.dispatchEvent(new CustomEvent<ConversionDetail>("47a:conversion", { detail }));

  const analyticsWindow = window as DataLayerWindow;
  analyticsWindow.dataLayer?.push({
    event: "website_conversion",
    conversion_name: name,
    page_path: detail.path,
  });
};
