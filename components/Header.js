import BoxLink from './BoxLink';
import ThemeToggle from './ThemeToggle';
import { Box, Container, Flex, Link, Text } from '@modulz/design-system';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { RemoveScroll } from 'react-remove-scroll';

const Header = () => {
  const router = useRouter();

  return (
    <Box as="header" className={RemoveScroll.classNames.fullWidth}>
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href="/" passHref>
            <BoxLink>Guia de Padrões React</BoxLink>
          </NextLink>

          <Flex
            align="center"
            gap={{ '@initial': 4, '@bp2': 5 }}
            // Baseline align with the logo
            css={{ mb: -2 }}
          >
            <Box css={{ display: 'none', '@bp1': { display: 'contents' } }}>
              <NextLink href="/docs" passHref>
                <Link variant='subtle'>
                  <Text>Documentação</Text>
                </Link>
              </NextLink>
            </Box>
            <ThemeToggle />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
