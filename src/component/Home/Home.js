import React from 'react'
import Search from './Search'
import QuickSearch from './QuickSearch'

const home= () =>{
    return(
        <React.Fragment>
            <div>
                <Search/>
                <QuickSearch/>
            </div>        
        </React.Fragment>
    )
}

export default home;