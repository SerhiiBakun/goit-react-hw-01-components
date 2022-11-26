import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  Avatar,
  UserName,
  Tag,
  Location,
  Stat,
  StatName,
  StatValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      p={0}
      width="400px"
      height="500px"
      bg="white"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      borderRadius="normal"
      m={4}
    >
      <Box height="75%" overflow="hidden" textAlign="center" p={0}>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>
      <Box
        as="ul"
        display="flex"
        bg="greyLight"
        height="25%"
        m={0}
        p={0}
        borderBottomLeftRadius="normal"
        borderBottomRightRadius="normal"
        overflow="hidden"
      >
        <Stat>
          <StatName>Followers</StatName>
          <StatValue>{stats.followers.toLocaleString('en-US')}</StatValue>
        </Stat>
        <Stat>
          <StatName>Views</StatName>
          <StatValue>{stats.views.toLocaleString('en-US')}</StatValue>
        </Stat>
        <Stat>
          <StatName>Likes</StatName>
          <StatValue>{stats.likes.toLocaleString('en-US')}</StatValue>
        </Stat>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
