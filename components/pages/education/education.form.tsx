import * as React from "react"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { Button } from "components/Form/Button"

interface Values {
    school: string
    degree: string
    field_of_study: string
    start_year: string
    end_year: string
    grade: string
    description: string
}

const App = () => {
    return (
        <div>
            <h1>Education</h1>
            <Formik
                initialValues={{
                    school: "",
                    degree: "",
                    field_of_study: "",
                    start_year: "",
                    end_year: "",
                    grade: "",
                    description: "",
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
                        <label htmlFor="school">School Name</label>
                        <Field className="form-control" id="school" name="school" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="degree">Degree</label>
                        <Field className="form-control" id="degree" name="degree" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="field_of_study">Field Of Study</label>
                        <Field className="form-control" id="field_of_study" name="field_of_study" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="start_year">Start Year</label>
                        <Field className="form-control" id="start_year" name="start_year" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="end_year">End Year</label>
                        <Field className="form-control" id="end_year" name="end_year" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <Field className="form-control" id="grade" name="grade" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <Field className="form-control" id="description" name="description" />
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
