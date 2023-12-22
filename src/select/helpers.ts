import React from "react";

export function makeOptions(optionList: Array<string>, name?: string) {
  name = name ? name : "name option";
  return optionList.map((option) => {
    const text = React.createElement("span", {}, option);
    const listItem = React.createElement(
      "option",
      { key: option, value: option, name: name },
      text
    );
    return listItem;
  });
}
