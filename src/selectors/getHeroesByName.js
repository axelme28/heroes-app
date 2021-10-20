import { heroes } from "../data/Heroes"


export const getHeroesByName = (name = '') =>{
    if(name.trim()===''){
        return []
    }
    name = name.toLowerCase()
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}