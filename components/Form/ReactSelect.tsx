import { FieldProps } from "formik"
import React from "react"
import Select from "react-select/async"

interface Option {
    label: string
    value: string
}

interface CustomSelectProps extends FieldProps {
    options: any
    className?: string
    placeholder?: string
}

export const CustomSelect = ({ className, placeholder, field, form, options }: CustomSelectProps) => {
    const onChange = (option: any) => {
        form.setFieldValue(field.name, (option as Option).value)
    }

    return (
        <Select
            className={className}
            name={field.name}
            onChange={onChange}
            placeholder={placeholder}
            cacheOptions
            defaultOptions
            loadOptions={options}
        />
    )
}

export default CustomSelect
