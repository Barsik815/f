import React from 'react'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Search } = Input;

const suffix = (
    <SearchOutlined
        style={{
            fontSize: 15,
            color: '#fff',
            marginBottom: 3
        }}
    />
);

const SearchForm = () => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Search placeholder="Пошук" bordered allowClear enterButton={suffix} style={{ width: 350 }} />
    </div>
};

export default SearchForm