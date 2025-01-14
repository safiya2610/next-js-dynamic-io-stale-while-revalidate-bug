import { headers } from 'next/headers';
import Link from 'next/link';
import { PageContent } from '../PageContent';

async function DynamicPage() {
  await headers(); // Read headers to make this route dynamic

  return (
    <>
      <Link href="/">Return</Link>
      <PageContent type="dynamic" />
    </>
  );
}

export default DynamicPage;
