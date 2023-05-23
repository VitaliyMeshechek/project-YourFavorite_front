import styled from '@emotion/styled'

export const Thumb = styled.div`
    position: relative;
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
    padding: 0 8px;
`

export const Location = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 4px;
    width: 80px;
    height: 28px;
    background: #CCE4FB;
    border-radius: 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.04em;
    color: #111111;
    
    svg {
        width: 24px;
        height: 24px;
        color: #54ADFF;
        margin-right: 4px;
    }

`