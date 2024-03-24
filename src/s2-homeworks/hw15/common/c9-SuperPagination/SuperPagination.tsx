import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'
import './style.css';

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.round(totalCount / itemsCountForPage);

    const onChangeCallback = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage);
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(page, +event.target.value);
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                color="primary"
                shape="rounded"
                size="small"
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
                className={s.select}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
