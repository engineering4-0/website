import { Button, Column, Grid } from '@carbon/react';
import './Buddy.style.css';
import BuddyTable from '../../components/BuddyTable/BuddyTable.component';
import { Add } from '@carbon/icons-react';

const BuddyListPage = () => {
  return (
    <div style={{ backgroundColor: "#266382", height: "100vh" }}>
      <Grid style={{ paddingTop: "4em" }}>
        <Column lg={{ span: 8, offset: 1 }} md={4} sm={2}>
          <div className='sub-heading'>List of people looking for project buddies</div>
        </Column>
        <Column lg={{ span: 2, offset: 12 }} md={{ span: 2, offset: 8 }} sm={2}>
          <Button renderIcon={Add} iconDescription="Add">I need a buddy </Button>
        </Column>
      </Grid>
      <Grid style={{ marginTop: "2em" }}>
      <Column lg={2} md={0} sm={0}></Column>
        <Column lg={12} md={8} sm={4}>
          <BuddyTable />
        </Column>
        <Column lg={2} md={0} sm={0}></Column>
      </Grid>
    </div>
  )
}

export default BuddyListPage;