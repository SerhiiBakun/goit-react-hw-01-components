import styled from 'styled-components';

export const Card = styled.div`
  padding: ${p => p.theme.space[0]}px;
  width: 400px;
  height: 500px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const UserInfo = styled.div`
  height: 75%;
  overflow: hidden;
  text-align: center;
  padding: ${p => p.theme.space[0]}px;
`;

export const Avatar = styled.img`
  display: block;
  width: 30%;
  height: auto;
  border-radius: ${p => p.theme.radii.round};
  margin: ${p => p.theme.space[4]}px auto;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const Location = styled(Tag)``;
