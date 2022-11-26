import styled from 'styled-components';
import { rndColor } from 'functions/randomColor';

export const Title = styled.h2`
  text-align: center;
`;

export const Stat = styled.li`
  width: 100px;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${rndColor};
`;

export const StatName = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

export const StatValue = styled.span`
  display: block;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
