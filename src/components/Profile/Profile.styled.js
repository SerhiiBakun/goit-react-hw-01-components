import styled from 'styled-components';

export const Card = styled.div`
  padding: 0;
  width: 400px;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
`;

export const UserInfo = styled.div`
  height: 75%;
  overflow: hidden;
  text-align: center;
  padding: 0;
`;

export const Avatar = styled.img`
  display: block;
  width: 30%;
  height: auto;
  border-radius: 50%;
  margin: 40px auto;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: grey;
  font-weight: 500;
`;

export const Location = styled(Tag)``;
