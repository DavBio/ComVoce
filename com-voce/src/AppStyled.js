import styled from 'styled-components'

const AppDiv = styled.div `
    margin: 0;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

    header {
        display:flex;
        flex-direction: column;
        height: 90vh;
        width:100%;
        background-color: burlywood;
        align-items:center;
    }

    content {
        width: 100%;
    }

    .sobre{
        display:flex;
        flex-direction: column;
        align-items:center;
        height: 50vh;
        width:100%;
        background-color: whitesmoke;
    }

    .formSection{
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
