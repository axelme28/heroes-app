import React from 'react'
import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams()
    console.log(heroId);

    const hero = getHeroesById(heroId);
    console.log(hero);

    if (!hero) {
        return <Redirect to = "/"/>
    }else{

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    const handleReturn = ()=>{
        (history.length<=2) ?history.push('./') :history.goBack()
    }

    return (
        <div className="row mt-5">
            <div className='col-4'>
                <img 
                    src={`../assets/heroes/${heroId}.jpg`}
                    alt={superhero}
                    className='img-thumbnail border-0 shadow rounded animate__animated animate__backInLeft'
                />
            </div>
            <div className='col-8'>
                <h3 className='h3'>{superhero}</h3>
            <ul  class="list-group list-group-flush">
                <li className='list-group-item border-0'><b>Alter ego: </b> {alter_ego}</li>
                <li className='list-group-item border-0'><b>Publisher: </b> {publisher}</li>
                <li className='list-group-item border-0'><b>First_appearance: </b> {first_appearance}</li>
            </ul>

            <h5>Characters</h5>
            <p>{characters}</p>
            <button type="button" class="btn btn-outline-primary" onClick={handleReturn}>return</button>
            </div>
        </div>
    )
}
