import HCaptcha from "@hcaptcha/react-hcaptcha";
import type { RefObject } from "react";

export type HCaptchaInstance = HCaptcha;

interface Web3FormsCaptchaProps {
  captchaRef: RefObject<HCaptchaInstance>;
  onTokenChange: (token: string) => void;
}

const WEB3FORMS_HCAPTCHA_SITE_KEY =
  import.meta.env.VITE_HCAPTCHA_SITE_KEY ||
  "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const Web3FormsCaptcha = ({
  captchaRef,
  onTokenChange,
}: Web3FormsCaptchaProps) => (
  <div className="web3forms-captcha">
    <HCaptcha
      ref={captchaRef}
      sitekey={WEB3FORMS_HCAPTCHA_SITE_KEY}
      reCaptchaCompat={false}
      onVerify={(token) => onTokenChange(token)}
      onExpire={() => onTokenChange("")}
      onChalExpired={() => onTokenChange("")}
      onError={() => onTokenChange("")}
    />
  </div>
);

export default Web3FormsCaptcha;
