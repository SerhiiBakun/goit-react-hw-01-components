import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  width: 30%;
  height: auto;
  border-radius: ${p => p.theme.radii.round};
  margin: ${p => p.theme.space[5]}px auto 0;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Location = styled(Tag)``;

export const Stat = styled.li`
  border-top: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.grey};
  width: calc(100% / 3);
  padding: 30px;
  text-align: center;

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.grey};
  }
`;

export const StatName = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatValue = styled.span`
  display: block;
  width: 100%;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
