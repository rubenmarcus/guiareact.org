import {
    Box, Container, Link, Paragraph,
    Section, Text
} from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { MarketingButton } from './MarketingButton';

const MainHero = () => {

    return (
        <Section
            css={{
                paddingTop: '$4',
                // Starting at 850px viewport height, grow the padding top from $5 until it's $9.
                '@media (min-width: 900px) and (min-height: 850px)': {
                    paddingTop: 'min($9, calc($5 + 0.35 * (100vh - 850px)))',
                },
            }}
        >
            <Container size="3">
                <Box css={{ mb: '$6' }}>
                    <Text
                        as="h1"
                        size={{ '@initial': 8, '@bp1': 9 }}
                        css={{
                            color: 'transparent',
                            WebkitBackgroundClip: 'text',
                            backgroundImage: 'radial-gradient(circle, $hiContrast, $colors$indigo12)',
                            // Use padding rather than margin, or otherwise some descenders
                            // may be clipped with WebkitBackgroundClip: 'text'
                            pb: '$4',
                            // Same issue, letters may be clipped horizontally
                            px: '$2',
                            mx: '-$2',
                            fontWeight: 500,
                            fontSize: 'min(max($8, 11.2vw), $9)',
                            letterSpacing: 'max(min(-0.055em, -0.66vw), -0.07em)',
                            '@media (min-width: 900px) and (min-height: 850px)': {
                                fontSize: '80px',
                                lineHeight: '0.85',
                            },
                        }}
                    >
                        Um guia
                        <br />
                        de padrões
                        <br />
                        React em Português.
                    </Text>
                    <Box css={{ maxWidth: 550, mb: '$5' }}>
                        <Paragraph size="2" as="p">
                            Baseado no guia&nbsp;
                            <Link
                                href="https://reactpatterns.com/"
                                title="documentação de padrões original React."
                                rel="noopener noreferrer"
                                target="_blank"
                                variant="contrast"
                            >
                                original
                            </Link>
                            &nbsp;de Michael Chan&nbsp;
                            <Link
                                href="https://github.com/chantastic"
                                title="perfil do github de Michael Chan"
                                rel="noopener noreferrer"
                                target="_blank"
                                variant="contrast"
                            >
                                @chantastic
                            </Link>
                        </Paragraph>
                    </Box>
                    <NextLink href="/docs" passHref>
                        <MarketingButton as="a" icon={ArrowRightIcon}>
                            Documentação dos padrões
                        </MarketingButton>
                    </NextLink>
                </Box>
            </Container>
        </Section>
    );
};


export default MainHero;