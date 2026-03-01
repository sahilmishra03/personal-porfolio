"use client";

export default function LoadingSpinner() {
  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative">
        <div className="border-primary/20 border-t-primary h-8 w-8 animate-spin rounded-full border-2"></div>
      </div>
    </div>
  );
}
