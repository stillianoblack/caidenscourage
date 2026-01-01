export function getStripePreorderUrl(): string | undefined {
  // Hardcoded Stripe Payment Link placeholder (replace with your real link)
  return 'https://buy.stripe.com/REPLACE_ME';
}

export function getWaitlistUrl(): string | undefined {
  // Optional: hardcode a waitlist URL here if you want the top-right button to go somewhere else.
  // Returning undefined keeps the current fallback behavior (opens the existing modal).
  return undefined;
}

export function openExternalUrl(url: string) {
  // Open external purchase links in a new tab safely (prevents window.opener attacks)
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}


