import { unstable_cacheLife } from 'next/cache';
import { JSX } from 'react';
import { setTimeout } from 'timers/promises';

interface Props {
  type: 'static' | 'dynamic';
}

let lastFetchedTime = Date.now();
let lastData: JSX.Element | null = null;

export async function PageContent({ type }: Props) {
  'use cache';
  unstable_cacheLife({ expire: 300, stale: 300, revalidate: 5 });

  
  if (lastData && (Date.now() - lastFetchedTime < 300000)) {
    console.log(`${new Date().toISOString()} [${type}] Returning stale data.`);
    return lastData;
  }

  console.log(`${new Date().toISOString()} [${type}] Fetching data...`);

  await setTimeout(2000);

  let data: JSX.Element;


  if (type === 'static') {
    data = (
      <div>
        <p>Content: Static</p>
      </div>
    );
  } else {
    data = (
      <div>
        <p>Content: Dynamic</p>
      </div>
    );
  }

  console.log(`${new Date().toISOString()} [${type}] Data fetched.`);

 
  lastFetchedTime = Date.now();
  lastData = data;

  return data;
}
