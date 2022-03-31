import Card from '../card/Card'
import './Users.css'

const Users = (props) => {
    const usersdata = props.usersdata

    return(
        usersdata.length < 30
        ?
            <div className='users-container'>
            {
                usersdata
                ?/*  */
                    usersdata.map(userdata => {
                        return <Card userdata={userdata}/>
                    })
                :
                    console.log('empty')
            }
            </div>
        :
            <div className='users-container-big-data'>
            {
                usersdata
                ?
                    usersdata.map(userdata => {
                        return <Card userdata={userdata}/>
                    })
                :
                    console.log('empty')
            }
            </div>
    )
}

export default Users