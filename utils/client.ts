import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '7f8c9jsg',
  dataset: 'production',
  apiVersion: '2022-08-08',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
