export type Pipeline = {
  pipeline_id: string;
  pipeline_name: string;
  pipeline_status?: string;
  pipeline_description?: string;
  pipeline_template_id: string;
  pipeline_tasks?: TaskExecution[]
  task_arguments?: any;
  current_task_id?: string;
  _history?: CMFHistoryCreated;
};

export type PipelineTemplate = {
  pipeline_template_id: string;
  pipeline_template_name: string;
  pipeline_template_description: string;
  pipeline_template_tasks?: PipelineTemplateTask[];
  _history: { createdBy: { userRef: string; email: string }; createdTimestamp: string };
};

export type CMFHistoryCreated = {
  createdBy: {
    userRef: string; email: string
  };
  createdTimestamp: string
};

export type PipelineTemplateTask = {
  [key: string]: number | string | string[] | CMFHistoryCreated | null |  undefined;
  pipeline_template_task_id: string;
  pipeline_template_id: string;
  task_id: string;
  task_successors?: string[];
  pipeline_template_task_name: string;
  _history?: CMFHistoryCreated;
};

export type Task = {
  task_id: string;
  task_name: string;
  task_description: string;
  task_type: string;
  lambda_function_name_suffix?: string;
  ssm_script_name?: string;
  ssm_script_version?: string;
  task_arguments?: any;
  _history: { createdBy: { userRef: string; email: string }; createdTimestamp: string };
};

export type TaskExecution = {
  [key: string]: any | string | [] | CMFHistoryCreated | null |  undefined;
  task_execution_id: string;
  task_execution_name: string;
  pipeline_id: string;
  task_successors?: [];
  task_id: string;
  task_type: string;
  task_description: string;
  task_execution_status: string;
  outputLastMessage: string;
  output?: any;
  task_execution_inputs?: any;
  _history?: CMFHistoryCreated;
};
