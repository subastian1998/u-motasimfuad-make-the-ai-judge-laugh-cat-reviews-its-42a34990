import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. He bought me a $40 bed. I sleep in the box. He calls it ungrateful; I call it interior design. The box gets five stars. He does not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
