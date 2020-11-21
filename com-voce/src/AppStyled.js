import styled from 'styled-components'
import headerbackground from "./headerBackground.png"


const AppDiv = styled.div `
    margin: 0;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    font-family: 'Economica','Open Sans', sans-serif, "Economica";

    header {
        display:flex;
        flex-direction: column;

        width:100%;
        background-image: url(${headerbackground});
        height: 70vh;
        background-size: cover;
        background-position: center;
        align-items:center;

    }
    h1{
        font-size: 6em;
        color: white;
        margin-top: 1.2em;
    }

    header>p {
        color: white;
        font-size: xx-large;
        margin: 0;
    }

    h2{
        font-size:3em;
    }
    
    content {
        width: 100%;
    }

    .sobre{
        color: #6a4038;
        display:flex;
        flex-direction: column;
        align-items:center;
        height: fit-content;
        width:100%;
        background-color: whitesmoke;
    }

    .sobre>div {
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 85%;
        padding:16px 0;
    }

    .sobre>div>p{
        margin: 2em;
        font-size: xx-large;
        text-align: center;
    }
    img{
        width: 50%;
        border: 2px dashed burlywood;
        padding: 4px;

    }

    .formSection{
        color:white;
        display:flex;
        flex-direction: column;
        align-items:center;
        background-color:burlywood;
        width:100%;
    }


    footer {
        height:8px;
        background-color:darkgray;
    }
`

export default AppDiv;
