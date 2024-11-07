import { type FC, useEffect, useState } from "react";
import type { TableProps } from "./Table.types";
import { getUsers } from "../../api/functions";
import type { ApiUser } from "../../api/types";
import classNames from "classnames";
import { TableRow } from "../TableRow";
import styles from "./Table.module.css";

const Table: FC<TableProps> = (props) => {
  const [users, setUsers] = useState<ApiUser[]>([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getUsers();
      setUsers(data.users);
    };
    getData();
  }, []);

  const { className, ...rest } = props;
  const rootClasses = classNames(styles.root, className);
  return (
    <table className={rootClasses} {...rest}>
      <caption>
        Тестовое задание для компании ГлавПро от Рубинштейна К. А.
      </caption>
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
          <th scope="col">Возраст</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow user={user} key={user.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
