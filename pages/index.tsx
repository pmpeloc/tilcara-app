import { InferGetServerSidePropsType } from 'next';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import clientPromise from '../lib/mongodb';
import CallToActionWithVideo from '../app/modules/landing/components/Hero';

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Alert status={isConnected ? 'success' : 'error'}>
        <AlertIcon />
        <AlertTitle>{`Su base de datos está ${
          isConnected ? 'conectada' : 'desconectada'
        }`}</AlertTitle>
        <AlertDescription>Tilcara APP v1.0.0</AlertDescription>
      </Alert>
      <CallToActionWithVideo />
    </>
  );
}

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
