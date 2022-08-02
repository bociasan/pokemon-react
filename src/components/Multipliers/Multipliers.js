import './multipliers.css'
export const Multipliers = (props) => {
    const {types} = props
    // console.log(Object.keys(types))
    let result = Object.keys(types).map(el1 =>
        <tr className="multipliers-table-row">
            {
                Object.keys(types).map(el2 =>
                    <td className="multipliers-table-cell">
                        {
                            types[el1][el2]
                        }
                    </td>)
            }
        </tr>)

    let firstRow = Object.keys(types).map(el2 =>
        <td className="multipliers-table-cell vertical-text bold">
            {
                el2
            }
        </td>)
    firstRow.unshift(<td className="multipliers-table-cell vertical-text bold" style={{borderWidth: 0}}>
        <img className="pokeball-img" src={require("../../img/pokeball.png")}/>
    </td>)
    result.unshift(
        firstRow
    )

    for (let i = 1; i < result.length; i++) {
        result[i].props.children.unshift(<td className="multipliers-table-cell bold">
            {
                Object.keys(types)[i-1]
            }
        </td>)
        // console.log(result[i].props.children)
    }

    // result[0].props.children.unshift(<td className="multipliers-table-cell">
    //     {
    //         Object.keys(types)[1]
    //     }
    // </td>)

    return <table className="multipliers-table">
        <tbody>
            {result}
        </tbody>

    </table>
}