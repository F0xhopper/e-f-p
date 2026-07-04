import { BANNER } from "../lib/banner";
import { profile } from "../lib/content";

/* The real document heading is visually hidden; the figlet art is its
   visual stand-in and stays out of the accessibility tree. */
export default function Banner() {
  return (
    <header>
      <h1 className="sr-only">{profile.name}</h1>
      <pre aria-hidden="true" className="banner text-fg">
        {BANNER}
      </pre>
    </header>
  );
}
