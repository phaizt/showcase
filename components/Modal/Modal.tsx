import { useState } from "react"
import { Button } from "components/Form/Button"
import ReactModal from "react-modal"

type PropsType = {
    open: boolean
    setClose: (open: boolean) => void
    children?: JSX.Element
}

const Modal: React.FC<PropsType> = (props) => {
    const { open, setClose, children } = props
    return (
        <>
            <ReactModal isOpen={open}>
                <div className="d-flex">
                    <Button variant="secondary" sx="ms-auto" onClick={() => setClose(false)}>
                        Close Modal
                    </Button>
                </div>
                {children}
            </ReactModal>
        </>
    )
}
export default Modal
