import Link from 'next/link';
import { PageContent } from '../PageContent';

async function StaticPage() {
  return (
    <>
      <Link href="/">Return</Link>
      <PageContent type="static" />
    </>
  );
}

export default StaticPage;
