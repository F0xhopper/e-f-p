import { BANNER } from "../lib/banner";
import { profile } from "../lib/content";

export default function Banner() {
  return (
    <>
      <h1 className="sr-only">{profile.name}</h1>
      <pre aria-hidden="true" className="banner text-fg">
        {BANNER}
      </pre>
    </>
  );
}
