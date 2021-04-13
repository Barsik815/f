import React from 'react'
import { Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'

const { Search } = Input;

const suffix = (
    <Button type='primary' htmlType="submit">
        <SearchOutlined
            style={{
                fontSize: 15,
                color: '#fff',
                marginBottom: 3
            }}
        />
    </Button>
);

const SearchForm = ({ search, setSearch }) => {
    const formik = useFormik({
        initialValues: {
            search: search,
        },
        onSubmit: values => {
            setSearch(values.search)
        },
    });

    return <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={formik.handleSubmit}>
        <Search placeholder="Пошук" bordered allowClear id="search"
               name="search" enterButton={suffix} style={{ width: 350 }}
                value={formik.values.search} onChange={formik.handleChange} />
    </form>
};

export default SearchForm