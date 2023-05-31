import styled from '@emotion/styled'


export const Thumb = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
height: 456px;
background: #FFFFFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 0px 0px 40px 40px;

@media screen and (min-width: 768px) {
    width: 336px;
}

@media screen and (min-width: 1280px) {
    width: 288px;
}
`

export const Photo = styled.img`
    width: 280px;
height: 288px;
object-fit: cover;

@media screen and (min-width: 768px) {
    width: 336px;
}

@media screen and (min-width: 1280px) {
    width: 288px;
}
`

export const Category = styled.p`
    position: absolute;
    top: 16px;
    left: 0;
    padding: 11px 17px;
    width: 126px;
    height: 32px;
    background: #CCE4FB;
    border-radius: 0px 16px 16px 0px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #111111;
`

export const TabsWrapper = styled.div`
    position: absolute;
    top: 248px;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 24px;
}

@media screen and (min-width: 1280px) {
    gap: 12px;
} 
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 4px;
    min-width: 80px;
    height: 28px;
    background: #CCE4FB;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: #111111;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    svg {
        width: 24px;
        height: 24px;
        color: #54ADFF;
        margin-right: 4px;
    }

    &:hover {
        color: #FEF9F9;
        background: #54ADFF;

        svg {
            color: inherit;
        }
    }

`

export const FavoriteBtn = styled.button`
position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
height: 40px;
background: #C5DFF6;
color: #54ADFF;
border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    svg {
        width: 22px;
        height: 22px;
        color: inherit;
    }

    &:hover, &.active {
        svg {
        fill: #54ADFF;
    }
    }

`

export const TrashBtn = styled.button`
    position: absolute;
    top: 68px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
height: 40px;
background: #C5DFF6;
color: #54ADFF;
border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    svg {
        width: 24px;
        height: 24px;
        color: inherit;
    }

    &:hover {
        background: #54ADFF;
        svg {
        color: #C5DFF6;
    }
`
export const Title = styled.h2`
display: inline-block;
margin-top: 20px;
padding: 0 29px 0 20px;
    font-weight: 700;
font-size: 24px;
line-height: 1.38;

color: #111111;

`

export const LoadMoreBtn = styled.button`
margin-top: 20px;
    display: flex;
justify-content: center;
align-items: center;
width: 248px;
height: 38px;
padding: 8px 28px;
border: 2px solid #54ADFF;
border-radius: 40px;
font-weight: 600;
font-size: 16px;
line-height: 1.38;
align-items: center;
letter-spacing: 0.04em;
color: #54ADFF;
background: transparent;
cursor: pointer;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    color: #FEF9F9;
    border: none;
}
`