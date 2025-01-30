import React, { forwardRef, memo, useCallback, useMemo } from "react";
import Label from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  
  error?: string;
  onEnterPress?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, label = "", placeholder = "", onChange, onEnterPress,...props }, ref) => {
    // Memoize the input's CSS classes to avoid recalculating on every render
    const inputClass = useMemo(
      () =>
        `w-full max-w-[300px] bg-transparent border-b border-[#00ff00] px-4 py-2 text-center focus:outline-none text-sm font-mono text-[#00ff00] placeholder:text-[#00ff00]/30`,
      [] // Recalculate only when error changes
    );

    // Memoize the onChange function to prevent unnecessary re-renders
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e);
      },
      [onChange] // Only recreate if onChange changes
    );

    const handleKeyPress = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onEnterPress) {
            onEnterPress();
        }
      },
      [onEnterPress] // Only recreate if onChange changes
    );

    return (
      <>
        <Label>{label}</Label>
        <input
          name="name"
          ref={ref}
          className={inputClass}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default memo(Input); // Memoize to prevent re-renders if props don't change
