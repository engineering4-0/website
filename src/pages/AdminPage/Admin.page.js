import { Grid, Column } from "@carbon/react";
import { useEffect, useState } from "react";
import SearchMember from "../../components/SearchMember/SearchMember.component";
import axios from 'axios';

const AdminPage = () => {

    const [members, setMembers] = useState([]);
    const scriptUrl = process.env.REACT_APP_FIREBASE_USER_DATABASE;

    useEffect(() => {
        getMembers();
    });

    const getMembers = () => {
        axios.get(scriptUrl, {
            params: {
                orderBy: '"email"',
            }
        }).then(res => {
            if ((res.data
                && Object.keys(res.data).length === 0)) {
                console.log(res);
            } else {
                let memberList = [];
                for (var key in res.data) {
                    if (res.data.hasOwnProperty(key)) {
                        memberList.push(res.data[key]);
                    }
                }
                setMembers(memberList);
            }
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <>
            <div style={{ marginTop: "5em" }}>
                <Grid>
                    <Column lg={3} md={0} sm={0}></Column>
                    <Column lg={10} md={8} sm={4}>
                        <SearchMember members={members} />
                    </Column>
                    <Column lg={3} md={0} sm={0}></Column>
                </Grid>
            </div>
        </>
    )
}

export default AdminPage;