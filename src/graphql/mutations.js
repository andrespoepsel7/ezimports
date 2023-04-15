/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createImport = /* GraphQL */ `
  mutation CreateImport(
    $input: CreateImportInput!
    $condition: ModelImportConditionInput
  ) {
    createImport(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateImport = /* GraphQL */ `
  mutation UpdateImport(
    $input: UpdateImportInput!
    $condition: ModelImportConditionInput
  ) {
    updateImport(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteImport = /* GraphQL */ `
  mutation DeleteImport(
    $input: DeleteImportInput!
    $condition: ModelImportConditionInput
  ) {
    deleteImport(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
