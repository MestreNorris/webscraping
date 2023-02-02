import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Drawer from '../../default/Drawer'
import VerticalNavItems from '../verticalNavItems'
import VerticalNavHeader from '../verticalNavHeader'
import { Box, BoxContainer, List } from './styles'

const Navigation = props => {
  const {
    theme,
    themeConfig,
    hidden,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent
  } = props

  const [groupActive, setGroupActive] = useState([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState([])

  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer theme={theme} {...props}>
      <VerticalNavHeader theme={theme} themeConfig={themeConfig} {...props} />
      <BoxContainer>
        <ScrollWrapper>
          {beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null}
          <Box>
            {userVerticalNavMenuContent ? (
              userVerticalNavMenuContent(props)
            ) : (
              <List>
                <VerticalNavItems
                  theme={theme}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
          </Box>
        </ScrollWrapper>
      </BoxContainer>
      {afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null}
    </Drawer>
  )
}

export default Navigation
