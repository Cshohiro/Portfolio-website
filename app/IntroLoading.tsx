export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
      <div className="flex flex-col items-center">
        <div className="relative h-28 w-72">
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--color-border)]" />

          <div className="absolute left-[8%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-[color:var(--color-accent)] bg-[var(--color-bg)] animate-[nodePulse_1.8s_ease-in-out_infinite]" />
          <div className="absolute left-[34%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-[color:var(--color-accent)] bg-[var(--color-bg)] animate-[nodePulse_1.8s_ease-in-out_0.2s_infinite]" />
          <div className="absolute left-[60%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-[color:var(--color-accent)] bg-[var(--color-bg)] animate-[nodePulse_1.8s_ease-in-out_0.4s_infinite]" />
          <div className="absolute left-[86%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border border-[color:var(--color-accent)] bg-[var(--color-bg)] animate-[nodePulse_1.8s_ease-in-out_0.6s_infinite]" />

          <div className="absolute left-[8%] top-1/2 h-px w-[24%] -translate-y-1/2 overflow-hidden">
            <div className="h-full w-1/3 animate-[flowLine_1.8s_linear_infinite] bg-[var(--color-accent)]" />
          </div>
          <div className="absolute left-[34%] top-1/2 h-px w-[26%] -translate-y-1/2 overflow-hidden">
            <div className="h-full w-1/3 animate-[flowLine_1.8s_linear_0.2s_infinite] bg-[var(--color-accent)]" />
          </div>
          <div className="absolute left-[60%] top-1/2 h-px w-[26%] -translate-y-1/2 overflow-hidden">
            <div className="h-full w-1/3 animate-[flowLine_1.8s_linear_0.4s_infinite] bg-[var(--color-accent)]" />
          </div>
        </div>

        <div className="mt-8 text-xs uppercase tracking-[0.32em] text-[var(--color-text-subtle)]">
          Loading .....
        </div>
      </div>
    </div>
  );
}
