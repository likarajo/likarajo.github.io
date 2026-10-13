import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const AppButton = styled(MuiButton)({
    borderRadius: 20,
    backgroundColor: "black",
    fontFamily: `"Georgia", serif`,
    textTransform: "none",
    minHeight: 44,
    "&:hover": {
        backgroundColor: "black !important",
    },
    "@media (hover: hover) and (pointer: fine)": {
        "&:hover": {
            backgroundColor: "grey !important",
        },
    },
    "&.Mui-disabled": {
        backgroundColor: "rgba(0, 0, 0, 0.12) !important",
    },
});

export default AppButton
