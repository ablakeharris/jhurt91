interface ContainerProps {
  children: React.ReactNode;
  width?: 'narrow' | 'normal' | 'wide';
  centered?: boolean;
}

export const Container = ({
  children,
  width = 'normal',
  centered = false,
}: ContainerProps) => {
  const widthClasses = {
    narrow: 'max-w-2xl',
    normal: 'max-w-4xl',
    wide: 'max-w-6xl',
  };

  return (
    <div
      className={`${widthClasses[width]} mx-auto ${centered ? 'text-center' : ''}`}
    >
      {children}
    </div>
  );
};
