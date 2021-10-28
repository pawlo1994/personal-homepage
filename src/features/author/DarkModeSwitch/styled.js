import styled from "styled-components";

export const DarkModeSwitchLabel = styled.span`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        display: none;
    }
`;

export const DarkModeSwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 0;
`

export const StyledDarkModeSwitch = styled.button`
    align-items: center;
    justify-content: center;
    background-color: unset;
    border: none;
    width: 47,06px;
    height: 25,07px;
    right: 0;
    top: 0;

    &:hover{
        cursor: pointer;
    }
    `;