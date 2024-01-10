/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery GetAllPostsId{\n  posts{\n    data{\n      id\n    }\n  }\n}\n": types.GetAllPostsIdDocument,
    "\nquery GetPostById ($id: ID){\n    post(id:$id){\n      data{\n        id\n        attributes{\n          title\n          description\n          eventpicture{\n            data{\n              attributes{\n                url\n              }\n            }\n          }\n          author{\n            data{\n              attributes{\n                name \n                last_name\n              }\n            }\n          }\n          publishedAt\n        }\n      }\n    }\n  }\n": types.GetPostByIdDocument,
    "\nquery GetAllPostsWithAuthors {\n  posts(sort: \"publishedAt:desc\"){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n": types.GetAllPostsWithAuthorsDocument,
    "\nquery GetAllGames{\n  games{\n    data{\n      id \n      attributes{\n        name\n        when\n        where\n        image{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n        result\n        players{\n          data{\n            attributes{\n              first_name \n              last_name\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetAllGamesDocument,
    "\nquery GetPostHome {\n  posts(sort: \"publishedAt:desc\", pagination:{limit:1}){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n": types.GetPostHomeDocument,
    "\nquery GetAllPlayers{\n  players{\n    data{\n      id \n      attributes{\n        first_name \n        last_name \n        description\n        picture{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetAllPlayersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllPostsId{\n  posts{\n    data{\n      id\n    }\n  }\n}\n"): (typeof documents)["\nquery GetAllPostsId{\n  posts{\n    data{\n      id\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetPostById ($id: ID){\n    post(id:$id){\n      data{\n        id\n        attributes{\n          title\n          description\n          eventpicture{\n            data{\n              attributes{\n                url\n              }\n            }\n          }\n          author{\n            data{\n              attributes{\n                name \n                last_name\n              }\n            }\n          }\n          publishedAt\n        }\n      }\n    }\n  }\n"): (typeof documents)["\nquery GetPostById ($id: ID){\n    post(id:$id){\n      data{\n        id\n        attributes{\n          title\n          description\n          eventpicture{\n            data{\n              attributes{\n                url\n              }\n            }\n          }\n          author{\n            data{\n              attributes{\n                name \n                last_name\n              }\n            }\n          }\n          publishedAt\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllPostsWithAuthors {\n  posts(sort: \"publishedAt:desc\"){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetAllPostsWithAuthors {\n  posts(sort: \"publishedAt:desc\"){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllGames{\n  games{\n    data{\n      id \n      attributes{\n        name\n        when\n        where\n        image{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n        result\n        players{\n          data{\n            attributes{\n              first_name \n              last_name\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery GetAllGames{\n  games{\n    data{\n      id \n      attributes{\n        name\n        when\n        where\n        image{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n        result\n        players{\n          data{\n            attributes{\n              first_name \n              last_name\n            }\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetPostHome {\n  posts(sort: \"publishedAt:desc\", pagination:{limit:1}){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetPostHome {\n  posts(sort: \"publishedAt:desc\", pagination:{limit:1}){\n    data{ \n      id\n      attributes{\n        eventpicture{\n          data{\n            attributes{\n              url}\n          }\n        }\n        title\n        description\n        author{\n          data{\n            attributes{\n              name\n              last_name\n              email\n            }\n          }\n        }\n        publishedAt\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetAllPlayers{\n  players{\n    data{\n      id \n      attributes{\n        first_name \n        last_name \n        description\n        picture{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["\nquery GetAllPlayers{\n  players{\n    data{\n      id \n      attributes{\n        first_name \n        last_name \n        description\n        picture{\n          data{\n            attributes{\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;