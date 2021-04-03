import React from 'react'
import { withRouter } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const SpaceObject = () => {
    let { id } = useParams()
    return <div>
        SpaceObject
        <p>{id}</p>
    </div>
};

export default withRouter(SpaceObject)