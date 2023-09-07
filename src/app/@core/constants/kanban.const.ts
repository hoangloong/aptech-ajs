export const KANBAN_STATUS: TStatus[] = [
  'TODO',
  'IN_PROGRESS',
  'IN_REVIEW',
  'DONE',
];

export const STATUS = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  IN_REVIEW: 'In Review',
  DONE: 'Done',
};

export type TStatus = 'TODO' | 'IN_PROGRESS' | 'IN_REVIEW' | 'DONE';
