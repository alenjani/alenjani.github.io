export type LogoDevOptions = {
  size?: number;
  format?: "webp" | "png" | "jpg";
  retina?: boolean;
  theme?: "auto" | "light" | "dark";
  greyscale?: boolean;
  fallback?: "monogram" | "404";
};

const TOKEN = process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN || "";

export function logoDevUrl(domain: string, opts: LogoDevOptions = {}): string | null {
  if (!TOKEN || !domain) return null;
  const params = new URLSearchParams({
    token: TOKEN,
    size: String(opts.size ?? 64),
    format: opts.format ?? "webp",
    retina: String(opts.retina ?? true),
    fallback: opts.fallback ?? "monogram",
  });
  if (opts.theme) params.set("theme", opts.theme);
  if (opts.greyscale) params.set("greyscale", "true");
  return `https://img.logo.dev/${encodeURIComponent(domain)}?${params.toString()}`;
}

export const LOGO_DEV_TOKEN_AVAILABLE = Boolean(TOKEN);
