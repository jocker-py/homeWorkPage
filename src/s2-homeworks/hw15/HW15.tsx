import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import {Loader} from "../hw10/Loader";

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .then(res => res.data)
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: ParamsType) => {
        setLoading(true)
        getTechs(params)
            .then((res) => {
                setTechs(res?.techs || []);
                setTotalCount(res?.totalCount || 100);
            }).finally(() => {
            setLoading(false);
        })
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        setPage(newPage);
        setCount(newCount);
        sendQuery({page: newPage, count: newCount, sort});
        setSearchParams({page: `${newPage}`, count: `${newCount}`, sort})
    }

    const onChangeSort = (newSort: string) => {
        setSort(newSort);
        setPage(1);
        sendQuery({page: 1, count, sort: newSort});
        setSearchParams({page: `${1}`, count: `${count}`, sort: newSort})
    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        const pageParams = +params.page || 1;
        const countParams = +params.count || 4;
        sendQuery({page: pageParams, count: countParams, sort: ''})
        setPage(pageParams)
        setCount(countParams)
    }, [])

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>

            <hr/>

            <div className={idLoading ? `${s2.hw} ${s.overlay}`: s2.hw}>

                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                />

                <div className={s.container}>
                    {idLoading && <div id={'hw15-loading'} className={s.loading}><Loader/></div>}

                    <div className={s.rowHeader}>
                        <div className={s.techHeader}>
                            tech
                            <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                        </div>

                        <div className={s.developerHeader}>
                            developer
                            <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                        </div>
                    </div>

                    {techs.map((t, index, arr) => (
                        <div key={t.id} className={index === arr.length - 1 ? s.row : `${s.row} ${s.separator}`}>
                            <div id={'hw15-tech-' + t.id} className={s.tech}>
                                {t.tech}
                            </div>

                            <div id={'hw15-developer-' + t.id} className={s.developer}>
                                {t.developer}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HW15
