import './multipliers.css'
export const Multipliers = (props) => {
    const {types} = props
    // console.log(Object.keys(types))

    return <table className="multipliers-table">
        {Object.keys(types).map(el1 =>
            <tr className="multipliers-table-row">
                {
                    Object.keys(types).map(el2 =>
                    <td className="multipliers-table-cell">
                        {
                            types[el1][el2]
                        }
                    </td>)
                }
            </tr>)}

    </table>
}