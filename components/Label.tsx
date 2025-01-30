import React from "react";
import styled, { keyframes } from "styled-components";

const cursor = keyframes`
 50% {
    border-color: transparent;
 }
`;

const typing = keyframes`
    from { width: 0 }

    to { width: 100% }
`;

const Text = styled.p`
  font-family: monospace;
  font-size: 1rem;
  /* margin-inline: auto; */
  overflow: hidden;
  white-space: nowrap;
  border-right: 7px solid;
  color: #00ff00;

  letter-spacing: 2px;
  animation: ${typing} 3s steps(22) forwards, 
             ${cursor} 1s step-end infinite;
`;

interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className="flex w-max">
      <Text className={className} {...props}>
        {children}
      </Text>
    </div>
  );
};

export default Label;
