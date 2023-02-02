import {
    Grid, Column, ClickableTile
} from '@carbon/react';
import './BoardMember.style.css';

const BoardMembers = () => {
    return (<div style={{ marginTop: "8em", marginBottom: "6em" }}>
        <Grid style={{ marginBottom: "2em" }}>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={14} md={8} sm={4}>
                <p className='heading-02 member-heading'>
                    Meet the board members and connect with us!
                </p>
            </Column>
            <Column lg={1} md={0} sm={0}></Column>
        </Grid>
        <Grid style={{ marginBottom: "2em" }}>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Varun
                </ClickableTile>
            </Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Varsha
                </ClickableTile>
            </Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Irene
                </ClickableTile>
            </Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Kishok
                </ClickableTile>
            </Column>
            
            <Column lg={1} md={0} sm={0}></Column>
        </Grid>
        <Grid>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Waseem
                </ClickableTile>
            </Column>
            <Column lg={3} md={4} sm={2}>
                <ClickableTile href="#">
                    Raj
                </ClickableTile>
            </Column>
            <Column lg={1} md={0} sm={0}></Column>
        </Grid>
    </div>);
};

export default BoardMembers;