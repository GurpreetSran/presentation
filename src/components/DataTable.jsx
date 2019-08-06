import React from 'react';
import DataTable from 'react-data-table-component';

const data = [
  { id: 1, title: 'Conan the Barbarian', year: '1982' },
  { id: 2, title: 'Conan the Barbarian', year: '1982' },
  { id: 3, title: 'Conan the Barbarian', year: '1982' },
  { id: 4, title: 'Conan the Barbarian', year: '1982' },
  { id: 5, title: 'Conan the Barbarian', year: '1982' },
  { id: 6, title: 'Conan the Barbarian', year: '1982' },
  { id: 7, title: 'Conan the Barbarian', year: '1982' }
];

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true
  }
];

const Table = () => <DataTable columns={columns} data={data} />;

export default Table;
