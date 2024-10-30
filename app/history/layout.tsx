// app/components/Navbar.tsx
import Link from 'next/link';

const HistoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/history/1900">1900</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="./1910">1910</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/1920">1920</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/1930">1930</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/1940">1940</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">1950</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">1960</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">1970</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">1980</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">1990</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">2000</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">2010</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/teams">2020</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default HistoryLayout
