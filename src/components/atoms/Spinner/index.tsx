import React, { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export type SpinnerProps = {
  color?: string;
  loading?: boolean;
  size?: number;
};

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

export const Spinner = ({ color = "white", loading = false, size = 20 }) => {
  return (
    <div>
      {loading && (
        <HashLoader
          color={color}
          cssOverride={override}
          loading={true}
          size={size}
        />
      )}
    </div>
  );
};
