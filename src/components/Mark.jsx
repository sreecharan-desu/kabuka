import { cn } from "@/lib/cn";

export default function Mark({ className = "", size = 28 }) {
  return (
    <img
      src="/logo.png"
      alt="Kabuka"
      width={size}
      height={size}
      className={cn("object-contain", className)}
      draggable={false}
    />
  );
}
