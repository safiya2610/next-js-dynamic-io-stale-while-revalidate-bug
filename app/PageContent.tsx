import { unstable_cacheLife } from 'next/cache';
import { setTimeout } from 'timers/promises';

interface Props {
  type: 'static' | 'dynamic';
}

export async function PageContent({ type }: Props) {
  'use cache';
  unstable_cacheLife({ expire: 300, stale: 300, revalidate: 5 });

  console.log(`${new Date().toISOString()} [${type}] Fetching data...`);

  await setTimeout(2000); // Simulate a slow operation

  console.log(`${new Date().toISOString()} [${type}] Data fetched.`);

  return (
    <div>
      <p>Content: {type}</p>
    </div>
  );
}
