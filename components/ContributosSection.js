import { Box, Card, Container, Grid, Heading, Section, Text } from '@modulz/design-system';

const ContributosSection = () => {
  const contributors = [
    {
      name: 'Ruben Marcus',
      githubProfile: 'https://github.com/rubenmarcus',
      username: '@rubenmarcus',
      briefDescription: 'Revisor e tradutor',
    },
    {
      name: 'Azrael Garden',
      githubProfile: 'https://github.com/azraelgarden',
      username: '@azraelgarden',
    },
    {
      name: 'Gustavo Castilho Valenciano',
      githubProfile: 'https://github.com/GusttavoCastilho',
      username: '@GusttavoCastilho',
    },
    {
      name: 'Gabriel Pinheiro',
      githubProfile: 'https://github.com/gabepinheiro',
      username: '@gabepinheiro',
    },
    {
      name: 'Ari Jesus',
      githubProfile: 'https://github.com/arimariojesus',
      username: '@arimariojesus',
    },
    {
      name: 'Luiz Felipe Weber',
      githubProfile: 'https://github.com/luizwbr',
      username: '@luizwbr',
    },
    {
      name: 'Matheus Andrade',
      githubProfile: 'https://github.com/matheusinfo',
      username: '@matheusinfo',
    },
    {
      name: 'Luiz Henrique Ferreira',
      githubProfile: 'https://github.com/LhuizF',
      username: '@LhuizF',
    },
    {
      name: 'João Vitor Pogiolli',
      githubProfile: 'https://github.com/Poggioli',
      username: '@Poggioli',
      briefDescription: 'Reestilização do site',
    },
  ];

  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$5' }}>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Pessoas que contribuíram
          </Heading>
        </Box>

        <Grid
          gapX="7"
          gapY="6"
          flow="row"
          css={{
            justifyContent: 'start',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, max-content))',
          }}
        >
          {contributors.map((contributor) => (
            <Card key={contributor.username} as="a" target="_blank" href={contributor.githubProfile} variant="interactive">
              <Box css={{ p: '$3' }}>
                {/* <Box css={{ mb: '$3' }}>
                  <AvatarIcon width="30" height="30" />
                </Box> */}
                <Heading
                  as="h3"
                  css={{
                    mb: '$1',
                    color: '$violetA9',
                    '.dark-theme &': {
                      color: '$mint9',
                    },
                  }}
                >
                  {contributor.username}
                </Heading>
                <Text size={2} css={{ lineHeight: 1.5, mb: '$2', color: '$violetA12' }}>
                  {contributor.name}
                </Text>
                <Text css={{ lineHeight: 1.5 }}>{contributor.briefDescription}</Text>
              </Box>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};


export default ContributosSection;