import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell not-found">
      <span className="mono">404 / A LOOSE END</span>
      <h1>
        This page hasn’t
        <br />
        been built.
      </h1>
      <p>Let’s get you back to the things that have.</p>
      <Link className="text-link" href="/">
        Back to the portfolio →
      </Link>
    </main>
  );
}
