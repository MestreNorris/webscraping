import { ListSubheader, DividerContent, Divider, TypographyHeaderText } from './styles'

const VerticalNavSectionTitle = props => {
  const { item, theme } = props

  return (
    <ListSubheader theme={theme}>
      <Divider theme={theme}>
        <DividerContent>
          <TypographyHeaderText theme={theme}>{item.sectionTitle}</TypographyHeaderText>
        </DividerContent>
      </Divider>
    </ListSubheader>
  )
}

export default VerticalNavSectionTitle
