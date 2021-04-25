import React, {useState, useEffect} from "react"
import Card from "react-bootstrap/Card"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import {withRouter} from 'react-router-dom'

import s from './../Primary/cards.module.css'
import SearchForm from "../SearchForm/SearchForm"
import { DwarfData } from '../../data/DwarfData'
import {DWARF} from "../../constants";

const DwarfCard = ({history}) => {
    const [search, setSearch]=useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = DwarfData.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
    }, [search, setSearch]);

    const renderCard = (planet, index) => {
        return (<div>
                <Card className={s.it} key={index} onClick={() => history.push(`/object/${DWARF}/${planet.id}`)}>
                    <Card.Img alt="Card image" src={planet.img}/>
                    <ListGroup>
                        <ListGroupItem className='bg-dark'>{planet.name}</ListGroupItem>
                        <ListGroupItem className='bg-dark'>{planet.ShDescription}</ListGroupItem>
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

export default withRouter(DwarfCard)

