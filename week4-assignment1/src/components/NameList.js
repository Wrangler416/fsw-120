import React from "react"

function ListItem(props) {
    return <li>{props.value}</li>
}

function NameList(props) {
    const listItems = props.names.map((name, index) => {
        return <ListItem key={index} value={name} />
    })
    return (
        <ol>{listItems}</ol>
    )

}

export default NameList