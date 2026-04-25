const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../..");
const masterPath = path.join(rootDir, "core/bundles/applied-intelligence-master-source.json");
const appPath = path.join(rootDir, "core/bundles/applied-intelligence-app-source.json");

const master = JSON.parse(fs.readFileSync(masterPath, "utf8"));

const appSource = {
  design: master.design,
  system: {
    name: master.system.name,
    slug: master.system.slug,
    slogan: master.system.slogan,
    supportingLine: master.system.supportingLine,
    corePrinciple: master.system.corePrinciple,
    version: master.system.version,
    projectType: "app_source"
  },
  source: {
    derivedFrom: "core/bundles/applied-intelligence-master-source.json",
    role: "App-readable bundle derived from the master source",
    rule: "Do not edit directly. Update the master source, then rebuild this bundle."
  },
  app: {
    name: "Applied Intelligence App",
    type: "execution_layer",
    role: "operating_system",
    runtimeRules: [
      "One runtime",
      "One shell",
      "One router",
      "Native modules only",
      "AI-Connect must remain a native module inside the main app",
      "No detached mini-app behavior",
      "No bridge app behavior"
    ],
    primaryModules: ["AI-Trace", "AI-CIS", "AI-Connect"]
  },
  agents: master.agents.map((agent) => ({
    id: agent.id,
    name: agent.name,
    shortName: agent.shortName,
    type: agent.type,
    icon: agent.icon,
    color: agent.color,
    status: agent.status,
    purpose: agent.purpose,
    owns: agent.owns,
    validCommands: agent.validCommands,
    defaultCommand: agent.defaultCommand,
    boundaries: agent.boundaries,
    principle: agent.principle
  })),
  commandReference: master.commandReference,
  ui: master.ui
};

fs.writeFileSync(appPath, `${JSON.stringify(appSource, null, 2)}\n`);

console.log("App source built");
