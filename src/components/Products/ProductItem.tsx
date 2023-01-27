import { SyntheticEvent, useState, MouseEventHandler } from "react";
import { Modal } from "../Modal/Modal";
export interface TableComponentProps {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value?: string;
  isClose?: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const ProductItem = ({
  id,
  name,
  year,
  color,
  pantone_value,
}: TableComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <tbody>
        <tr
          style={{ backgroundColor: `${color}` }}
          key={id}
          onClick={openModal}
        >
          <td>{id}</td>
          <td>{name}</td>
          <td>{year}</td>
        </tr>
        {isOpen ? (
          <Modal
            id={id}
            name={name}
            year={year}
            color={color}
            pantone_value={pantone_value}
            isClose={closeModal}
          />
        ) : (
          <></>
        )}
      </tbody>
    </>
  );
};
