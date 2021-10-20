import { StyledSection, SectionHeader, SectionList } from "./styled";

export const Section = ({ header, listContent }) => {
    return (
        <StyledSection>
            <SectionHeader>
                {header}
            </SectionHeader>
            <SectionList>
                {listContent}
            </SectionList>
        </StyledSection>
    );
};