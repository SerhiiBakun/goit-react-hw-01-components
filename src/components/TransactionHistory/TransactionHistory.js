import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { TableHead, BodyRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box as="table" m={4} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Box as="thead" color="white" bg="#2ba3d3">
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </Box>
      <Box as="tbody" textAlign="center">
        {items.map(item => {
          return (
            <BodyRow key={item.id}>
              <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </BodyRow>
          );
        })}
      </Box>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
