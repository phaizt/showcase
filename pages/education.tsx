import { useState, useEffect } from "react"
import type { NextPage } from "next"
import styled from "@emotion/styled"
import { Button, Form } from "react-bootstrap"
import { useRouter } from "next/router"

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
    const router = useRouter()
    const { name } = router.query
    const [query, setQuery] = useState("")

    const handleClick = () => {
        router.push({
            pathname: "/education",
            query: { name: query },
        })
    }

    useEffect(() => {
        setQuery(name as string)
    }, [name])
    return (
        <FormWrapper>
            <Title>Hi there! Welcome to education showcase</Title>
            <Title>Type your name and click &ldquo;Enter&ldquo; below to begin</Title>
            <TextField type="text" placeholder="Your Name" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ButtonWrapper>
                <EnterButton variant="secondary" onClick={handleClick}>
                    Enter
                </EnterButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Home
