import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto w-[min(1280px,100%-3rem)]', className)}>
      {children}
    </div>
  );
};
export default Container;
