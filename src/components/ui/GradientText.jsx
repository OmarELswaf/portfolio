export default function GradientText({ children, className = '', variant = 1 }) {
  const gradientClass = variant === 1 ? 'text-gradient-1' : 'text-gradient-2';
  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  );
}
