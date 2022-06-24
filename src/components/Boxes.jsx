import React, { useState } from 'react'
import './Boxes.css'
import Xarrow from 'react-xarrows'

export default function Boxes() {
    const table1 = ['1', '2', '3', '4', '5']
    const table2 = ['6', '7', '8', '9', '10']
    const [currentcouple, setCurrentCouple] = useState([0, 0])
    const [connection, setConnection] = useState([])
    const onLink1 = (id) => {
        setCurrentCouple([id, 0])
    }
    const onLink2 = (id) => {
        if (id < table1.length) {
            setCurrentCouple(['0', '0'])
            return
        } else if (currentcouple[0] === '0') {
            setCurrentCouple(['0', '0'])
            return
        } else {
            const couple = [...currentcouple]
            couple[1] = id
            if (couple[0] === '0' || couple[1] === '0') {
                setCurrentCouple(['0', '0'])
                return
            }
            connection.push({ x: couple[0], y: couple[1] })
            setConnection(connection)
            setCurrentCouple(['0', '0'])
        }
    }
    function endanswer() {
        for (let i = 0; i < connection.length; i++) {
            if (connection[i].x !== String(connection[i].y - 5)) {
                console.log(connection[i].y - 5)
                return (
                    <div>
                        <h1>'Oups! vous avez quelques erreurs, la réponse :</h1>
                        <div>1 -- 6</div>
                        <div>2 -- 7</div>
                        <div>3 -- 8</div>
                        <div>4 -- 9</div>
                        <div>5 -- 10</div>
                    </div>
                )
            }
        }
        return <h1>Bravo! Bien fait je pense que tu peux faire plus</h1>
    }

    return (
        <div>
            <div className="container">
                <div>
                    <h1 style={{ color: 'green', marginLeft: '50px' }}>
                        GROUPE 1
                    </h1>
                    <ul style={{ listStyle: 'none' }}>
                        {table1.map((value) => (
                            <li
                                className="boox"
                                id={value}
                                onClick={() => onLink1(value)}
                                key={value}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 style={{ color: 'green', marginLeft: '50px' }}>
                        GROUPE 2
                    </h1>
                    <ul style={{ listStyle: 'none' }}>
                        {table2.map((value) => (
                            <li
                                className="boox"
                                id={value}
                                onClick={() => onLink2(value)}
                                key={value}
                            >
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
                {connection.map((link, index) => (
                    <Xarrow start={link.x} end={link.y} key={index}></Xarrow>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {connection.length === table1.length ? (
                    endanswer()
                ) : (
                    <h1>Vas-y à toi de jouer</h1>
                )}
            </div>
        </div>
    )
}
