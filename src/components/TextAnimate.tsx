import { textTransform } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system';

type Text = {
    text: string;
    duration: number;
}

const TextRender:React.FC<{renderElement: any, text: any, className:string}> = ({renderElement, text, className}) => {
    return React.createElement(renderElement, { className: className},text)
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
                <TextRender text={texts[count].text} renderElement={TextRenderer} className={"animate-text-element"}></TextRender>
                </div>
        </div>
    )
}
export default TextAnimate