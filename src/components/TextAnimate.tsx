import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
type Text = {
    text: string;
    duration: number;
}

const TextRender:React.FC<{text: string, animationTime:number}> = ({text,animationTime}) => {
    
    const TextRenderElement = styled.h1`
        width: fit-content;
        &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top:0;
            border-left: 2px solid #fff;
            background-color: rgba(9,14,52);
            animation:  typing steps(${text.length});
            animation-duration: ${animationTime}ms;
            animation-delay: 60ms;
            animation-iteration-count: infinite;
        }
    `
    return <TextRenderElement>{text}</TextRenderElement>
}
const TextAnimate:React.FC<{texts: Array<Text>, TextRenderer: any}> = ({texts, TextRenderer}) => {
    const [count, setCount] = useState<number>(0)
    useEffect(()=>{
        const timer = setTimeout(()=> {
            if (count === texts.length-1) {
                setCount(0)
            }
            else {
                setCount(count + 1)
            }
        }, texts[count].duration)
        return ()=> clearTimeout(timer)
    },[count])
    return (
        <div>
            <div className='animate-text'>
                <TextRender text={texts[count].text} animationTime={texts[count].duration}></TextRender>
                </div>
        </div>
    )
}
export default TextAnimate