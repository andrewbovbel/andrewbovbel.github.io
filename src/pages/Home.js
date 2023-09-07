import styled from 'styled-components';
import React, { useState } from 'react';

const Terminal = styled.div`
    background-color: black;
    border: 1px solid white;
    padding: 10px;
    margin: 10px;
    font-family: monospace;
`

const Prompt = styled.div`
    color: white;
    margin-right: 10px;
    display:flex;
    justify-content: space-between
    `

const Input = styled.input`
    background-color: black;
    color: white;
    border: none;
    font-family: monospace;
    outline: none;
    width: 100%;
`

const User = styled.div`
    margin-right: 10px
`
const Directory = styled.div`
    margin-right: 10px
`

function Home({showTerminal, turnOffTerminal}) {

    console.log(showTerminal)

    const [input, setInput ] = useState('');
    const [directory, setDirectory] = useState('~')
    const [output, setOutput] = useState(['Welcome to my website! Type `help` if you would like to understand how to use this terminal style website, or `off` to switch back to a GUI', 'Enter `ls` for things about me, and then `cd` navigate to that page', '-------------------------------------------------------------------------------------------------------------------------------------------']);
    const help = ["`clear` will clear the output", "`off` is currently in development", "`ls` displays directories that describe who I am"]
    const directories = ["about", "resume", "tutoring"]
    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleInputSubmit(e) {
        const {key, target: {value} } = e;

        if (key === 'Enter') {
            setInput('')

            const commands = value.split(" ")


            switch(commands[0].toLowerCase()) {
                case "ls":
                    if (directory == "~") setOutput([...output, ...directories]); break
                case "cd":
                    if (commands.length > 1 && directories.includes(commands[1].toLowerCase())) {
                        setOutput(["YOO"])
                        setDirectory(commands[1].toLowerCase())
                        break
                    } 
                    setDirectory('~')
                    break
                case "clear":
                    setOutput([])
                    break
                case "help": 
                    setOutput([...output, ...help])
                    break
                case "off":    
                    turnOffTerminal()

                    setOutput([...output, "`off` is currently in development, sorry!"])
                    break
                default:
                    setOutput([...output, `command not found: ${commands[0]}`]) //will cause rerender twice if command not found

            }


            

            
             
            
        }
    }

    return(
        <>
        
        {showTerminal && <Terminal>
            {output.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
            <Prompt>
                <User>user@andrewbovbelresume</User>
                <Directory>{directory}</Directory>
                <Input onKeyDown={handleInputSubmit} value={input} onChange={handleInputChange}></Input>
            </Prompt>
        </Terminal>}
        
         </>
    )
}

export default Home;