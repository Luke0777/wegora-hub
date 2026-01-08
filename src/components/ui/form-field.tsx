"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  /** Field label text */
  label: string;
  /** Unique field name (used for ID generation) */
  name: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Hint text shown below the field */
  hint?: string;
  /** The form input element */
  children: React.ReactElement<{
    id?: string;
    "aria-required"?: boolean;
    "aria-invalid"?: boolean;
    "aria-describedby"?: string;
  }>;
  /** Additional class names for the wrapper */
  className?: string;
}

/**
 * FormField - Accessible form field wrapper
 *
 * Provides consistent accessibility patterns for form fields:
 * - Auto-generates IDs for label-input association
 * - Adds aria-required when required
 * - Adds aria-invalid when error present
 * - Connects aria-describedby to error/hint messages
 * - Wraps errors in role="alert" with aria-live="polite"
 *
 * @example
 * <FormField label="Name" name="name" required error={errors.name}>
 *   <Input type="text" placeholder="Ihr Name" />
 * </FormField>
 */
export function FormField({
  label,
  name,
  required = false,
  error,
  hint,
  children,
  className,
}: FormFieldProps) {
  const inputId = `field-${name}`;
  const errorId = `${name}-error`;
  const hintId = `${name}-hint`;

  // Build aria-describedby value
  const describedBy = [error && errorId, hint && !error && hintId]
    .filter(Boolean)
    .join(" ") || undefined;

  // Clone child element with accessibility props
  const enhancedChild = React.cloneElement(children, {
    id: inputId,
    "aria-required": required || undefined,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  });

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={inputId} className="block text-sm font-medium">
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-hidden="true">
            *
          </span>
        )}
      </Label>

      {enhancedChild}

      {hint && !error && (
        <p id={hintId} className="text-sm text-muted-foreground">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          aria-live="polite"
          className="text-sm text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}
