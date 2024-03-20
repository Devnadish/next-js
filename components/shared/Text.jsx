import React from 'react'
import PropTypes from "prop-types";
function Text({children,fontSize,font}) {
let fontName;
let sizeFont;
font==="cairo" ? fontName="font-cairo" : fontName="font-tajwal";


switch (fontSize) {
    case "xs": 
    sizeFont="text-[.7rem]"
    break;
    case "sm": 
    sizeFont="text-sm"
    break;
    case "md": 
    sizeFont="text-md"
    break;
    case "lg": 
    sizeFont="text-lg"
    break;
    case "xl": 
    sizeFont="text-xl"
    break;
    default:
        break;
}



  return (
    <p className={`${fontName} ${sizeFont}`}>{children}</p>
  )
}

export default Text


Text.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  font: PropTypes.oneOf(["cairo", "tajwal"]),
  fontSize: PropTypes.oneOf(["xs","sm", "md","lg","xl"]),
};

Text.defaultProps = {
    font:"cairo",
    fontSize: "md",
};
