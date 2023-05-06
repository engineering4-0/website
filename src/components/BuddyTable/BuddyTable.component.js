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
  Tag,
  DataTableSkeleton,
} from '@carbon/react';
import React, { useEffect, useState } from 'react';
import BuddyRequestModal from '../Modal/BuddyRequestModal.component';
import axios from 'axios';

const BuddyTable = () => {

  const [isRequstModalOpen, setIsRequestModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buddyRequests, setBuddyRequests] = useState([]);
  const scriptUrl = process.env.REACT_APP_FIREBASE_BUDDY_DATABASE;

  const getBuddyRequests = async () => {
    setLoading(true);
    await axios.get(scriptUrl)
      .then(res => {
        const transformedData = transformToCarbonFormat(res.data);
        return transformedData;
      })
      .then(data => {
        setBuddyRequests(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getBuddyRequests();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRequstModalOpen]);

  const handleModalClose = () => {
    setIsRequestModalOpen(false);
  };

  const transformToCarbonFormat = async (data) => {
    if (data === null) return [];
    return Object.entries(data).map(([id, data], index) => ({
      id: String.fromCharCode(97 + index),
      name: data.name || 'Unknown',
      date: new Date(data.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      techList: data.requiredSkills || [],
      description: data.description || '',
      email: data.email || ''
    }));
  };

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

  if (loading) {
    return (
      <div>
        <DataTableSkeleton headers={headers} />
        <br />
      </div>
    );
  }


  return (
    <>
      <BuddyRequestModal
        open={isRequstModalOpen}
        handleModalClose={handleModalClose} />
      <DataTable
        rows={buddyRequests}
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
            description="If are intrested in working with someone or on a project listed here, send out an email to the person who created the post. If you want to take down your buddy request, Please contact the technical team.">
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
