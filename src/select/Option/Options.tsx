import React from "react";

interface OptionProps {
  optionList?: Array<string>;
  name: string;
}

const Options = ({ optionList, name }: OptionProps) => {
  if (!optionList) return;
  const handleClick = () => {
    
  }
  return optionList.map((option) => {
    return (
      <li role="option">
        <input type="radio" id={option} name={name} value={option}/>
        <label htmlFor={option}>{option}</label>
      </li>
    );
  });
};

export default Options;
