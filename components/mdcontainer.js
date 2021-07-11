import ReactMarkdown from "react-markdown";
import remarkSlug from "remark-slug";
import remarkLinks from "remark-external-links";
import remarkHljs from "remark-highlight.js";
import remarkToc from "remark-toc";

export default function MdContainer({ markdown }) {
  const remarkPluginSet = [remarkSlug, remarkLinks, remarkHljs, remarkToc];

  return <ReactMarkdown children={markdown} remarkPlugins={remarkPluginSet} />;
}
