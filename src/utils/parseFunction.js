import { compile } from "tailwindcss";

export function parseFunction(funcString) {
  try {
    const compiled = compile(funcString);

    return (x) => compile.evaluate({ x });
  } catch  {
    return null;
  }
}