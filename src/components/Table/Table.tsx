import { type FC } from "react";
import type * as T from "./Table.types";
import classNames from "classnames";
import styles from "./Table.module.css";

const Table: FC<T.TableProps> = (props) => {
  const { className } = props;
  const rootClasses = classNames(styles.root, className);
  return <h1 className={rootClasses}>OLOLO</h1>;
};

export default Table;
