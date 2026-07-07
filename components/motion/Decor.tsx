/* Decorative blurred blobs for backgrounds */
export function Blob({
  className = '',
  color = '#F5A300',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`blob pointer-events-none absolute rounded-full ${className}`}
      style={{ background: color, opacity: 0.35 }}
    />
  );
}

/* SVG wave divider between sections */
export function WaveDivider({
  className = '',
  fill = '#FFFFFF',
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-[60px] w-full sm:h-[90px] lg:h-[120px]"
      >
        <path
          fill={fill}
          d="M0,64 C240,120 480,8 720,32 C960,56 1200,120 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
