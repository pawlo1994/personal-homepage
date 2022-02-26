import styled, { css } from "styled-components";
import { ReactComponent as darkModeSwitchButton } from "../DarkModeSwitch/darkTheme.svg";

export const DarkModeSwitchLabel = styled.span`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax})
    {
        display: none;
    }
`;

export const DarkModeSwitchButton = styled.button`
    position: absolute;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    border: none;
    background-color: unset;
    right: 20px;
    top: 20px;

    &:hover{
        cursor: pointer;
    }
`
export const DarkModeSwitchIconField = styled.span`
    display: flex;
    align-items: center;
    width: 46px;
    background-color: ${({ theme }) => theme.color.darkModeIconFieldColor};
    padding: 2px 2px;
    border: 1px solid ${({ theme }) => theme.color.slateGray};
    border-radius: 30px;
`;

export const DarkModeSwitchIcon = styled(darkModeSwitchButton)`
    background-color: ${({ theme }) => theme.color.slateGray};
    fill: ${({ theme }) => theme.color.darkModeIconColor};
    border-radius: 50%;
    padding: 3px;
    width: 20px;
    height: 20px;
    transition: transform 0.3s;

    ${({ dark }) => dark && css`
        transform: translateX(20px);
    `}
    `;