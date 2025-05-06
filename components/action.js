"use server"

import { auth } from "@/auth"
import { writeClient } from "@/sanity/lib/WriteClient"
import slugify from "slugify"

export  const createPost = async (title,amt,quan,description,image)=>{
        const session = (await auth())
        const email = session?.user?.email
        const amount = Number(amt)
        const quantity = Number(quan)
        const slug = slugify(title)
         const post = {
            title,
            image,
            amount,
            quantity,
            description,
            email,
            author:{
                _type: "author",
                _ref: session?.user?.sanityId
            },
            slug:{
                _type: slug,
                current: slug
            },
        }
        await writeClient.create({_type: 'post', ...post})
    }