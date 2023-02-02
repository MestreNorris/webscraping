import {
  Box,
  BoxLeft,
  BoxRight,
  IconButton,
  TextField,
  FormControl,
  InputSearch,
  InputFieldset,
  InputLogo,
  InputLegend
} from './styles'
import { LogoMenu, LogoSearch } from '../icons'
import ModeToggler from '../theme/modeToggler'
import UserDropdown from '../userDropdown'

const AppBarContent = props => {
  const { hidden, settings, saveSettings, toggleNavVisibility, theme } = props

  return (
    <Box>
      <BoxLeft>
        {hidden ? (
          <IconButton theme={theme} onClick={toggleNavVisibility}>
            <LogoMenu />
          </IconButton>
        ) : null}
        <TextField>
          <FormControl theme={theme}>
            <InputLogo theme={theme}>
              <LogoSearch />
            </InputLogo>
            <InputSearch type='text' />
            <InputFieldset theme={theme}>
              <InputLegend />
            </InputFieldset>
          </FormControl>
        </TextField>
      </BoxLeft>
      <BoxRight>
        <ModeToggler theme={theme} settings={settings} saveSettings={saveSettings} />
        <UserDropdown theme={theme} />
      </BoxRight>
    </Box>
  )
}

export default AppBarContent
