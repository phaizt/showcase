import * as React from "react"
import { Formik, Field, Form, FormikHelpers } from "formik"
import { Button } from "components/Form/Button"
import { EducationType } from "types/education.type"
import CustomSelect from "components/Form/ReactSelect"

type Props = {
    submit: (params: EducationType) => void
}

const options = [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
]

const App: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>Education</h1>
            <Formik
                initialValues={{
                    name: "",
                    school: "",
                    degree: "",
                    field_of_study: "",
                    start_year: "",
                    end_year: "",
                    grade: "",
                    description: "",
                }}
                onSubmit={(values: EducationType, { setSubmitting, resetForm }: FormikHelpers<EducationType>) => {
                    props.submit(values)
                    resetForm()
                }}
            >
                <Form className="d-flex flex-column gap-3">
                    <div className="form-group">
                        <label htmlFor="school">School Name</label>
                        <Field
                            className="custom-select"
                            name="school"
                            options={options}
                            component={CustomSelect}
                            placeholder="Select a language..."
                            isMulti={false}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="school">School Name</label>
                        <Field className="form-control" id="school" name="school" />
                    </div> */}

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
