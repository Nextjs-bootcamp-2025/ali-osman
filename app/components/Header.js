import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/users">Users</Link>
        <Link href="/posts">Blogs</Link>
      </nav>
    </header>
  );
};

export default Header;
