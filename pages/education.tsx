import { useState, useEffect } from "react"
import type { NextPage } from "next"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Button } from "components/Form/Button"
import Modal from "components/Modal/Modal"
import EducationForm from "components/pages/education/education.form"

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

const Title = styled.p`
    text-align: center;
`

const Home: NextPage = () => {
    const router = useRouter()
    const { name } = router.query
    const [open, setOpen] = useState(false)

    return (
        <FormWrapper>
            <Title>Welcome to {name}`s education page</Title>
            <ButtonWrapper>
                <Button variant="primary" onClick={() => setOpen(true)}>
                    Add new Education
                </Button>
            </ButtonWrapper>
            <Modal open={open} setClose={setOpen}>
                <EducationForm />
            </Modal>
        </FormWrapper>
    )
}

export default Home
