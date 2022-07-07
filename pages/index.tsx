import type { NextPage } from "next"
import styled from "@emotion/styled"

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const TextField = styled.input`
    height: 35px;
`

const EnterButton = styled.button`

`

const Home: NextPage = () => {
    return (
        <FormWrapper>
            <TextField type="text" />
            <EnterButton>Enter</EnterButton>
        </FormWrapper>
    )
}

export default Home
