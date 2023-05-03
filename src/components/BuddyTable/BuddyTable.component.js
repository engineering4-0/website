import { 
  DataTable, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableExpandHeader, 
  TableExpandRow, 
  TableExpandedRow, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@carbon/react';
import React from 'react';


const BuddyTable = () => {

  const rows = [
    {
      id: 'a',
      name: 'Varsha Sri SelvaKumar',
      date: '26th August 23',
    },
    {
      id: 'b',
      name: 'Waseem',
      date: '24th August 23',
    },
    {
      id: 'c',
      name: 'Ameya Ade',
      date: '20th August 23',
    },
  ];

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'date',
      header: 'Posted On',
    },
  ];

  return (
    <>
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <TableContainer>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                    {row.isExpanded && (
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <p>Aux squad rules</p>
                      </TableExpandedRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </>
  );
};

export default BuddyTable;