import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <>
            <div className='d-flex align-content-center justify-content-center mt-4 mb-3'>
            <h1>Marvel</h1>
            </div>
            <HeroesList publisher = 'Marvel Comics'/>
        </>
    )
}
