"use client";

import { useState } from "react";

const EMAIL = "lenjani.a@gmail.com";

export function EmailCopy() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className={`inline-flex items-center gap-3.5 px-4 py-3 rounded-[10px] font-semibold text-[15px] tracking-tight transition-all active:translate-y-px ${
        copied ? "bg-accent text-bg" : "bg-ink text-bg hover:opacity-90"
      }`}
    >
      <span className="font-mono text-[14px] tracking-tight">{EMAIL}</span>
      <span
        className={`font-mono text-[10.5px] uppercase tracking-[0.1em] px-2 py-[3px] border rounded-[4px] ${
          copied ? "border-white/70 opacity-100" : "border-white/25 opacity-60"
        }`}
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
