/* ASCII-art wordmark spelling the full name "Eden Fox Phillips", stacked
   over two lines so each block stays within the ~44-column layout. Built
   from pure ASCII so it renders in any terminal/monospace font. */

const BANNER = [
  " ___ ___  ___ _  _   ___ _____  __",
  "| __|   \\| __| \\| | | __/ _ \\ \\/ /",
  "| _|| |) | _|| .` | | _| (_) >  < ",
  "|___|___/|___|_|\\_| |_| \\___/_/\\_\\",
  "",
  " ___ _  _ ___ _    _    ___ ___  ___ ",
  "| _ \\ || |_ _| |  | |  |_ _| _ \\/ __|",
  "|  _/ __ || || |__| |__ | ||  _/\\__ \\",
  "|_| |_||_|___|____|____|___|_|  |___/",
].join("\n");

export default function Banner() {
  return (
    <pre aria-label="Eden Fox Phillips" className="text-fg">
      {BANNER}
    </pre>
  );
}
