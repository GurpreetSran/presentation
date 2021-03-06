import React from 'react';
import DataTable from 'react-data-table-component';

const darkTheme = {
  title: {
    fontSize: '22px',
    fontColor: '#FFFFFF'
  },
  contextMenu: {
    backgroundColor: '#E91E63',
    fontColor: '#FFFFFF'
  },
  header: {
    fontSize: '12px',
    fontColorActive: 'FFFFFF',
    fontColor: '#FFFFFF'
  },
  rows: {
    fontColor: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, .12)',
    hoverFontColor: 'black',
    hoverBackgroundColor: 'rgba(0, 0, 0, .24)'
  },
  cells: {
    cellPadding: '48px'
  },
  pagination: {
    fontSize: '13px',
    fontColor: '#FFFFFF',
    buttonFontColor: '#FFFFFF',
    buttonHoverBackground: 'rgba(255, 255, 255, .12)'
  },
  expander: {
    fontColor: '#FFFFFF',
    expanderColor: '#FFFFFF'
  }
};

const Table = ({ data, columns }) => {
  if (!data) {
    return 'Loading ...';
  }
  const addRowNumbers = data.map((row, index) => {
    row.index = index + 1;
    return row;
  });

  return (
    <DataTable
      className="dataTable"
      customTheme={darkTheme}
      columns={columns}
      data={addRowNumbers}
    />
  );
};

export default Table;
