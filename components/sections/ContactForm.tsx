"use client";

import { useState } from "react";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";

interface FormFieldConfig {
  id: number;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface ContactFormProps {
  fields: FormFieldConfig[];
}

export function ContactForm({ fields }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function validate(): boolean {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const key = field.label.toLowerCase().replace(/\s+/g, "_");
      const value = formData[key]?.trim() || "";

      if (field.required && !value) {
        newErrors[key] = `${field.label} is required`;
      }

      if (field.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors[key] = "Please enter a valid email address";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setMessage("Thank you! We'll be in touch soon.");
      setFormData({});
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.75rem] border border-[#004D43]/12 bg-white p-8 text-center shadow-[0_16px_40px_rgba(0,77,67,0.06)]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(180deg,#f2fff9_0%,#e0f9ed_100%)]">
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-lg font-medium text-text-primary">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[1.75rem] border border-[#004D43]/8 bg-white p-6 shadow-[0_16px_40px_rgba(0,77,67,0.06)] sm:p-8"
    >
      {fields.map((field) => {
        const key = field.label.toLowerCase().replace(/\s+/g, "_");
        return (
          <FormField
            key={field.id}
            label={field.label}
            name={key}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[key] || ""}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, [key]: value }))
            }
            error={errors[key]}
          />
        );
      })}

      {status === "error" && (
        <p className="text-sm text-red-500">{message}</p>
      )}

      <Button type="submit" className="mt-2 w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
