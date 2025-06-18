import { build } from "vite";

async function runBuild() {
  try {
    await build({
      configFile: "vite.config.ts",
    });
    console.log("Build completed successfully");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

runBuild();
