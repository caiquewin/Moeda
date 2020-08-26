import styled, { keyframes, css } from 'styled-components';
export const Button = styled.button`
background-color: #f4511e;
  border: none;
  border-radius:3px;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  outline:none;
  cursor: pointer;

  :hover {opacity: 1}
`;

export const Div =styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#ffff;
max-width:80vh;
min-width:80vh;
margin-left:20%;
margin-top:20%;
flex-direction:column;

`

// estilo input
export const InputForm = styled.input`
border-radius:3px;
min-width:25vh;
min-height:2vw;
border-color:#e37b5b;
outline:none;
box-shadow:1px 1px 2px rgba(0,0,0,0.5);
flex-grow:50;
border:1px solid #e37b5b;
:hover{
  border-color:#b86349;
}
`
// estilo espaçamento
