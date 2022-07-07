import styled from "styled-components"
import { variant } from "styled-system"

type PropType = {
    align?: string
}

export const Text = styled.p<PropType>`
    text-align: ${(props) => props.align};
`
