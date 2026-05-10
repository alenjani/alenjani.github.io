import { logoDevUrl, type LogoDevOptions } from "@/lib/logodev";
import { cn } from "@/lib/cn";

type BrandMarkProps = {
  domain: string;
  alt?: string;
  size?: number;
  className?: string;
} & Pick<LogoDevOptions, "theme" | "greyscale" | "fallback" | "format">;

export function BrandMark({
  domain,
  alt,
  size = 32,
  className,
  ...opts
}: BrandMarkProps) {
  const url = logoDevUrl(domain, { size: size * 2, ...opts });
  if (!url) return null;
  return (
    <img
      src={url}
      alt={alt ?? domain}
      width={size}
      height={size}
      loading="lazy"
      className={cn("inline-block rounded-[3px] bg-surface-2 align-middle", className)}
    />
  );
}
