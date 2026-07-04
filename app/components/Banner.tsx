/* ASCII-art wordmark spelling the full name "Eden Fox Phillips", stacked
   over two lines so each block stays within the ~44-column layout. Classic
   figlet "standard" font -- the look of a Linux terminal banner. */

const BANNER = [
  " _____ ____  _____ _   _   _____ _____  __",
  "| ____|  _ \\| ____| \\ | | |  ___/ _ \\ \\/ /",
  "|  _| | | | |  _| |  \\| | | |_ | | | \\  /",
  "| |___| |_| | |___| |\\  | |  _|| |_| /  \\",
  "|_____|____/|_____|_| \\_| |_|   \\___/_/\\_\\",
  "",
  " ____  _   _ ___ _     _     ___ ____  ____",
  "|  _ \\| | | |_ _| |   | |   |_ _|  _ \\/ ___|",
  "| |_) | |_| || || |   | |    | || |_) \\___ \\",
  "|  __/|  _  || || |___| |___ | ||  __/ ___) |",
  "|_|   |_| |_|___|_____|_____|___|_|   |____/",
].join("\n");

export default function Banner() {
  return (
    <pre aria-label="Eden Fox Phillips" className="text-fg">
      {BANNER}
    </pre>
  );
}
