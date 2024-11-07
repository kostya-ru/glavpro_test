import type { FC } from "react";
import { useState } from "react";
import type { TableRowProps } from "./TableRow.types";
import type { ApiUser, ApiUserDataForUpdate } from "../../api/types";
import { TableCell } from "../TableCell";
import { updateUser } from "../../api/functions";
import classNames from "classnames";
import styles from "./TableRow.module.css";

const TableRow: FC<TableRowProps> = (props) => {
  const {
    className,
    user: { id, firstName, lastName, age },
    ...rest
  } = props;
  const [loadedUser, setLoadedUser] = useState<ApiUser>();
  const rootClasses = classNames(styles.root, className);
  const userUpdateHandler = async (
    id: ApiUser["id"],
    data: ApiUserDataForUpdate
  ) => {
    try {
      const response = await updateUser(id, data);
      setLoadedUser(response);
    } catch {
      console.error("ERROR");
    }
  };
  return (
    <tr className={rootClasses} {...rest}>
      <TableCell value={id} />
      <TableCell
        value={loadedUser?.firstName ?? firstName}
        editable
        onUserUpdate={(firstName) =>
          userUpdateHandler(id, { firstName: firstName })
        }
      />
      <TableCell
        value={loadedUser?.lastName ?? lastName}
        editable
        onUserUpdate={(lastName) =>
          userUpdateHandler(id, { lastName: lastName })
        }
      />
      <TableCell
        value={loadedUser?.age ?? age}
        editable
        onUserUpdate={(age) => userUpdateHandler(id, { age: age })}
      />
    </tr>
  );
};
export default TableRow;
