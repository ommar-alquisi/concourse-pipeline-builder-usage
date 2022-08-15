import { Job, Pipeline, Resource, TaskStep } from "concourse-pipeline-builder";
import { getTutorial } from "./helper/getResources";
import { resourceTutorial } from "./helper/tutorialResource";

const createSomeFileTask: TaskStep = {
  task: "create-some-files",
  config: {
    platform: "linux",
    image_resource: {
      type: "docker-image",
      source: { repository: "busybox" },
    },
    inputs: [{ name: "resource-tutorial" }],
    outputs: [{ name: "some-files" }],
    run: {
      path: "resource-tutorial/tutorials/basic/task-outputs-to-inputs/create_some_files.sh",
    },
  },
};

const showSomeFileTask: TaskStep = {
  task: "show-some-files",
  config: {
    platform: "linux",
    image_resource: {
      type: "docker-image",
      source: { repository: "busybox" },
    },
    inputs: [{ name: "resource-tutorial" }, { name: "some-files" }],
    run: {
      path: "resource-tutorial/tutorials/basic/task-outputs-to-inputs/show_files.sh",
    },
  },
};

const jobPassFiles: Job = {
  name: "job-pass-files",
  public: true,
  plan: [getTutorial, createSomeFileTask, showSomeFileTask],
};

export default class InputJob extends Pipeline {
  jobs: Job[] = [jobPassFiles];
  resources: Resource[] = [resourceTutorial];
}
