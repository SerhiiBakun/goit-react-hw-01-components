import styled from 'styled-components';

export const TableHead = styled.th`
  width: 250px;
  height: 50px;
`;

export const BodyRow = styled.tr`
  color: grey;
  height: 50px;

  :nth-child(even) {
    background-color: #cce7e9;
  }
`;
