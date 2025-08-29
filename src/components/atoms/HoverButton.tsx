import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
}

export const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-zinc-600 dark:text-zinc-300 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      <span className="absolute left-0 top-0 h-[2px] w-0 bg-purple-700 transition-all duration-100 group-hover:w-full" />

      <span className="absolute right-0 top-0 h-0 w-[2px] bg-purple-700 transition-all delay-100 duration-100 group-hover:h-full" />

      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-purple-700 transition-all delay-200 duration-100 group-hover:w-full" />

      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-purple-700 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};
