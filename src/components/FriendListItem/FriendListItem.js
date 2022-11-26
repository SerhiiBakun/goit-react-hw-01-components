import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      width="300px"
      p={0}
      m={3}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
