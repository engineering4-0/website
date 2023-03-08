import {
    ExpandableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent,
    UnorderedList,
    ListItem,
} from '@carbon/react';

const Career = () => {

    return (
        <>
            <ExpandableTile style={{ marginBottom: "2em" }}
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false}>
                <TileAboveTheFoldContent>
                    <div style={{ height: '64px', fontSize: "1.5em" }}>
                        Tech Team
                    </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                    <div style={{ marginLeft: "2em" }}>
                        <p style={{ fontWeight: 600 }}>Role: Web Developer</p><br></br>
                        <p>Responsibilities:</p>
                        <UnorderedList>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of React (Optional)
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Have an understading of HTML, CSS and Javascript
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of GitHub
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Having a great sense of humour is always a plus (Optional)
                            </ListItem>
                        </UnorderedList>
                    </div>
                </TileBelowTheFoldContent>
            </ExpandableTile>

            {/* <ExpandableTile style={{ marginBottom: "2em" }}
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false}>
                <TileAboveTheFoldContent>
                    <div style={{ height: '64px', fontSize: "1.5em" }}>
                        Treasurer Team
                    </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                    <div style={{ marginLeft: "2em" }}>
                        <p style={{ fontWeight: 600 }}>Role: Data Handler</p><br></br>
                        <p>Responsibilities:</p>
                        <UnorderedList>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of React (Optional)
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Have an understading of HTML, CSS and Javascript
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of GitHub
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Having a great sense of humour is always a plus (Optional)
                            </ListItem>
                        </UnorderedList>
                    </div>
                </TileBelowTheFoldContent>
            </ExpandableTile>

            <ExpandableTile style={{ marginBottom: "2em" }}
                tabIndex={0}
                tileCollapsedIconText="Interact to Expand tile"
                tileExpandedIconText="Interact to Collapse tile"
                tileMaxHeight={0}
                tilePadding={0}
                light={false} expanded={false}>
                <TileAboveTheFoldContent>
                    <div style={{ height: '64px', fontSize: "1.5em" }}>
                        Operational Team
                    </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                    <div style={{ marginLeft: "2em" }}>
                        <p style={{ fontWeight: 600 }}>Role: Data Handler</p><br></br>
                        <p>Responsibilities:</p>
                        <UnorderedList>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of React (Optional)
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Have an understading of HTML, CSS and Javascript
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Basic knowledge of GitHub
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Having a great sense of humour is always a plus (Optional)
                            </ListItem>
                        </UnorderedList>
                    </div>
                </TileBelowTheFoldContent>
            </ExpandableTile> */}
        </>
    );
};

export default Career;