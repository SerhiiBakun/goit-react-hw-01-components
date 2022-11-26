import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Title, Stat, StatName, StatValue } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      bg="white"
      as="section"
      p={0}
      m={4}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      {title && <Title>{title.toUpperCase()}</Title>}
      <Box as="ul" display="flex" p={0} m={0}>
        {stats.map(stat => {
          return (
            <Stat key={stat.id}>
              <StatName>{stat.label}</StatName>
              <StatValue>{stat.percentage}%</StatValue>
            </Stat>
          );
        })}
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
