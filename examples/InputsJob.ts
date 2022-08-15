import { Job, Pipeline, Resource, TaskStep } from "concourse-pipeline-builder";
import { getApp, getTutorial } from "./helper/getResources";
import { resourceTutorial } from "./helper/tutorialResource";

const resourceApp: Resource = {
  name: "resource-app",
  type: "git",
  source: {
    uri: "https://github.com/cloudfoundry-community/simple-go-web-app.git",
  },
};

const runTestTask: TaskStep = {
  task: "web-app-tests",
  config: {
    platform: "linux",
    image_resource: {
      type: "docker-image",
      source: { repository: "golang", tag: "1.9-alpine" },
    },
    inputs: [
      { name: "resource-tutorial" },
      {
        name: "resource-app",
        path: "gopath/src/github.com/cloudfoundry-community/simple-go-web-app",
      },
    ],
    run: {
      path: "resource-tutorial/tutorials/basic/job-inputs/task_run_tests.sh",
    },
  },
};

const testJob: Job = {
  name: "job-test-app",
  public: true,
  plan: [getApp, getTutorial, runTestTask],
};

export default class InputJob extends Pipeline {
  jobs: Job[] = [testJob];
  resources: Resource[] = [resourceTutorial, resourceApp];
}
