import Moralis from 'moralis';

export interface RequestMessage {
  address: string;
  chain: string;
  networkType: string;
}

const DOMAIN = 'opensea.io';
const STATEMENT = 'Welcome to OpenSea Click to sign in and accept the OpenSea Terms of Service https //opensea.io/tos This request will not trigger a blockchain transaction or cost any gas fees Your authentication status will reset after 24 hours';
const URI = 'https://www.opensea.io';
const EXPIRATION_TIME = '2023-01-01T00:00:00.000Z';
const TIMEOUT = 45;

export async function requestMessage({
  address,
  chain,
  networkType,
}: {
  address: string;
  chain: string;
  networkType: 'evm';
}) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    networkType,
    domain: DOMAIN,
    statement: STATEMENT,
    uri: URI,
    expirationTime: EXPIRATION_TIME,
    timeout: TIMEOUT,
  });

  const { message } = result.toJSON();

  return message;
}
