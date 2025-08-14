import type { FC, PropsWithChildren } from "react";

const TestLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default TestLayout;