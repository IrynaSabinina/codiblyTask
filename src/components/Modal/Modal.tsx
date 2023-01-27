import { TableComponentProps } from "../Products/ProductItem";

export const Modal = ({
  id,
  name,
  year,
  color,
  pantone_value,
  isClose,
}: TableComponentProps) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <p>year : {year}</p>
      <p> pantone_value: {pantone_value}</p>
      <div style={{ backgroundColor: `${color}` }}>color</div>
      <button type="button" onClick={isClose}>
        Close
      </button>
    </div>
  );
};
