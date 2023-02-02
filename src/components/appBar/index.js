import { Toolbar, AppBar } from './styles'

const LayoutAppBar = props => {
  const { settings, verticalAppBarContent: userVerticalAppBarContent, theme } = props
  const { contentWidth } = settings

  return (
    <AppBar theme={theme}>
      <Toolbar theme={theme} contentWidth={contentWidth}>
        {(userVerticalAppBarContent && userVerticalAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
