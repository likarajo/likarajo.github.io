import { ThemeProvider, createTheme } from '@mui/material/styles'

export const THEME = createTheme({
  typography: {
    fontFamily: `"Georgia", serif`,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400
  },
  components: {
    MuiButton: { styleOverrides: { root: { minHeight: 44, paddingLeft: 16, paddingRight: 16 } } },
    MuiIconButton: { styleOverrides: { root: { width: 44, height: 44 } } },
    MuiListItemButton: { styleOverrides: { root: { minHeight: 44 } } },
    MuiMenuItem: { styleOverrides: { root: { minHeight: 44 } } },
    MuiPaginationItem: { styleOverrides: { root: { minWidth: 44, minHeight: 44, fontSize: 16 } } },
    MuiInputBase: { styleOverrides: { input: { fontSize: 16 } } },
    MuiInputLabel: { styleOverrides: { root: { fontSize: 16 } } },
    MuiModal: { defaultProps: { disableScrollLock: true } }
  }
});

export default function Themed({ children }) {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>
}
