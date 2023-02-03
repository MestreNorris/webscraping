import VerticalNavLink from './verticalNavLink'
import VerticalNavSectionTitle from './verticalNavSectionTitle'

const resolveNavItemComponent = item => {
  if (item.sectionTitle) return VerticalNavSectionTitle

  return VerticalNavLink
}

const VerticalNavItems = props => {
  const { verticalNavItems, theme, themeConfig } = props

  const RenderMenuItems = verticalNavItems?.map((item, index) => {
    const TagName = resolveNavItemComponent(item)

    return <TagName {...props} key={index} item={item} theme={theme} themeConfig={themeConfig} />
  })

  return RenderMenuItems
}

export default VerticalNavItems
