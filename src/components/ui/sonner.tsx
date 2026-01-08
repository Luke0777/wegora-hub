import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toaster]:border-green-200 group-[.toaster]:bg-green-50 group-[.toaster]:text-green-800",
          warning:
            "group-[.toaster]:border-orange-200 group-[.toaster]:bg-orange-50 group-[.toaster]:text-orange-800",
          error:
            "group-[.toaster]:border-destructive/50 group-[.toaster]:bg-destructive/10 group-[.toaster]:text-destructive",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
