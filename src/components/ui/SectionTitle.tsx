import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  center = false,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        center ? "items-center text-center" : "items-start",
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="text-brand-primary font-heading font-bold uppercase tracking-widest text-sm text-glow">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white">
        {title}
      </h2>
      <div className="h-1 w-20 bg-brand-primary mt-2 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
    </div>
  );
}
