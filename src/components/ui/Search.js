import React, { useState } from 'react'
import '../../App.css'
const Search = () => {
    

    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Enter Email Address'  autoFocus /> <button>GET EARLY ACCESS</button>
            </form>
        </section>
    )
}

export default Search
