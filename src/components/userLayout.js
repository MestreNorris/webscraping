import useMediaQuery from './window/useMediaQuery'
import VerticalNavItems from './navegation/navigationLinks'
import VerticalAppBarContent from './appBarContent.js/index.js'
import VerticalLayout from './verticalLayout'

const UserLayout = ({ children }) => {
  const { settings, saveSettings, theme, themeConfig } = children.props
  const hidden = useMediaQuery(`(max-width: ${theme.breakpoints.values.lg}px)`)

  return (
    <VerticalLayout
      theme={theme}
      hidden={hidden ? true : false}
      settings={settings}
      themeConfig={themeConfig}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()}
      verticalAppBarContent={props => (
        <VerticalAppBarContent
          theme={theme}
          themeConfig={themeConfig}
          hidden={hidden ? true : false}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default UserLayout
