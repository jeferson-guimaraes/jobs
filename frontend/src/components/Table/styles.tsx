import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
  border-radius: 4px;
  margin-top: 1rem;
`

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #00000026;
  border-collapse: collapse;
`
export const TableHeader = styled.th`
  background-color: var(--green);
  color: #FFF;
  text-align: left;
  padding: .5rem;
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

interface TableCellProps {
  $float?: string
}

export const TableCell = styled.td<TableCellProps>`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  float: ${props => props.$float || 'none' };
`;

export const ButtonDelete = styled.button`
  background-color: #c40000;
  color: #FFF;
  padding: .4rem;
  border: none;
  border-radius: 4px;
  margin-left: 1rem;
  display: flex;
  transition: .4s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`