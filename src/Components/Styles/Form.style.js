import styled from 'styled-components'



export const StyledFormWapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 20px;


`
export const StyledForm = styled.form`
width: 100%;
max-width: 700px;
padding: 80px;
background-color: #fff;
box-sizing: border-box;
border-radius: 10px;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
`
export const StyledFormInput = styled.input`
display: block;
width: 100%;
height: 40px;
font-size: 16px;
border-radius: 7px;
background-color: #eee;
margin: 10px 0;

&:focus{
    outline: none;
}
`
export const StyledFormFieldSet = styled.fieldset`
border: 1px solid #dddd;
padding: 10px;
border-radius: 5px;
margin: 10px 0;

legend{
    padding: 10px 0;
}
label{
    padding-right:20px;
}
input{
    margin-right:10px;
}
`
export const StyledFormTextArea = styled.textarea`
background-color: #eee;
width: 100%;
resize: none;
min-height: 100px;
font-size: 16px;
border-radius: 7px;
`
export const StyledFormError = styled.div`
color: red;
font-weight: 300;
margin: 0 0 20px 0;
`
export const StyledFormButton = styled.button`
display: block;
background-color: #f7797d;
color: #fff;
border: 0;
font-size: 12px;
border-radius:5px;
height:40px;
padding: 0px 20px;
cursor: pointer;
box-sizing: border-box;
margin: 10px 0;

`
