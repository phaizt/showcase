import styled from "styled-components"
import { variant } from "styled-system"

type PropType = {
    variant?: string
}

export const Button = styled.button.attrs((props: PropType) => ({
    className: "btn",
}))<PropType>`
    ${variant({
        variants: {
            primary: {
                color: "#000",
                bg: "#ddd",
            },
            secondary: {
                color: "white",
                bg: "#cecece",
            },
        },
    })}
`
