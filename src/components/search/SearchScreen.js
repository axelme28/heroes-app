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
            <h1>SearchScreen</h1>
            <br/>

            <div className='row'>
                <div className='col-5'>
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

                        <button
                            type='submit'
                            className='btn btn-primary m-1 btn-block'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>´
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
