import { useState } from "react";
import {
    Search,
    Tile
} from '@carbon/react';

const SearchMember = ({ members }) => {
    const [searchText, setSearchText] = useState("");

    const onSearchHandler = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <>
            <h3>Search Members of Engineering 4.0</h3>
            <hr></hr>
            <Search
                closeButtonLabelText="Clear search input"
                id="search-playground-1"
                labelText="Label text"
                placeholder="Placeholder text"
                role="searchbox"
                value={searchText}
                size="md"
                type="text"
                onChange={onSearchHandler}
            />
            <br></br>
            {members
                .filter(member => {
                    if (member.email?.includes(searchText)
                        || member.first?.includes(searchText)
                        || member.last?.includes(searchText)) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .map((member, index) => (
                    <div style={{ marginBottom: "1em" }}>
                        <Tile id="tile-1" key={index}>
                            {member.email}<br></br>
                            {member.first}, {member.last}
                        </Tile>
                    </div>
                ))
            }

        </>
    );
}

export default SearchMember;