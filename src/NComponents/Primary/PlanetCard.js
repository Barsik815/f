import React, {useState, useEffect} from "react"
import Card from "react-bootstrap/Card"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import {withRouter} from 'react-router-dom'

import s from './cards.module.css'
import SearchForm from "../SearchForm/SearchForm"
import { dataPlanet } from '../../data/Pdata.js'

const PlanetCard = ({history}) => {
    const [search, setSearch]=useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = dataPlanet.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
    }, [search, setSearch]);

    const renderCard = (planet, index) => {
        return (<div>
                <Card className={s.it} key={index} onClick={() => history.push(`/object/${planet.id}`)}>
                    <Card.Img alt="Card image" src={planet.img}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{planet.name}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{planet.description}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    };

    return (<>
        <SearchForm search={search} setSearch={setSearch} />
        <div className={s.grid}> {searchResults.map(renderCard)}</div>
    </>)
}

export default withRouter(PlanetCard)

