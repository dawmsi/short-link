import React from "react"

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>

            <p>Ur link:
                <a href={link.to} target="_blank" rel="noopenner noreferrer"
                > {link.to}</a>
            </p>

            <p>From:
                <a href={link.from} target="_blank" rel="noopenner noreferrer"
                > {link.from}</a>
            </p>
            <p>Amount clicks:
                <strong> {link.clicks}</strong>
            </p>
            <p>Date create:
                <strong> {new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    )
}