import { LogoApp } from '../icons'
import { MenuHeaderWrapper, LinkLogo, LogoTitle } from './styles'

const VerticalNavHeader = props => {
  const { verticalNavMenuBranding: userVerticalNavMenuBranding, theme, themeConfig } = props

  return (
    <MenuHeaderWrapper theme={theme}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <LinkLogo href='/' passHref legacyBehavior>
          <LogoApp theme={theme} />
          <LogoTitle theme={theme}>{themeConfig.templateName}</LogoTitle>
        </LinkLogo>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
