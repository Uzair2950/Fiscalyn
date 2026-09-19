import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, CheckCircle2, RefreshCw } from "lucide-react";

interface CalendlyWidgetProps {
  url?: string;
  height?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: Record<string, unknown>;
        utm?: Record<string, unknown>;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget: () => void;
    };
  }
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url,
  height = "680px",
}) => {
  const envUrl = import.meta.env.VITE_CALENDLY_URL;
  const defaultUrl = "https://calendly.com/your-calendly-username/30min";
  const rawUrl = url || envUrl || defaultUrl;

  // Add theme query parameters if not present
  const formatCalendlyUrl = (inputUrl: string): string => {
    if (!inputUrl || inputUrl.includes("your-calendly-username")) {
      return inputUrl;
    }
    const separator = inputUrl.includes("?") ? "&" : "?";
    if (inputUrl.includes("primary_color")) return inputUrl;
    return `${inputUrl}${separator}primary_color=d4af37&background_color=0b0f19&text_color=ffffff`;
  };

  const finalUrl = formatCalendlyUrl(rawUrl);
  const isPlaceholder = rawUrl.includes("your-calendly-username");

  const [isLoading, setIsLoading] = useState(true);
  const [eventBooked, setEventBooked] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!hasConsent || isPlaceholder) return;

    // Inject Calendly CSS
    const linkId = "calendly-widget-css";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Inject Calendly JS
    const scriptId = "calendly-widget-js";
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setIsLoading(false);
      document.body.appendChild(script);
    } else {
      setIsLoading(false);
    }

    // Listen to Calendly postMessage events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        e.source === iframeRef.current?.contentWindow &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        setEventBooked(true);
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, [hasConsent, isPlaceholder]);

  return (
    <div className="calendly-embed-container" style={{ position: "relative", width: "100%" }}>
      {hasConsent && eventBooked && (
        <div
          style={{
            padding: "20px",
            background: "rgba(34, 197, 94, 0.15)",
            border: "1px solid #22c55e",
            borderRadius: "16px",
            color: "#22c55e",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <CheckCircle2 size={24} />
          <div>
            <h4 style={{ margin: 0, fontWeight: 700, fontSize: "1.1rem" }}>
              Meeting Successfully Scheduled!
            </h4>
            <p style={{ margin: "4px 0 0", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.9)" }}>
              A confirmation email with meeting details and calendar invitation has been sent to your inbox.
            </p>
          </div>
        </div>
      )}

      {isPlaceholder ? (
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px dashed var(--border-gold)",
            borderRadius: "20px",
            padding: "40px 24px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "450px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "var(--color-gold-soft)",
              color: "var(--color-gold-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <Calendar size={30} />
          </div>
          <h3 style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "8px" }}>
            Calendly Scheduler Ready
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "420px", lineHeight: 1.6, marginBottom: "20px" }}>
            To activate live booking, add your official link in <code style={{ color: "var(--color-gold-primary)", background: "rgba(212,175,55,0.1)", padding: "2px 6px", borderRadius: "4px" }}>VITE_CALENDLY_URL</code> in your <code style={{ color: "var(--color-gold-primary)", background: "rgba(212,175,55,0.1)", padding: "2px 6px", borderRadius: "4px" }}>.env</code> file.
          </p>

          <div
            style={{
              background: "var(--bg-main)",
              padding: "16px 20px",
              borderRadius: "12px",
              border: "1px solid var(--border-gold)",
              fontSize: "0.85rem",
              color: "var(--text-secondary)",
              textAlign: "left",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--color-gold-primary)", marginBottom: "6px" }}>
              <Clock size={16} />
              <span>Required setting in .env:</span>
            </div>
            <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "0.8rem", color: "#e2e8f0" }}>
              VITE_CALENDLY_URL=https://calendly.com/your-username/30min
            </pre>
          </div>
        </div>
      ) : !hasConsent ? (
        <div
          style={{
            minHeight: "360px",
            borderRadius: "20px",
            border: "1px solid var(--border-gold)",
            background: "var(--bg-card)",
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Calendar size={34} style={{ color: "var(--color-gold-primary)", marginBottom: "14px" }} />
          <h3 style={{ color: "var(--text-primary)", marginBottom: "10px" }}>
            Load the Calendly scheduler
          </h3>
          <p style={{ color: "var(--text-secondary)", maxWidth: "520px", lineHeight: 1.6, marginBottom: "18px" }}>
            Calendly is a third-party service. Loading it shares technical data,
            such as your IP address and browser information, with Calendly.
            Details are available in our <Link to="/privacy">Privacy Policy</Link>.
          </p>
          <button
            type="button"
            onClick={() => setHasConsent(true)}
            style={{
              background: "var(--gradient-gold)",
              color: "var(--text-on-gold)",
              border: "1px solid var(--border-gold-strong)",
              fontWeight: 700,
              padding: "12px 20px",
            }}
          >
            Load Calendly
          </button>
        </div>
      ) : (
        <div style={{ minHeight: height, position: "relative" }}>
          {isLoading && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-card)",
                borderRadius: "20px",
                gap: "10px",
                color: "var(--color-gold-primary)",
              }}
            >
              <RefreshCw className="animate-spin" size={24} />
              <span>Loading Calendly Scheduler...</span>
            </div>
          )}
          <iframe
            ref={iframeRef}
            src={finalUrl}
            width="100%"
            height={height}
            frameBorder="0"
            title="Select a Date & Time - Calendly"
            style={{
              borderRadius: "20px",
              border: "1px solid var(--border-gold)",
              background: "#0b0f19",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CalendlyWidget;
