import { MouseEventHandler } from "react";
import styles from "./Pagination.module.css";
import { useSelector } from "react-redux/es/exports";
import { productsSelector } from "../../redux/products/products-selectors";
import IconSVG from "../../icons/sprite.svg";

export interface PaginationProps {
  currentPage: number;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmit?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Pagination = ({
  currentPage,
  onClick,
  onSubmit,
}: PaginationProps) => {
  const products = useSelector(productsSelector);
  return (
    <>
      <section className={styles.paginationSection}>
        <button
          className={styles.paginationBtn}
          onClick={onSubmit}
          disabled={currentPage === 1}
        >
          <svg className={styles.icon} height="20px" width="20px">
            <use xlinkHref={`${IconSVG}#arrow`}></use>
          </svg>
        </button>
        <div>... {currentPage} ...</div>
        <button
          className={styles.paginationBtn}
          onClick={onClick}
          disabled={currentPage === products.total_pages}
        >
          <svg className={styles.iconRight} height="20px" width="20px">
            <use xlinkHref={`${IconSVG}#arrow`}></use>
          </svg>
        </button>
      </section>
    </>
  );
};
