import MdLoader from '../../config/md-loader'
import {STATIC_PATHS, PATH_PROPS}  from '../../config/static-paths'
import MdContainer from "../../components/mdcontainer"


function Page(props) {
    return (<MdContainer markdown={props.markdown} /> )
  }
  
  export default Page
  
  export async function getStaticProps(context) {
      const pathProps = PATH_PROPS(context.params.slug)

    return {
      props: {
          markdown: MdLoader[context.params.slug],
          cssClass: context.params.slug,
          title: pathProps.title
      },
    }
  }

  export async function getStaticPaths() {
    return STATIC_PATHS
}