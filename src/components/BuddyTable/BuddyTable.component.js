import { Add } from '@carbon/icons-react';
import {
  Button,
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
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Tag
} from '@carbon/react';
import React, { useState } from 'react';
import BuddyRequestModal from '../Modal/BuddyRequestModal.component';

const BuddyTable = () => {

  const [isRequstModalOpen, setIsRequestModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsRequestModalOpen(false);
  };

  const rows = [
    {
      id: 'a',
      name: 'Varsha Sri SelvaKumar',
      date: '26th August 23',
      techList: ["Blockchain", "Mobile Developer"],
      description: 'Hey everyone, I\'ve been working on a mobile app idea for the past few months, but I need some help to bring it to the next level. The app is focused on healthy living and fitness, and I\'m looking for a collaborator with experience in app development and design. If you have a passion for health and fitness and want to help me create something awesome, shoot me a message and let\'s talk more about it!',
      email: 'spongebob@uwindsor.ca',
    },
    {
      id: 'b',
      name: 'Waseem',
      date: '24th August 23',
      description: 'bada',
      email: 'spongebob@uwindsor.ca',
    },
    {
      id: 'c',
      name: 'Ameya Ade',
      date: '20th August 23',
      description: 'csaa',
      email: 'spongebob@uwindsor.ca',
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
    {
      key: 'techList',
      header: 'I need people who know',
    },
    {
      key: 'description',
      header: 'Description',
    },
    {
      key: 'email',
      header: 'Email',
    },

  ];

  return (
    <>
      <BuddyRequestModal
        open={isRequstModalOpen}
        handleModalClose={handleModalClose} />
      <DataTable
        rows={rows}
        headers={headers} >
        {({
          rows,
          headers,
          getTableProps,
          getHeaderProps,
          getRowProps,
          onInputChange
        }) => (
          <TableContainer
            title="List of people looking for project buddies"
            description="If are intrested in working with someone or on a project listed here, send out an email to the person who created the post.">
            <TableToolbar>
              <TableToolbarContent>
                <TableToolbarSearch onChange={onInputChange} />
                <Button
                  renderIcon={Add}
                  iconDescription="Add"
                  onClick={() => setIsRequestModalOpen(true)}>
                  I need a buddy!
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  {headers.slice(0, 3).map((header) => (
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
                      {row.cells.slice(0, 3).map((cell) =>
                        (typeof cell.value != 'object') ?
                          (
                            <TableCell key={cell.id}>{cell.value}</TableCell>
                          ) : (
                            <TableCell key={cell.id}> {
                              cell.value.map((tech, index) => (
                                <Tag
                                  key={index + cell.id}
                                  className="some-class"
                                  type="blue"
                                  size="md"
                                  title="Clear Filter" >
                                  {tech}
                                </Tag>
                              ))}
                            </TableCell>
                          )
                      )}
                    </TableExpandRow>
                    {row.isExpanded && (
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <div style={{ paddingTop: "1em", paddingBottom: "1em" }}>
                        <h6 style={{ paddingBottom: "0.5em" }}>Project Details</h6>
                        <div>{row.cells[3].value}</div>
                        </div>
                        <div style={{ paddingTop: "1em", paddingBottom: "1em" }}>
                        <h6 style={{ paddingBottom: "0.5em" }}>Contact</h6>
                        <div>{row.cells[4].value}</div>
                        </div>
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
