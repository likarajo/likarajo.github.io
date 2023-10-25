import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

const AppButton = styled(MuiButton)((props) => ({
    borderRadius: 20,
    backgroundColor: "black",
    fontFamily: `"Georgia", serif`,
    textTransform: "none",
    '&:hover': {
        backgroundColor: 'grey'
    }
}));

export default AppButton
