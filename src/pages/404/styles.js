import styled from 'styled-components'

export const BlankLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const BoxLayoutWrapper = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  padding-top: 2rem;
`

export const Box = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`

export const Title = styled.h1`
  @media (min-width: 1200px) {
    font-size: 5.9983rem;
  }
  @media (min-width: 900px) {
    font-size: 5.3556rem;
  }
  @media (min-width: 600px) {
    font-size: 4.7129rem;
  }
  margin: 0;
  font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 300;
  font-size: 3.5rem;
  line-height: 1.167;
`

export const SubTitle = styled.h5`
  @media (min-width: 1200px) {
    font-size: 1.4993rem;
  }
  @media (min-width: 900px) {
    font-size: 1.4993rem;
  }
  @media (min-width: 600px) {
    font-size: 1.3118rem;
  }
  margin: 0;
  font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.334;
  margin-bottom: 0.25rem;
  font-size: 1.5rem !important;
`

export const Description = styled.p`
  margin: 0;
  font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
`

export const Image = styled.img`
  height: 350px;
  margin-bottom: 1.25rem;
`

const BlankLayout = ({ children }) => {
  return (
    <BlankLayoutWrapper>
      <BoxLayoutWrapper>{children}</BoxLayoutWrapper>
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
