import './multipliers.css'
import {useEffect, useState} from "react";
import {TypesContainer} from '../Multipliers/TypesContainer'
import {calcPoints} from "../../functions/typesfunc";
import {getPoints} from "../../functions/typesfunc";

export const Multipliers = (props) => {
    const MAX_TYPES_SELECTED = 12
    const {types} = props
    const [points, setPoints] = useState({attack:0, defence:0})
    const [attackTypes, setAttackTypes] = useState({})
    const [defenceTypes, setDefenceTypes] = useState({})
    let first_row_keys = Object.keys(types)
    first_row_keys.unshift("first")

    useEffect(()=>{
        resetTypes()
    },[])

    useEffect(()=>{
        if (countSelectedTypes(defenceTypes) > 0 && countSelectedTypes(attackTypes) > 0) {
            setPoints(getPoints(attackTypes, defenceTypes,types))
        }
    }, [attackTypes, defenceTypes])



    const createDefaultSelectedTypes = () => {
        let slectedMap = {}
        Object.keys(types).forEach(type => slectedMap[type] = false)
        // console.log(slectedMap)
        return slectedMap
    }

    const countSelectedTypes = (array) => {
        let count = 0
        Object.keys(array).forEach(type => array[type] ? count++ : null)
        // console.log(count)
        return count
    }


    const firstRowOnClick = (type) => {
        // console.log(type)
        if ((countSelectedTypes(defenceTypes) < MAX_TYPES_SELECTED) || defenceTypes[type]) {
            let defTypes = {...defenceTypes}
            defTypes[type] = !defTypes[type]
            setDefenceTypes(defTypes)
        } else {
            alert("Too much defence types")
        }
    }

    const firstColumnOnClick = (type) => {
        // console.log(type)
        if ((countSelectedTypes(attackTypes) < MAX_TYPES_SELECTED) || attackTypes[type]) {
            let attTypes = {...attackTypes}
            attTypes[type] = !attTypes[type]
            setAttackTypes(attTypes)
        }else {
            alert("Too much attack types")
        }
    }
    const pokeballOnClick = () => {
        // console.log("Pokeball clicked!")
        resetTypes()
    }

    const resetTypes = () => {
        setPoints({attack:0, defence:0})
        setAttackTypes(createDefaultSelectedTypes())
        setDefenceTypes(createDefaultSelectedTypes())
    }


    let firstRow = Object.keys(types).map(el2 => <td onClick={() => firstRowOnClick(el2)}  key={el2+el2}
        className={defenceTypes[el2]? "multipliers-table-cell first-row bold selected-defence":"multipliers-table-cell first-row bold"}>{el2}</td>)
    firstRow.unshift(<td className="multipliers-table-cell" onClick={() => pokeballOnClick()} style={{borderWidth: 0}}>
        <img className="pokeball-img" src={require("../../img/pokeball.png")}/></td>)


    // console.log(types_keys)
    let result = first_row_keys.map(el1 =>
        <tr className="multipliers-table-row">
            {
                el1 === "first"
                    ? firstRow
                :first_row_keys.map(el2 =>
                        el2 === "first" ?
                            <td onClick={() => firstColumnOnClick(el1)}
                                className={attackTypes[el1]? "multipliers-table-cell first-column bold selected-attack":"multipliers-table-cell first-column bold"}>{el1}</td>
                            :<td className="multipliers-table-cell">{types[el1][el2]}</td>)
            }
        </tr>)

    return <div className="multipliers-page-div">

        <div className="compare-container">
            <div>Attack</div>
            {attackTypes && <TypesContainer rawTypes={attackTypes}/>}
            <div>{`${points.attack} PTS`}</div>
        </div>

        <div className="table-div">
            <div className="table-title"> Multipliers table </div>
            <table className="multipliers-table">
                <tbody>
                {result}
                </tbody>
            </table>
        </div>
        <div className="compare-container">
            <div>Defence</div>
            {defenceTypes && <TypesContainer rawTypes={defenceTypes}/>}
            <div>{`${points.defence} PTS`}</div>
        </div>

    </div>
}