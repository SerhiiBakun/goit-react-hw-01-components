import styled from 'styled-components';

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: ${p => p.theme.radii.round};
  margin-right: 20px;
  margin-left: 20px;
  background-color: ${p => {
    if (p.children) {
      return 'green';
    }
    return 'red';
  }};
`;

export const Avatar = styled.img`
  display: block;
  margin-right: 20px;
`;

export const Name = styled.p`
  display: block;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
