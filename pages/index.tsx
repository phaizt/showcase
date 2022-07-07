import type { NextPage } from "next"
import styled from "@emotion/styled"
import { Button, Form } from "react-bootstrap"

const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const ButtonWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`

const EnterButton = styled(Button)`
    background-color: #b4b4b4;
    border-color: transparent;
    border-radius: 0;
    color: #000;
`

const TextField = styled(Form.Control)`
    align-self: center;
    width: 50%;
    
    @media screen and (max-width: 576px) {
      width: 90%;
        body {
            background-color: lightblue;
        }
    }
`

const Title = styled.p`
    text-align: center;

    &:first-of-type {
        margin-bottom: 3rem;
    }
`

const Home: NextPage = () => {
    return (
        <FormWrapper>
            <Title>Hi there! Welcome to education showcase</Title>
            <Title>Type your name and click &ldquo;Enter&ldquo; below to begin</Title>
            <TextField type="email" placeholder="Enter email" />
            <ButtonWrapper>
                <EnterButton variant="secondary">Enter</EnterButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Home
