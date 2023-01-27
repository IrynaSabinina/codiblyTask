import { TableComponentProps } from "../Products/ProductItem";
import CSS from "csstype";
import styles from "./Modal.module.css";

export const Modal = ({
  id,
  name,
  year,
  color,
  pantone_value,
  isClose,
}: TableComponentProps) => {
  const modalContainer: CSS.Properties = {
    backgroundColor: "white",
    display: " flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50vh",
    height: "50vh",
    borderRadius: "8px",
    boxShadow: `15px 15px 10px ${color}`,
  };

  const colorContainer: CSS.Properties = {
    backgroundColor: `${color}`,
    width: "40vh",
    padding: "5px",
    borderRadius: "4px",
    textAlign: "center",
  };

  return (
    <section className={styles.modalContainer}>
      <div style={modalContainer} key={id}>
        <h2>{name}</h2>
        <p>year : {year}</p>
        <p> pantone_value: {pantone_value}</p>
        <div style={colorContainer}>color</div>
        <button className={styles.closeBtn} type="button" onClick={isClose}>
          Close
        </button>
      </div>
    </section>
  );
};
