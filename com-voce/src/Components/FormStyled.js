import styled from 'styled-components'

const FormDiv = styled.div `

    display: flex;
    flex-direction: column;
    width:60%;
    align-items: center;
    padding: 16px 0;

    label{
        font-size: xx-large;
    }

    input{
        width: 70%;
        border-radius:10px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid beige;
        margin: 12px 0 4px 0;
        padding: 1px 4px;
    }

    button{
        margin: 40px;
        border: none;
        background: white;
        width: 30%;
        height: 35px;
        border-radius: 10px;
        font-size: larger;
        color: #6a4038;
    }

    button:hover,
    button:focus {
        background-color: whitesmoke;
        box-shadow: 0 0.5em 0.5em -0.4em #6a4038;
        transform: translateY(-0.05em);;
    }

    .agradecimento{
        font-size: 4em;
    }

`

export default FormDiv;

