import type { FC } from "react";
import type { SpinnerProps } from "./Spinner.types";
import classNames from "classnames";

import classes from "./Spinner.module.css";

const Spinner: FC<SpinnerProps> = (props) => {
  const { className, color, size, strokeWidth } = props;

  return (
    <span className={classNames(classes.root, className)}>
      <svg
        className={classes.svg}
        height={size}
        viewBox="0 0 50 50"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes.path}
          cx="25"
          cy="25"
          fill="none"
          r="20"
          strokeWidth={strokeWidth}
          style={{ stroke: color }}
        ></circle>
      </svg>
    </span>
  );
};

export default Spinner;
