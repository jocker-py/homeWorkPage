import React from 'react'
import {UpIcon, DownIcon, NoneIcon} from "../../../../assets";
import s from './SuperSort.module.css';

// добавить в проект иконки и импортировать
const downIcon = DownIcon;
const upIcon = UpIcon;
const noneIcon = NoneIcon;

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => sort === down ? '' : sort === up ? down : up

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => onChange(pureChange(sort, down, up));

    const Icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.icon}
        >
            <Icon id={id + '-icon-' + sort} />
        </span>
    )
}

export default SuperSort
