type UserAvatarProps = {
  name?: string;
  size?: number; 
  showIcon?: boolean; 
  className?: string;
};

export function UserAvatar({
  name = "User",
  size = 80,
  className,
}: UserAvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-primary text-white ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="font-bold" style={{ fontSize: size / 2 }}>
        {initial}
      </span>
    </div>
  );
}