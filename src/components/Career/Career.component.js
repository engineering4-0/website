import {
    ExpandableTile,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent,
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
                        <p style={{ fontWeight: 600 }}>Role: Web Developer</p>
                        <p>Responsibilities:</p>
                        
                    </div>
                </TileBelowTheFoldContent>
            </ExpandableTile>
        </>
    );
};

export default Career;