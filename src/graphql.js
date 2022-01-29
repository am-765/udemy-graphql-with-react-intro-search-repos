import gql from "graphql-tag";

export const ME = gql`
  query me {
    user(login: "am-765") {
      name
      avatarUrl
    }
  }
`;
