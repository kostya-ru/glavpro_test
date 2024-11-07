import type { FC, ChangeEvent } from "react";
import { useState } from "react";
import type { TableCellProps } from "./TableCell.types";
import { Spinner } from "../Spinner";
import classNames from "classnames";
import styles from "./TableCell.module.css";

const TableCell: FC<TableCellProps> = (props) => {
  const { className, value, editable, onUserUpdate, ...rest } = props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | number>(value);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const rootClasses = classNames(styles.root, className);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleOk = async () => {
    console.log("HANDLE OK");
    if (onUserUpdate !== undefined) {
      try {
        setIsLoading(true);
        await onUserUpdate(inputValue);
      } catch {
        throw new Error();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <td className={rootClasses} {...rest}>
      <div className={styles.wrapper}>
        {editable ? (
          editMode ? (
            <>
              <input
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={handleInputChange}
              />
              {isLoading ? (
                <Spinner size={40} />
              ) : (
                <button className={styles.button} onClick={handleOk}>
                  ok
                </button>
              )}
              <button
                className={styles.button}
                onClick={toggleEditMode}
                disabled={isLoading}
              >
                X
              </button>
            </>
          ) : (
            <>
              <span>{value}</span>
              <button className={styles.button} onClick={toggleEditMode}>
                Edit
              </button>
            </>
          )
        ) : (
          value
        )}
      </div>
    </td>
  );
};

export default TableCell;
