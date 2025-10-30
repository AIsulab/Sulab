import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  size?: number;
};

export function Logo({ className, priority = false, size = 36 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="SULAB 로고"
      width={size}
      height={size}
      priority={priority}
      className={["h-auto w-auto", className].filter(Boolean).join(" ")}
    />
  );
}
