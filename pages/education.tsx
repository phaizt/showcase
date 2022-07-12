import { useEffect, useState, useRef, MouseEventHandler, MouseEvent } from "react"
import type { NextPage, GetServerSideProps } from "next"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Button } from "components/Form/Button"
import Modal from "components/Modal/Modal"
import EducationForm from "components/pages/education/education.form"
import { useAppDispatch, useAppSelector } from "store/main-store"
import { EducationType } from "types/education.type"
import { educationAction, save } from "store/reducers/education.reducer"
import axios from "axios"

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
const ContentBoxWrapper = styled.div`
    display: flex;
    width: 70%;
    gap: 1rem;
    flex-direction: column;
`

const ContentBox = styled.div`
    background: #cecece;
    padding: 1rem;
    &.highlight {
        background: #f2e3cd;
    }
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

const Title = styled.p`
    text-align: center;
`

const Bookmark = styled.ul`
    list-style-type: none;
`

const BookmarkLink = styled.li`
    cursor: pointer;
    &.active {
        font-weight: bold;
    }
`

const StudyField: React.FC<EducationType> = (props) => {
    const { school, start_year, end_year, degree, grade, field_of_study, description } = props
    return (
        <>
            <h2>Graduated @ {school} </h2>
            <h2>
                {start_year} - {end_year}
            </h2>
            <ul>
                <li>degree : {degree}</li>
                <li>grade : {grade}</li>
                <li>field of study : {field_of_study}</li>
                <li>description : {description}</li>
            </ul>
        </>
    )
}

const Home: NextPage<{ educations: EducationType[] }> = (props) => {
    const liRef = useRef<Array<HTMLLIElement | null>>([])
    const { educations: education_props } = props
    const { educations } = useAppSelector()
    const dispatch = useAppDispatch()
    const router = useRouter()
    const { name } = router.query
    const [open, setOpen] = useState(false)
    const [study, setStudy] = useState<EducationType>()
    const [isBookmarkClicked, setIsBookmarkClicked] = useState(false)

    useEffect(() => {
        dispatch(educationAction.setData(education_props))
    }, [education_props])

    useEffect(() => {
        setStudy(educations[0])
    }, [educations])

    const handleSubmit = (params: EducationType) => {
        let data = Object.assign(params, { name: name })
        dispatch(save({ payload: data }))
    }

    const handleClickBookmark = (event: MouseEvent, idx: number, id: number | undefined) => {
        event.preventDefault()
        liRef.current.map((el) => el?.classList.remove("active"))
        liRef.current[idx]?.classList.add("active")
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/education/${id}`).then(({ data }) => {
            setStudy(data.data)
            setIsBookmarkClicked(true)
        })
    }
    let contents: Array<JSX.Element> = []

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
                    <Bookmark>
                        {educations.map((el, idx) => {
                            contents.push(
                                <ContentBox key={idx}>
                                    <StudyField {...el} />
                                </ContentBox>
                            )
                            return (
                                <BookmarkLink
                                    ref={(el) => (liRef!.current[idx] = el)}
                                    className=""
                                    key={idx}
                                    onClick={(event) => handleClickBookmark(event, idx, el?.id)}
                                >
                                    {el.school}
                                </BookmarkLink>
                            )
                        })}
                    </Bookmark>
                </SideBox>
                <ContentBoxWrapper>
                    {study && isBookmarkClicked && (
                        <ContentBox className="highlight">
                            <StudyField {...study} />
                        </ContentBox>
                    )}
                    {contents}
                </ContentBoxWrapper>
            </ContentWrapper>
            <Modal open={open} setClose={setOpen}>
                <EducationForm submit={handleSubmit} />
            </Modal>
        </FormWrapper>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const name = context?.query?.name
    const data = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/education?name=${name}`)
        .then(({ data }) => {
            return data.data
        })
        .catch((err) => {})
    return {
        props: { educations: data },
    }
}

export default Home
