import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuNavLink, MenuItemTextMetaWrapper, ListItem, ListItemIcon, Typography } from './styles'
import UserIcon from '../UserIcon'
import { handleURLQueries } from '../routerLinks/handleURL'

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility, theme, themeConfig }) => {
  const router = useRouter()
  const IconTag = item.icon

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true
    }

    return false
  }

  return (
    <ListItem>
      <Link passHref legacyBehavior href={item.path === undefined ? '/' : `${item.path}`}>
        <MenuNavLink
          theme={theme}
          className={isNavLinkActive() ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={e => {
            item.path === undefined && e.preventDefault().stopPropagation()
            navVisible && toggleNavVisibility()
          }}
        >
          <ListItemIcon theme={theme}>
            <UserIcon icon={IconTag} />
          </ListItemIcon>
          <MenuItemTextMetaWrapper themeConfig={themeConfig}>
            <Typography themeConfig={themeConfig}>{item.title}</Typography>
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  )
}

export default VerticalNavLink
