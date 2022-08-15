import { Resource } from "concourse-pipeline-builder";

export const resourceTutorial: Resource = {
  name: "resource-tutorial",
  type: "git",
  source: {
    uri: "https://github.com/starkandwayne/concourse-tutorial.git",
    branch: "develop",
  },
};
