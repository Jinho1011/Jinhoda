import React from 'react';
// import { graphql } from 'gatsby';

// import Post from '@/components/post';

// interface PostTemplateProps {
//     data: Queries.PostTemplateQuery;
// }

// const PostPage = ({ data }: PostTemplateProps) => {
//     const post = data.contentfulPost;

//     return <Post post={post} />;
// };

const PostPage = () => {
    return <div>post</div>;
};

export default PostPage;

// export const postQuery = graphql`
//     query PostTemplate($id: String!) {
//         contentfulPost(id: { eq: $id }) {
//             id
//             title
//             thumbnail {
//                 gatsbyImageData(formats: AUTO, layout: FULL_WIDTH)
//             }
//             description {
//                 description
//             }
//             body {
//                 raw
//                 references {
//                     ... on Node {
//                         ... on ContentfulAsset {
//                             contentful_id
//                             __typename
//                             gatsbyImageData
//                             description
//                             mimeType
//                             publicUrl
//                         }
//                         ... on ContentfulCodeBlock {
//                             contentful_id
//                             __typename
//                             code {
//                                 code
//                             }
//                             description
//                             language
//                         }
//                     }
//                 }
//             }
//             createdAt
//             category {
//                 type
//             }
//         }
//     }
// `;
