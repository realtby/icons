import * as React from 'react';
import type { IconProps } from '../../core';
import { castIconProps } from '../../core';

const Currency = (property: IconProps): ReturnType<React.FC> => {
  const props = castIconProps(property);
  return (
    <svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.003 5a5 5 0 11-10 0 5 5 0 0110 0zm-3.038 2.826c.025-.027.038-.067.038-.12l-.113-.59a.208.208 0 00-.075-.107c-.037-.027-.075-.027-.112-.027-.2.054-.388.08-.563.08-.35 0-.662-.093-.937-.308a1.802 1.802 0 01-.588-.843h1.425c.025 0 .063 0 .088-.027.025-.027.05-.054.062-.094l.075-.375a.238.238 0 00-.037-.134.13.13 0 00-.113-.067H10.44a2.116 2.116 0 010-.562h1.838a.13.13 0 00.087-.04c.025-.027.05-.054.063-.094l.075-.389a.238.238 0 00-.038-.133.13.13 0 00-.112-.067h-1.725c.125-.308.325-.55.587-.737.25-.174.55-.268.888-.268.127 0 .275.023.434.047l.04.007c.026.013.063.013.1-.014a.368.368 0 00.076-.107l.15-.59c0-.04 0-.08-.025-.12a.196.196 0 00-.1-.08 3.809 3.809 0 00-.65-.067c-.6 0-1.138.188-1.6.536a2.79 2.79 0 00-.963 1.393h-.412a.154.154 0 00-.15.16v.402c0 .054.012.094.037.12.025.027.063.04.113.04h.275c-.025.202-.025.39-.013.563h-.262a.154.154 0 00-.15.161v.375c0 .054.012.094.037.12.025.027.063.04.113.04h.375c.15.63.462 1.126.925 1.5.475.402 1.025.59 1.675.59.25 0 .512-.027.762-.107.025 0 .05-.027.075-.067z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.086 6h-.083a5 5 0 105 4.917A6.005 6.005 0 015.085 6zm1.508 5.61a1.68 1.68 0 00-.68-.425l-1.5-.423a.374.374 0 01-.21-.15.367.367 0 01-.083-.233c0-.11.028-.205.112-.287a.403.403 0 01.291-.123h.931c.167 0 .334.054.473.15a.163.163 0 00.138.027c.056 0 .098-.027.14-.054l.472-.479c.055-.04.07-.095.07-.164a.343.343 0 00-.098-.164 1.916 1.916 0 00-1.195-.41v-.656a.218.218 0 00-.07-.15A.225.225 0 005.234 8h-.445a.232.232 0 00-.166.068.204.204 0 00-.056.15v.657h-.028c-.305 0-.57.082-.806.232-.25.15-.43.356-.555.602a1.35 1.35 0 00-.167.807c.028.314.153.588.375.82a1.5 1.5 0 00.792.492l1.431.41a.453.453 0 01.208.15.397.397 0 01-.041.534.36.36 0 01-.278.11h-.931a.798.798 0 01-.472-.137.321.321 0 00-.153-.041c-.056.013-.097.027-.125.054l-.473.465c-.055.055-.083.123-.07.178 0 .068.029.123.084.164.361.273.764.41 1.209.41v.656c0 .069.014.123.056.164.041.041.097.055.166.055h.445a.211.211 0 00.222-.219v-.656c.334 0 .625-.096.903-.273a1.48 1.48 0 00.57-.725c.083-.274.097-.533.042-.807a1.42 1.42 0 00-.376-.71z"
        fill="#000"
      />
    </svg>
  );
};

Currency.defaultProps = {
  height: 16,
  width: 16,
};
export default Currency;
