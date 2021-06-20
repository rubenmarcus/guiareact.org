import ReactMarkdown from "react-markdown";
import hljs from 'highlight.js';

import { useEffect } from "react";


export default function MdContainer({markdown}){
      
    useEffect(() => {
        hljs.highlightAll();
    }, []);


    return (
        <ReactMarkdown children={markdown}  />
    )
}