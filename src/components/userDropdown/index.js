import { useState, Fragment, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconConfig, IconInfo, IconAPI, ButtonDropdownOptions } from '../icons'
import { Box, MenuDropdown, MenuDropdownItem, MenuDropdownList } from './styles'

const UserDropdown = ({ theme }) => {
  const [open, setOpen] = useState(false)
  const handleDropdownClose = () => setOpen(false)

  useEffect(() => {
    const body = document.querySelector('body'),
      html = document.querySelector('html')

    open
      ? ((body.style.overflow = 'hidden'), (html.style.marginRight = '20px'))
      : ((body.style.overflow = 'auto'), (html.style.marginRight = '0'))

    function handleClick(e) {
      if (open) {
        const el = e.target.closest('div')
        el !== null ? !el.classList.contains('dropdown') && setOpen(false) : setOpen(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })

  return (
    <Fragment>
      <ButtonDropdownOptions theme={theme} aria-haspopup='true' onClick={() => setOpen(!open)} />
      <MenuDropdown isOpen={open} theme={theme} className={'dropdown'}>
        <MenuDropdownList onClick={() => handleDropdownClose()}>
          <Link passHref legacyBehavior href='/webscrapping'>
            <MenuDropdownItem theme={theme}>
              <Box theme={theme}>
                <IconAPI theme={theme} />
                API
              </Box>
            </MenuDropdownItem>
          </Link>
          <Link passHref legacyBehavior href='/config'>
            <MenuDropdownItem theme={theme}>
              <Box theme={theme}>
                <IconConfig theme={theme} />
                Configurações
              </Box>
            </MenuDropdownItem>
          </Link>
          <Link passHref legacyBehavior href='/info'>
            <MenuDropdownItem theme={theme}>
              <Box theme={theme}>
                <IconInfo theme={theme} />
                Informações
              </Box>
            </MenuDropdownItem>
          </Link>
        </MenuDropdownList>
      </MenuDropdown>
    </Fragment>
  )
}

export default UserDropdown
