import type { HTMLAttributes } from "react";
export type TableCellProps = HTMLAttributes<HTMLTableCellElement> & {
  value: number | string;
  editable?: boolean;
  onUserUpdate?: (value: string | number) => Promise<void>;
};
