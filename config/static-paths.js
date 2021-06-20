const ROUTES = [
    {params: {slug: 'hooks' , title: 'Guia de Hooks'}},
    {params: {slug: 'contribua' , title: 'Guia de Padrões React'}},
    {params: {slug: 'links' , title: 'Guia de Padrões React'}},
];

export const STATIC_PATHS = {paths: ROUTES, fallback: false};

const MAPPED_PATHS = STATIC_PATHS.paths.map((routes) => {
    return routes.params;
  })

export const PATH_PROPS = (slug) => MAPPED_PATHS.find( route => route.slug ===  slug );