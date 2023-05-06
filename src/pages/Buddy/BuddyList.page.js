import { Column, Grid } from '@carbon/react';
import './Buddy.style.css';
import BuddyTable from '../../components/BuddyTable/BuddyTable.component';

const BuddyListPage = () => {
  
  return (
    <div style={{ backgroundColor: "#266382", height: "100vh" }}>
      <Grid style={{ paddingTop: "6em" }}>
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