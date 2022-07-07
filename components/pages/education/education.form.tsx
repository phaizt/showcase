import * as React from "react"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { Button } from "components/Form/Button"

interface Values {
    firstName: string
    lastName: string
    email: string
}

const App = () => {
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                }}
                onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 500)
                }}
            >
                <Form className="d-flex flex-column gap-3">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <Field className="form-control" id="firstName" name="firstName" placeholder="John" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <Field className="form-control" id="lastName" name="lastName" placeholder="Doe" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field className="form-control" id="email" name="email" placeholder="john@acme.com" type="email" />
                    </div>

                    <div className="form-group">
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default App
