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
      sizes="(max-width: 768px) 32px, 40px"
      priority={priority}
      className={className ?? "h-auto w-auto"}
    />
  );
}
