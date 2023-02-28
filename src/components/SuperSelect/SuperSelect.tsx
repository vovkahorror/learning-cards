import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from 'components/SuperSelect/SuperSelect.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type OptionsType = {
    id: number | string
    value: string
}
type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: OptionsType[]
    onChangeOption?: (option: number | string) => void
}

export const SuperSelect = (
    {
        options,
        className,
        onChange,
        onChangeOption,
        ...restProps
    }: SuperSelectPropsType
) => {

    const mappedOptions: JSX.Element[] = options
        ? options.map((o) => (
            <option
                key={o.id}
                id={'-option-' + o.id}
                className={s.option}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e)
        if (onChangeOption) onChangeOption(e.currentTarget.value)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

