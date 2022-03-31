import './Card.css'

const Card = (props) => {
    const userdata = props.userdata

    return (
        <div className='card-container'>
            <h2>Name: {userdata.name}</h2>
            <h2>Username: {userdata.username}</h2>
            <h2>Password: {userdata.password}</h2>
        </div>
    )
}

export default Card