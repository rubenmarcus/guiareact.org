import Markdown from "../documentation/HOME.md"
import MdContainer from "../components/mdcontainer"


export default function Page(){
 return (<MdContainer markdown={Markdown} /> )
}

export async function getStaticProps(context) {
  return {
    props: {
      cssClass: 'home',
      title: 'Guia de Padrões React'
    }, 
  }
}