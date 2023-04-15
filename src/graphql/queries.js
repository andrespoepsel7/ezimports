/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImport = /* GraphQL */ `
  query GetImport($id: ID!) {
    getImport(id: $id) {
      id
      description
      createdAt
      updatedAt
    }
  }
`;
export const listImports = /* GraphQL */ `
  query ListImports(
    $filter: ModelImportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
