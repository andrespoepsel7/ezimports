/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImport = /* GraphQL */ `
  subscription OnCreateImport($filter: ModelSubscriptionImportFilterInput) {
    onCreateImport(filter: $filter) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImport = /* GraphQL */ `
  subscription OnUpdateImport($filter: ModelSubscriptionImportFilterInput) {
    onUpdateImport(filter: $filter) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImport = /* GraphQL */ `
  subscription OnDeleteImport($filter: ModelSubscriptionImportFilterInput) {
    onDeleteImport(filter: $filter) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
