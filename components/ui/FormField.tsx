import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  error,
  className,
}: FormFieldProps) {
  const inputClasses = cn(
    "w-full rounded-2xl border bg-white px-4 py-3.5 text-text-primary shadow-[0_8px_20px_rgba(0,77,67,0.03)] placeholder:text-text-light transition-all duration-200 focus:border-[#004D43]/40 focus:outline-none focus:ring-4 focus:ring-[#004D43]/8",
    error ? "border-red-400" : "border-[#004D43]/10"
  );

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={name}
        className="block text-sm font-semibold tracking-[-0.01em] text-text-primary"
      >
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={inputClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
        />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
