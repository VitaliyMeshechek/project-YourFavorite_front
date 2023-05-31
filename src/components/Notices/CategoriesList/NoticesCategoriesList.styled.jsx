import styled from '@emotion/styled'

export const CategoriesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        gap:  24px 32px;
        margin-top: 42px;
    }
`