import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  text-align: left;

  th {
    border-right: 1px solid rgba(0, 0, 0, 0.16);
    padding-right: 1em;
    margin: 0;
    padding-bottom: 0.5em;
  }

  td {
    padding-left: 1em;
    padding-bottom: 0.5em;
    margin: 0;
  }

  tr:last-child td,
  tr:last-child th {
    padding-bottom: 0;
  }
`;

const RenderedTable = ({ data, headers }) => (
  <Table cellSpacing={0}>
    <tbody>
      {
        headers.map((o) => {
          const key = Object.keys(o)[0];
          const headerText = o[key];
          const items = data[key];
          return (
            <tr>
              <th>{ headerText }</th>
              <td>{ items.join(', ') }</td>
            </tr>
          );
        })
      }
    </tbody>
  </Table>
);

/* eslint-disable react/forbid-prop-types */
RenderedTable.propTypes = {
  data: PropTypes.object.isRequired,
  headers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default RenderedTable;
