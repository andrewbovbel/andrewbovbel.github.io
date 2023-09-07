import styled from 'styled-components';
import React, { useState } from 'react';

const Terminal = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    border: 1px solid white;
    padding: 10px;
    margin: 10px;
`

const Prompt = styled.div`
    color: green;
    margin-right: 10px;
`

const Input = styled.input`
    background-color: black;
    color: white;
    border: none;
    font-family: monospace;
    outline: none;
    width: 100%;
`

const Output = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid white;
    background-color: black;
    white-space: pre-wrap;
    max-height: 200px;
    overflow-y: auto;
`
function Home() {

    const [input, setInput ] = useState('');
    const [output, setOutput] = useState([]);
    const help = ["`clear` will clear the output", "`off` is currently in development"]

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleInputSubmit(e) {
        const {key, target: {value} } = e;

        if (key === 'Enter') {
            console.log(value)
            setOutput([...output, value])
            setInput('')

            if (value.toLowerCase() == 'clear') {
                setOutput([])
            }

            if (value.toLowerCase() == 'help') {
                setOutput([...output, ...help])
            }
             
            if (value.toLowerCase() == "off") {
                setOutput([...output, "`off` is currently in development, sorry!"])
            }
        }
    }

    return(
        <>
        <Output>
        Welcome to my website! Type `help` if you would like to understand how to use this terminal style website, or `off` to switch back to a GUI
        </Output>
        <Output>
            {output.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </Output>
        <Terminal>
            <Prompt>user@andrewbovbelresume</Prompt>
            <Input onKeyDown={handleInputSubmit} value={input} onChange={handleInputChange}></Input>
        </Terminal>
        
         </>
    )
}

export default Home;