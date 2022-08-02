import './multipliers.css'
export const Multipliers = (props) => {
    const {types} = props
    // console.log(types)
    // console.log(Object.keys(types))

    const firstRowOnClick = (type) => {
        console.log(type)
    }

    const firstColumnOnClick = (type) => {
        console.log(type)
    }


    let firstRow = Object.keys(types).map(el2 => <td onClick={() => firstRowOnClick(el2)}  key={el2+el2}  className="multipliers-table-cell first-row bold">{el2}</td>)
    firstRow.unshift(<td className="multipliers-table-cell first-row bold" onClick={() => firstRowOnClick()} style={{borderWidth: 0}}>
        <img className="pokeball-img" src={require("../../img/pokeball.png")}/></td>)

    let types_keys = Object.keys(types)
    types_keys.unshift("first")
    // console.log(types_keys)
    let result = types_keys.map(el1 =>
        <tr className="multipliers-table-row">
            {
                el1 === "first"
                    ? firstRow
                :types_keys.map(el2 =>
                        el2 === "first" ?
                            <td onClick={() => firstColumnOnClick(el1)}  className="multipliers-table-cell first-column bold">{el1}</td>
                            :<td className="multipliers-table-cell">{types[el1][el2]}</td>)
            }
        </tr>)

    return <div className="multipliers-table-div">
         <div className="table-title"> Multipliers table </div>
        <table className="multipliers-table">
            <tbody>
                {result}
            </tbody>
        </table>
    </div>
}