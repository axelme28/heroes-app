import React, { useMemo } from 'react'
import queryString from 'query-string'
// import { heroes } from '../../data/Heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';



export const SearchScreen = ({history}) => {

    const location = useLocation()
    const {q = ''} = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    })

    const {searchText} = formValues

    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }

    const heroesFilter =  useMemo(() => getHeroesByName(q),[q] )

    return (
        <div>
            <div className='d-flex align-content-center justify-content-center m-3'>
                <h1>Search a hero</h1>
            </div>

            <div className='row'>
                <div className='col-4 d-flex align-content-around '>
                    <form onSubmit={handleSearch}>
                        <input
                            type= 'text'
                            placeholder='find your hero'
                            className='form-control' 
                            name='searchText'   
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button type="button" className="btn btn-primary mt-3 align-content-center">Search</button>

                        
                    </form>
                    

                </div>

                
                <div className='col-7'>
                    <h4>Results</h4>
                    {(q === '')&&<div className='alert alert-primary'>Search a hero</div>}
                    {(q !== '' && heroesFilter.length === 0)
                    ?<div className='alert alert-danger'>Hero not found</div>
                        :<div>
                        {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }</div>}
                
            
                
                    
                </div>


            </div>
        </div>
    )
}
