"use server"

import { auth } from "@/auth"
import { writeClient } from "@/sanity/lib/WriteClient"

export  const createPost = async (title,amt,quan,description,image)=>{
        const session = (await auth())
        const email = session?.user?.email
        const amount = Number(amt)
        const quantity = Number(quan)
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
        }
        await writeClient.create({_type: 'post', ...post})
    }