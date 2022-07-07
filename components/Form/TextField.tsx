import styled from "styled-components"

type PropType = {
    variant?: string
    sx?: string
}

export const TextField = styled.input.attrs((props: PropType) => ({
    className: `form-control ${props.sx}`,
}))<PropType>``
