import {Link} from 'react-router-dom'

function DogsList({dogs}){

    const renderDogs = Object.keys(dogs).map((dogID) => (
        <li key={dogID}>
            <Link to={`/dogs/${dogID}`}>{dogs[dogID].name}</Link>
        </li>
    ))

    return <ul>{renderDogs}</ul>
   
}

export default DogsList