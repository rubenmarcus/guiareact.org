const ROUTES = [
  { params: { slug: "hooks", title: "Guia de Hooks" } },
  { params: { slug: "contribua", title: "Guia de Padrões React" } },
  { params: { slug: "links", title: "Guia de Padrões React" } },
];

export const STATIC_PATHS = { paths: ROUTES, fallback: false };

export const PATH_PROPS = (slug) =>
  STATIC_PATHS.paths.filter(({ params }) => params.slug === slug)[0].params;