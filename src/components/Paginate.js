import React from 'react'
import Pagination from 'rc-pagination'

export const Paginate = ({current, totalItems, onChange}) => {
    return (
        <div className='paginate'>
            <Pagination
                current={ current }
                pageSize={20}
                total={totalItems}
                onChange={onChange}
            />
        </div>
    )
}
