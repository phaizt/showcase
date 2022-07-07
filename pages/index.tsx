import { useState, useRef } from "react"
import type { NextPage } from "next"
import styled from "styled-components"
import { Button } from "components/Form/Button"
import { TextField as InputField } from "components/Form/TextField"
import { Text } from "components/Form/Text"
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

const TextField = styled(InputField)`
    align-self: center;
    width: 50%;

    @media screen and (max-width: 576px) {
        width: 90%;
        body {
            background-color: lightblue;
        }
    }
`

const Home: NextPage = () => {
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    const [query, setQuery] = useState("")
    const handleClick = () => {
        if (query) {
            router.push({
                pathname: "/education",
                query: { name: query },
            })
        } else {
            inputRef.current?.focus()
        }
    }
    return (
        <FormWrapper>
            <Text align="center">Hi there! Welcome to education showcase</Text>
            <Text align="center">Type your name and click &ldquo;Enter&ldquo; below to begin</Text>
            <TextField
                ref={inputRef}
                type="text"
                placeholder="Your Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
            <ButtonWrapper>
                <Button variant="primary" onClick={handleClick}>
                    Enter
                </Button>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Home
