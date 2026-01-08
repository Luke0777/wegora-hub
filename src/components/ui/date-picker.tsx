"use client";

import { useState } from "react"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { CalendarBlank } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface DatePickerProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
  dateFormat?: string
  /** Accessible label for the trigger button */
  label?: string
  /** Whether the field has an error */
  error?: boolean
  /** Whether the field is required */
  required?: boolean
}

function DatePicker({
  value,
  onChange,
  placeholder = "Datum auswählen",
  disabled = false,
  className,
  dateFormat = "dd.MM.yyyy",
  label,
  error,
  required,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          disabled={disabled}
          aria-label={label || placeholder}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-invalid={error || undefined}
          aria-required={required || undefined}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
            error && "border-destructive focus-visible:ring-destructive/20",
            className
          )}
        >
          <CalendarBlank className="mr-2 h-4 w-4" />
          {value ? (
            format(value, dateFormat, { locale: de })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        align="start"
        role="dialog"
        aria-label="Kalender"
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange?.(date);
            setOpen(false);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
