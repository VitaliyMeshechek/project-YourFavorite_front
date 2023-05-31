import styled from '@emotion/styled'

export const Title = styled.h1`
    margin-top: 90px;
    font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: #111111;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const TabletWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media screen and (min-width: 768px) {
      align-items: baseline;
      margin-top: 40px;
    }
`

