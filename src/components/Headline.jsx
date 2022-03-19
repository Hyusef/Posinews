import React from 'react'
import styled from "styled-components"

const Header = styled.h1`
font-size:3.2rem;
font-family:Verdana;
`
function Headline() {
    return (
        <div>
            <Header>Today's Headlines</Header>
        </div>
    )
}
export default Headline
