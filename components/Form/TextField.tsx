import styled from "styled-components"
import { variant } from "styled-system"

type PropType = {
    variant?: string
}

export const TextField = styled.input.attrs((props: PropType) => ({
    className: "form-control",
}))<PropType>``
