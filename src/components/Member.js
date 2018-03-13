import React from 'react'
import MemberAPI from '../api'
import { Link } from 'react-router-dom'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Member = (props) => {
    const member = MemberAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!member) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{member.name} (#{member.number})</h1>
            <h2>Position: {member.position}</h2>
            <Link to='/members'>Back</Link>
        </div>
    )
}

export default Member
