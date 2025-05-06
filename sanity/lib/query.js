import { defineQuery } from "next-sanity";

export const allPost = defineQuery(`*[_type=="post"]{
  title,
  author,
    authorImg,
    amount,
    image,
    slug
}`)
export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == "author" & id == $id ][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }`)