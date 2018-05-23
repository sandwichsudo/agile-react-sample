import React from 'react';
import PropTypes from 'prop-types';

const AgileResultsList = ({ results }) => (
  <table>
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>p/kWh</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => <tr key={result.valid_from}>
        <td>{new Date(result.valid_from).toString()}</td>
        <td>{new Date(result.valid_to).toString()}</td>
        <td>{result.value_inc_vat}</td>
        </tr>)}
    </tbody>
  </table>
);

AgileResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default AgileResultsList;
