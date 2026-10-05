/**
 * Shared presentational bits for the "Aalayam" homepage sections.
 * Keeps section headings, dividers and line-links consistent.
 */

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`aa-divider ${className}`} aria-hidden="true">
      <span className="aa-divider__line" />
      <span className="aa-divider__dot" />
      <span className="aa-divider__line" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="aa-head reveal">
      <Divider className="mb-6" />
      {eyebrow ? <span className="aa-eyebrow">{eyebrow}</span> : null}
      <h2 className="aa-title" style={dark ? { color: "var(--cream)" } : undefined}>
        {title}
      </h2>
      {subtitle ? <p className="aa-sub">{subtitle}</p> : null}
    </div>
  );
}

export function LineLink({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`aa-link ${className}`}>
      {children}
    </a>
  );
}
