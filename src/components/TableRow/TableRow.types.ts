import type { ApiUser } from "../../api/types";
import type { HTMLAttributes } from "react";
export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  user: ApiUser;
}
