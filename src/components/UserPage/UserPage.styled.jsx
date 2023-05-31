import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';
 import { Field ,ErrorMessage} from 'formik'

export const NavLinkStyled = styled(NavLink)`
cursor: pointer;
   border: none;
   width: 129px;
   height: 40px;
   border-radius: 40px;
 background: #54ADFF;
 color: #fff;
font-weight: 700;
font-size: 16px;
padding: 9px 16px;
margin-left: auto;
:hover{
   background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)
}
`

 export const Header = styled.h2`

font-weight: 500;
font-size: 20px;
margin: 0;

  @media screen and (min-width: 768px){
    font-size: 28px;
}
@media screen and (min-width: 1280px){
 
}
/* margin-bottom: 18px; */

    
 `
 export const UserPageContainer = styled.div`
    margin: auto;
    width: 280px;

padding: 100px 0 137px;
@media screen and (min-width: 768px){
    width: 704px;
    padding: 140px 0 121px;
}
@media screen and (min-width: 1280px){
 width:1248px;
 display: flex;
 padding: 135px 0 121px;
}
 `


export const ContainerUser = styled.div`
width:100%;
/* border: 1px solid red; */
border-radius: 20px;
padding: 20px 8px 25px;
margin-top: 18px;
background-color: #ffff;
position: relative;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
@media screen and (min-width: 768px){
    margin-top: 24px;
    border-radius: 40px;
    padding: 20px 20px 20px;
}
@media screen and (min-width: 1280px){
 width:395px;
}

`
export const ContainerPet = styled.li`
width:100%;
list-style: none;
/* border: 1px solid red;  */
border-radius: 20px;
padding: 16px 20px 40px;
margin-bottom: 20px;
background-color: #ffff;
:last-child{
    margin-bottom: 0;
}
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

@media screen and (min-width: 768px){
   padding: 20px;
   display: flex;
   min-height: 256px;
   border-radius: 40px;

}
@media screen and (min-width: 1280px){
   width: 820px;

}
`

export const UserImg = styled.img`
    width: 182px;
    height: 182px;
    border-radius: 40px;
margin: auto;
@media screen and (min-width: 768px){
   
}
`

export const InputPhoto = styled(Field) `
 /* display:  none; */

position: absolute;
cursor: pointer;
top:220px;
left:85px;
height: 30px;
appearance: none;
opacity: 0;

::file-selector-button{
    display: none;
}
@media screen and (min-width: 768px){
    left:40px;
    top:200px;
}
@media screen and (min-width: 1280px){
    top:220px;
left:145px;
}
`



export const ButtonPhoto = styled.button`
position: relative;
font-weight: 400;
font-size: 12px;
display: flex;
align-items: center;

/* margin-top: 15px; */
cursor: pointer;
/* display: block; */
    margin: 15px auto 0;
    svg{
    color: #54ADFF;
    :hover{
        color: orange;
    }
}
`

export const ButtonPhotoEdit = styled.div`

font-weight: 400;
font-size: 12px;
display: flex;
align-items: center;
pointer-events: none;
justify-content: center;

/* margin-top: 15px; */
cursor: pointer;
/* display: block; */
    margin: 15px auto 0;
    svg{
    color: #54ADFF;
    :hover{
        color: orange;
    }
}
`





// export const ButtonPhoto = styled.button`
//     border: none;
//     background-color: inherit;

// font-weight: 400;
// font-size: 12px;
// display: flex;
// align-items: center;
// /* margin-top: 15px; */
// cursor: pointer;
// /* display: block; */
//     margin: 15px auto 0;
//     svg{
//     color: #54ADFF;
//     :hover{
//         color: orange;
//     }
// }
// `
export const Label = styled.div`

font-weight: 600;
font-size: 14px;
@media screen and (min-width: 768px){
    font-size: 18px;
}

`
export const LabelPet = styled.span`

font-weight: 700;
font-size: 14px;
@media screen and (min-width: 1280px){
    font-size: 16px;
}
`
 
 export const Input = styled(Field)`
 all: unset;
 width: 80%;
 height: 100%;
border: none;
background-color: transparent;
font-weight: 400;
font-size: 12px;
padding: 0;

@media screen and (min-width: 768px){
    font-size: 16px;
}
 `
export const DataItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  margin-bottom: 12px;
  /* position: relative; */
  :last-child{
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px){
   margin-right: 309px;
   margin-bottom: 8px;
   :last-child{
    margin-bottom: 13px;
  }}
  @media screen and (min-width: 1280px){
    margin-right: 0;
    :last-child{
    margin-bottom: 20px;
    }
}

`

export const InputContainer = styled.div`
   

    height: 20px;
 width: 190px;
 height: 28px;
 border-radius: 20px;
 border: 1px solid #54ADFF;
 padding: 6px 12px;
 display:flex;
 justify-content: space-between;
 align-items: center;
 @media screen and (min-width: 768px){
    width: 255px;
    height: 32px;
}
svg{
    color: #54ADFF;
    :hover{
        color: orange;
    }
}

`

 export const Error= styled(ErrorMessage)`
     background-color: #54ADFF;
     color: #fff;
     border-radius: 4px;
     font-size: 10px;
     width: fit-content;
     padding: 1px;
     margin:-13px 0 0 auto;
     @media screen and (min-width: 768px){
        margin:-10px  0 0 105px;
        
   
}

    
 `
 export const  ButtonEdit= styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
 padding:6px 0 0 ;
   
 `
 export const ButtonLogout = styled.button`
 border: none;
 background: transparent;
 display: flex;
 align-items: center;
font-weight: 500;
font-size: 16px;
line-height: 22px;
color: #888888;
cursor: pointer;
:hover{
        color: orange;
    }
svg{
    color: #54ADFF;
   }
`
export const ButtonAddPet = styled.button`
cursor: pointer;
   border: none;
   width: 129px;
   height: 40px;
   border-radius: 40px;
 background: #54ADFF;
 color: #fff;

font-weight: 700;
font-size: 16px;
padding: 9px 16px;
margin-left: auto;
:hover{
   background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)
}
`

export const MyPetsHeaderContainer = styled.div`
   display: flex;
 justify-content: space-between;
 align-items: baseline;
 margin:40px 0 24px;
 @media screen and (min-width: 768px){
 margin:40px 0 20px;
};
@media screen and (min-width: 1280px){
 margin:0 0 16px;
}
`

export const InfoPet = styled.div `

`
export const InfoPetItem = styled.div `
 /* border: solid 1px orange; */
 display: block;
 margin-bottom: 12px;
 position: relative;
 :last-child{
     margin-bottom: 0;
 }
 @media screen and (min-width: 768px) {
     width: 515px;
 margin-bottom: 16px;
 }
 @media screen and (min-width: 1280px){
 width: 580px;
}
`


export const InfoPetText = styled.span `

font-weight: 400;
font-size: 14px;
line-height: 19px;
margin-left: 8px;
@media screen and (min-width: 1280px){
 font-size: 16px;
}
`


export const PetsItemUl = styled.ul `
 margin: 0;
 padding: 0;
`
export const PetImg = styled.img `
 width: 240px;
height: 240px;
border-radius: 20px;
margin: 0 auto 20px;
@media screen and (min-width: 768px){
 
 width: 128px;
height: 128px;
margin:0 20px 0 0;
}
@media screen and (min-width: 1280px){
 width: 161px;
height: 161px;
}
`

export const ButtonDeletePet = styled.button `
cursor: pointer;
 position: absolute;
right: 0;
top:-5px;
border: none;
background: transparent;
svg{
    color: #54ADFF;
    :hover{
        color: orange;
    }}
`

export const PhotoContainer = styled.div `
text-align: center;

margin-bottom: 22px;
 @media screen and (min-width: 768px){
 position: absolute;
 right: 0;
 margin: 0 56px 0 0;
 
 @media screen and (min-width: 1280px){
position: static;
margin: auto;

margin-bottom: 28px;
}
}
`
export const DataContainer = styled.div `
 
`

export const UserBlock = styled.div `
@media screen and (min-width: 1280px)
{ margin-right: 32px;}
`

export const PetBlock = styled.div`
`



// export const styles = styled. `
 
// `

// export const styles = styled. `
 
// `
// export const styles = styled. `
 
// `

// export const styles = styled. `
 
// `