import React from 'react'
import MemberAPI from '../api'
import { Link } from 'react-router-dom'

const FullRoster = () => (
    <div>
        <ul>
            {
                MemberAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/members/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullRoster
