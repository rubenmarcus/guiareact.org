import MdLoader from '../../config/md-loader'
import STATIC_PATHS from '../../config/static-paths'
import MdContainer from "../../components/mdcontainer"


function Page(props) {
    return (<MdContainer markdown={props.markdown} /> )
  }
  
  export default Page
  
  export async function getStaticProps(context) {
    return {
      props: {
          markdown: MdLoader[context.params.slug],
          cssClass: context.params.slug
      },
    }
  }

  export async function getStaticPaths() {
    return STATIC_PATHS
}