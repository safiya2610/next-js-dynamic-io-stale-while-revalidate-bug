import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/static">Static page</Link>
        </li>
        <li>
          <Link href="/dynamic">Dynamic page</Link>
        </li>
      </ul>
    </div>
  );
}
