interface Web3FormsResponse {
  success?: boolean;
  message?: string;
}

export async function submitWeb3Form(
  fields: Record<string, string>,
): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Web3Forms is not configured.");
  }

  if (!fields["h-captcha-response"]) {
    throw new Error("Captcha verification is required.");
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);

  Object.entries(fields).forEach(([name, value]) => {
    formData.append(name, value);
  });

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = (await response.json().catch(() => null)) as Web3FormsResponse | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Web3Forms rejected the submission.");
  }
}
