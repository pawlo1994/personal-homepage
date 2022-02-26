import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode } from "../../../themeSlice";
import { DarkModeSwitchLabel, DarkModeSwitchButton, DarkModeSwitchIcon, DarkModeSwitchIconField } from "./styled";
import { toggleDarkMode } from "../../../themeSlice";

export const DarkModeSwitch = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);
    return (
        <DarkModeSwitchButton
            onClick={() => dispatch(toggleDarkMode())}
        >
            <DarkModeSwitchLabel>dark mode {darkMode === true ? "on" : "off"}</DarkModeSwitchLabel>
            <DarkModeSwitchIconField>
                <DarkModeSwitchIcon
                    dark={darkMode}
                />
            </DarkModeSwitchIconField>
        </DarkModeSwitchButton>
    );
};