const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../..");
const masterPath = path.join(rootDir, "core/bundles/applied-intelligence-master-source.json");
const websitePath = path.join(rootDir, "core/bundles/applied-intelligence-website-source.json");

const master = JSON.parse(fs.readFileSync(masterPath, "utf8"));

const websiteSource = {
  projectName: "Applied Intelligence Website",
  system: {
    name: master.system.name,
    slogan: master.system.slogan,
    supportingLine: master.system.supportingLine,
    corePrinciple: master.system.corePrinciple,
    description: master.system.description,
    version: master.system.version,
    projectType: "website_source"
  },
  source: {
    derivedFrom: "core/bundles/applied-intelligence-master-source.json",
    role: "Website-readable bundle derived from the master source",
    rule: "Do not edit directly. Update the master source, then rebuild this bundle."
  },
  website: {
    name: "Applied Intelligence Website",
    type: "presentation_layer",
    role: "framework-shell",
    currentVersion: "V15",
    rules: [
      "Website reads from source",
      "Website does not execute agents",
      "Website does not mutate system data",
      "Website does not redefine core logic"
    ]
  },
  agents: master.agents.map((agent) => ({
    id: agent.id,
    name: agent.name,
    shortName: agent.shortName,
    tagline: agent.tagline,
    icon: agent.icon,
    color: agent.color,
    status: agent.status,
    principle: agent.principle
  })),
  ui: master.ui
};

fs.writeFileSync(websitePath, `${JSON.stringify(websiteSource, null, 2)}\n`);

console.log("Website source built");
