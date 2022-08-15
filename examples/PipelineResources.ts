import {
  GetStep,
  Job,
  Pipeline,
  Resource,
  TaskFileConfig,
} from "concourse-pipeline-builder";

const resource: Resource = {
  name: "resource-tutorial",
  type: "git",
  source: {
    uri: "https://github.com/starkandwayne/concourse-tutorial.git",
    branch: "develop",
  },
};

const task: TaskFileConfig = {
  task: "hello-world",
  file: "resource-tutorial/tutorials/basic/task-hello-world/task_hello_world.yml",
};

const get: GetStep = {
  get: "resource-tutorial",
};

const jobTask: Job = {
  name: "job-hello-world",
  public: true,
  plan: [get, task],
};

export default class PipelineResources extends Pipeline {
  jobs: Job[] = [jobTask];
  resources: Resource[] = [resource];
}
