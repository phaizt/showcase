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
const ContentWrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
`

const SideBox = styled.div`
    background: #cecece;
    width: 30%;
    padding: 1rem;
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`
const ContentBox = styled.div`
    background: #cecece;
    width: 70%;
    padding: 1rem;
    @media screen and (max-width: 991px) {
        width: 100%;
    }
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
            <ButtonWrapper className="mb-3">
                <Button variant="primary" onClick={() => setOpen(true)}>
                    Add new Education
                </Button>
            </ButtonWrapper>
            <ContentWrapper>
                <SideBox>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos perspiciatis quam animi minima molestiae ducimus eveniet
                    alias, nemo modi odit quidem exercitationem adipisci unde ex doloremque rem. Id, excepturi.
                </SideBox>
                <ContentBox>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos perspiciatis quam animi minima molestiae ducimus eveniet
                    alias, nemo modi odit quidem exercitationem adipisci unde ex doloremque rem. Id, excepturi.
                </ContentBox>
            </ContentWrapper>
            <Modal open={open} setClose={setOpen}>
                <EducationForm />
            </Modal>
        </FormWrapper>
    )
}

export default Home
