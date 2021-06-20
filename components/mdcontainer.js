import ReactMarkdown from "react-markdown";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

import { useEffect } from "react";


export default function MdContainer({markdown}){
      
    useEffect(() => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll();
    }, []);


    return (
        <ReactMarkdown children={markdown}  />
    )
}