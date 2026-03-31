import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-4rem)] overflow-hidden px-6 text-center">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-fd-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-fd-foreground) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 max-w-2xl">
        <span className="rounded-full border border-fd-border bg-(--color-fd-secondary) px-4 py-1 text-xs font-semibold uppercase tracking-widest text-(--color-fd-secondary-foreground)">
          Integration Guide
        </span>

        <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          Build with{' '}
          <span className="bg-linear-to-r from-(--color-fd-primary) to-[hsl(300,90%,60%)] bg-clip-text text-transparent">
            Arcube
          </span>
        </h1>

        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          The AI-powered ancillary platform for airlines, TMCs, and travel
          agencies - integrate once, personalize at every touchpoint.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/docs"
            className="rounded-lg bg-(--color-fd-primary) px-6 py-2.5 text-sm font-semibold text-(--color-fd-primary-foreground) transition-opacity hover:opacity-90"
          >
            Get Started →
          </Link>
        </div>
      </div>

      <style>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
        }
        .orb-1 {
          width: 520px;
          height: 520px;
          top: -120px;
          left: -100px;
          background: radial-gradient(circle, hsl(284, 95%, 47%), transparent 70%);
          animation: drift1 12s ease-in-out infinite;
        }
        .orb-2 {
          width: 420px;
          height: 420px;
          bottom: -80px;
          right: -80px;
          background: radial-gradient(circle, hsl(300, 90%, 55%), transparent 70%);
          animation: drift2 15s ease-in-out infinite;
        }
        .orb-3 {
          width: 300px;
          height: 300px;
          top: 40%;
          left: 55%;
          background: radial-gradient(circle, hsl(270, 80%, 60%), transparent 70%);
          animation: drift3 18s ease-in-out infinite;
          opacity: 0.2;
        }
        .dark .orb { opacity: 0.25; }

        @keyframes drift1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33%       { transform: translate(40px, 30px) scale(1.05); }
          66%       { transform: translate(-20px, 50px) scale(0.97); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(-50px, -30px) scale(1.08); }
          70%       { transform: translate(20px, -60px) scale(0.95); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-40px, 40px) scale(1.1); }
        }
      `}</style>
    </main>
  );
}
