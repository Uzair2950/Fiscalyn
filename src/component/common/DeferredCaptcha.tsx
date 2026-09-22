import React, { lazy, Suspense } from "react";
import type { RefObject } from "react";
import type { HCaptchaInstance } from "./Web3FormsCaptcha";

const Web3FormsCaptcha = lazy(() => import("./Web3FormsCaptcha"));

interface DeferredCaptchaProps {
  visible: boolean;
  captchaRef: RefObject<HCaptchaInstance>;
  onTokenChange: (token: string) => void;
}

const DeferredCaptcha: React.FC<DeferredCaptchaProps> = ({
  visible,
  captchaRef,
  onTokenChange,
}) => {
  if (!visible) return null;

  return (
    <div className="deferred-captcha" aria-live="polite">
      <p>One quick verification, then your form will send automatically.</p>
      <Suspense fallback={<div className="captcha-loading">Loading secure verification…</div>}>
        <Web3FormsCaptcha
          captchaRef={captchaRef}
          onTokenChange={onTokenChange}
        />
      </Suspense>
    </div>
  );
};

export default DeferredCaptcha;
