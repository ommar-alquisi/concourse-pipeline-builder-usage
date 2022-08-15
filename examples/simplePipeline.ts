import { Job, Pipeline, Resource, TaskStep } from "concourse-pipeline-builder";

const helloWorldTask: TaskStep = {
  task: "hello-world",
  config: {
    platform: "linux",
    image_resource: {
      type: "docker-image",
      source: { repository: "busybox" },
    },
    run: {
      path: "echo",
      args: ["hello world"],
    },
  },
};

const helloWorldJob: Job = {
  name: "job-hello-world",
  public: true,
  plan: [helloWorldTask],
};

export default class simplePipeline extends Pipeline {
  jobs = [helloWorldJob];
}
