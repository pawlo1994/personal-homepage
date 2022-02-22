import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode } from "../../../themeSlice";
import { DarkModeSwitchLabel, DarkModeSwitchWrapper, StyledDarkModeSwitch } from "./styled";
import { toggleDarkMode } from "../../../themeSlice";

export const DarkModeSwitch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    return (
        <DarkModeSwitchWrapper>
            <DarkModeSwitchLabel>dark mode {darkMode === true ? "on" : "off"}</DarkModeSwitchLabel>
            <StyledDarkModeSwitch
                dark={darkMode}
                onClick={() => dispatch(toggleDarkMode())} />
        </DarkModeSwitchWrapper>
    );
};