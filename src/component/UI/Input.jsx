import React, { forwardRef } from "react";
import { OutlinedInput, styled } from "@mui/material";
import { ReactComponent as Search } from "../assats/icons/Search.svg";

export const InputUi = forwardRef(
  (
    {
      error,
      color,
      type,
      id,
      placeholder,
      value,
      onChange,
      onBlur,
      padding,
      ...props
    },
    ref
  ) => {
    const handleBlur = (event) => {
      if (onBlur) {
        onBlur(event);
      }
    };

    return (
      <div>
        <InputOutlained
          {...props}
          value={value}
          onChange={onChange}
          error={error}
          color={color}
          placeholder={placeholder}
          id={id}
          ref={ref}
          padding={padding}
          onBlur={handleBlur}
          {...props}
          startAdornment={<Search />}
          sx={{
            "& .MuiOutlinedInput-input": {
              textIndent: "20px",
            },
          }}
        />
      </div>
    );
  }
);
InputUi.displayName = "Input";

const InputOutlained = styled(OutlinedInput)(
  ({
    width,
    height,
    padding,
    fontSize,
    background,
    borderradius,
    border,
    ...props
  }) => ({
    width,
    height,
    padding,
    fontSize,
    background,
    borderRadius: borderradius,
    border,
    ".MuiInputBase-input": {
      padding: props.classpadding === "true" && "3px 14px",
    },
  })
);
