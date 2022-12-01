import React from 'react'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center">No links</p>
    }

    return (
        <>
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Orig</th>
                        <th>Short</th>
                        <th>Open</th>
                    </tr>
                </thead>

                <tbody className="w10">
                    {links.map((link, index) => {
                        return (
                            <tr key={link._id}>
                                <td className="center">{index + 1}</td>
                                <td>{link.from}</td>
                                <td>{link.to}</td>
                                <td>
                                    <Link to={`/detail/${link._id}`}>
                                        <i className="material-icons dark-text">
                                            open_in_browser
                                        </i>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
