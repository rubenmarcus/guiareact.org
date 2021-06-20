import Markdown from "../documentation/index.md"
import MdContainer from "../components/mdcontainer"


export default function Page(){
 return (<MdContainer markdown={Markdown} /> )
}

export async function getStaticProps(context) {
  return {
    props: {
      cssClass: 'home'
    }, 
  }
}