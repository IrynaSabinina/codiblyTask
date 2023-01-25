interface TableComponentProps {
  id: number;
  name: string;
  year: number;
  color: string;
}
export const ProductItem = ({ id, name, year, color }: TableComponentProps) => {
  return (
    <>
      <tbody>
        <tr style={{ backgroundColor: `${color}` }} key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{year}</td>
        </tr>
      </tbody>
    </>
  );
};
