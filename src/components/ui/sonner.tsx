"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-background text-foreground border border-border shadow-lg rounded-xl overflow-hidden w-full",
          description: "text-muted-foreground",
          actionButton:
            "bg-primary text-primary-foreground font-bold hover:bg-primary-dark",
          cancelButton: "bg-muted text-muted-foreground hover:bg-muted-dark",
        },
      }}
      style={
        {
          "--width": "415px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
