import styled from "styled-components";

export const Card = styled.div`
     box-shadow :0 2px 7px #dfdfdf;
     padding:10px;
     margin:10px;
     width:100%;
     height:23vw;
     border: gray;
     background-color: white;
`;

export const CardImg = styled.img`
     width:100%;
     height:12vw;
     object-fit: contain;
`;

export const CardProductName = styled.a`
     color:black;
     text-align :center;
     font-weight :400;
     font-size :20px;
     display:block;
     text-transform:uppercase;
     transition:0.3s;
     margin-bottom :2px;
     text-decoration: none !important;
     cursor: pointer;
     :hover{
          color: plum;
     }
`;

export const CardProductDescription = styled.p`
     text-align :center;
     font-size :15px;
     line-height :22px;
      margin-bottom:18px;
      color:black;
`;

export const CardProductBottomDetails = styled.div`
     border-top :1px solid #eee;
     padding-top:10px;
     color:black;
     font-weight:400;
     padding-left:10px;
     padding-bottom:10px;
     display:flex;
     align-items:center;
`;