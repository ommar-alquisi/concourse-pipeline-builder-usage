import { GetStep } from "concourse-pipeline-builder/dist/Pipeline";

const getApp: GetStep = {
  get: "resource-app",
  trigger: true,
};
const getTutorial: GetStep = {
  get: "resource-tutorial",
  trigger: true,
};

export { getApp, getTutorial };
