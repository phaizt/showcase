import { useState, useEffect } from "react"
import type { NextPage } from "next"
import styled from "styled-components"
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

// const AddButton = styled(Button)`
//     background-color: #b4b4b4;
//     border-color: transparent;
//     border-radius: 0;
//     color: #000;
// `

const Title = styled.p`
    text-align: center;
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
            <Title>Welcome to {name}`s education page</Title>
            <ButtonWrapper>
                {/* <AddButton variant="secondary" onClick={handleClick}>
                    Add new Education
                </AddButton> */}
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Home
