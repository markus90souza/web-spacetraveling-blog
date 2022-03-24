import Link from 'next/link';
import s from './header.module.scss';

export default function Header() {
  return (
    <header className={s.container}>
      <Link href="/">
        <a>
          <img src="/logo.svg" title="logo" />
        </a>
      </Link>
    </header>
  );
}
