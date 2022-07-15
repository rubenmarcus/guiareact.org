import Markdown from "../../documentation/DOC-HOME.md"
import MdContainer from "../../components/mdcontainer"

export default function Documentation() {
   return (<MdContainer markdown={Markdown} /> )
}