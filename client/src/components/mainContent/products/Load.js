import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import './Product.css'


function Load() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
      <div className="load_more">
        {
            result < page * 9 ? "" :<button onClick={()=>setPage(page + 1 )}>
                Load more
            </button>
        }
      </div>
    )
}

export default Load