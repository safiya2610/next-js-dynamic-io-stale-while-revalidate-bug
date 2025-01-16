import Link from 'next/link';
import { PageContent } from '../PageContent';

async function DynamicPage() {
  return (
    <>
      <Link href="/">Return</Link>
      <PageContent type="dynamic" />
    </>
  );
}

export default DynamicPage;
