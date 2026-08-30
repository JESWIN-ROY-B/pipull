import { useState, type FormEvent } from "react";
import { ShieldCheck, X } from "lucide-react";
import { toast } from "sonner";
import { PipullLogo } from "./Logo";

export function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("OTP sent", { description: `Verification code sent to ${phone || "your phone"}.` });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Login or sign up"
        className="relative w-full max-w-sm rounded-2xl border border-border bg-background p-6 shadow-lift"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <PipullLogo />
        <h2 className="mt-5 font-display text-xl font-bold text-foreground">
          Login or sign up
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Book services, track pros and manage payments in one place.
        </p>

        <form onSubmit={submit} className="mt-5 space-y-3">
          <label className="block text-sm font-medium text-foreground" htmlFor="phone">
            Phone number
          </label>
          <div className="flex items-center rounded-xl border border-border bg-surface focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
            <span className="px-3 text-sm font-semibold text-muted-foreground">+1</span>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="555 019 2837"
              className="h-11 w-full rounded-r-xl bg-transparent pr-3 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-brand" />
          By continuing you agree to Pipull's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
