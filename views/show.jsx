
const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
    return (
        <Default>
            <h2>Show page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it {bread.hasGluten ? <span> does</span> : <span> does NOT</span>} have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />
            <a href={`/breads/${index}/edit`} >Edit</a>
            <form method='POST' action={`/breads/${index}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
            </form>
        </Default>
    )
}

module.exports = Show