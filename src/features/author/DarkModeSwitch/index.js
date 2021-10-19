import { useSelector, useDispatch } from "react-redux";
import darkThemeOff from "./darkThemeOff.svg";
import darkThemeOn from "./darkThemeOn.svg";
import { selectDarkMode } from "../../../themeSlice";
import { DarkModeSwitchLabel, DarkModeSwitchWrapper, StyledDarkModeSwitch } from "./styled";
import { toggleDarkMode } from "../../../themeSlice";

export const DarkModeSwitch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    return (
        <DarkModeSwitchWrapper>
            <DarkModeSwitchLabel>dark mode {darkMode === true ? "on" : "off"}</DarkModeSwitchLabel>
            <StyledDarkModeSwitch onClick={() => dispatch(toggleDarkMode())}>
                <img src={darkMode ? darkThemeOn : darkThemeOff} alt="switch theme" />
            </StyledDarkModeSwitch>
        </DarkModeSwitchWrapper>
    );
};