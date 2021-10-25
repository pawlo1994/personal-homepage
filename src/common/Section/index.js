import { StyledSection, SectionHeader, SectionList, SectionListItem } from "./styled";

export const Section = ({ header, listContent }) => {
    return (
        <StyledSection>
            <SectionHeader>
                {header}
            </SectionHeader>
            <SectionList>
                {listContent.map((listItem, id) =>
                    <SectionListItem key={id}>
                        {listItem}
                    </SectionListItem>
                )}
            </SectionList>
        </StyledSection>
    );
};