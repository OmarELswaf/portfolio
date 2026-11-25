export default function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--border)]">
      <p className="text-center mono text-xs text-[var(--text-muted)]">
        © {new Date().getFullYear()} Omar Elsawaf · Built with React, Vite & Tailwind
      </p>
    </footer>
  );
}
