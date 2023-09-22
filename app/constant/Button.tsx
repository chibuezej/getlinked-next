import React from "react";

interface GradientButtonProps {
  label: string;
}

const gradientStyle = {
  background:
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
};

function Button(props: GradientButtonProps) {
  return (
    <div style={gradientStyle} className="py-2 px-8 text-[16px] max-w-[172px]">
      {props.label}
    </div>
  );
}

export default Button;