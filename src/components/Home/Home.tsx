import React, { FunctionComponent } from 'react';
import Page from '../ui/Page';
import { Typography } from '@mycrypto/ui';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import ButtonLink from '../ui/ButtonLink/ButtonLink';
import Instructions from './Instructions';

const Home: FunctionComponent = () => (
  <Page>
    <Section paddingTop={false}>
      <Heading as="h2">Find your lost Ether or address</Heading>
      <Typography>
        This tool can help you if you lost your Ether or Ethereum address that you got from a
        mnemonic phrase, or a Ledger or Trezor device. In a few simple steps, you can quickly search
        for the Ether or the address on your wallet.
      </Typography>
      <ButtonLink to="/start">Start searching!</ButtonLink>
    </Section>
    <Section secondary={true} grow={true}>
      <Heading as="h2">How it works</Heading>
      <Instructions />
    </Section>
  </Page>
);

export default Home;
