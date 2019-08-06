import React from 'react';
import DataTable from 'react-data-table-component';
import { data, columns } from '../data/table';

const Table = () => <DataTable columns={columns} data={data} />;

export default Table;
