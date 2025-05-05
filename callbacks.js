import { writeClient } from "./sanity/lib/WriteClient";

export const createAuthorIfNotExists = async (user) => {
  try {
    const userId = user?.email; // Use email as a unique identifier
    const existingAuthor = await writeClient.fetch(
      `*[_type == "author" && email == $email][0]`,
      { email: userId }
    );

    if (!existingAuthor) {
      console.log('not available')
      await writeClient.create({
        _type: 'author',
        name: user?.name,
        email: user?.email,
        oauthId: userId, // custom field to store OAuth ID
        image: user?.image, // optional
      });
      console.log("Author document created in Sanity.");
    } else {
      console.log('available')
      console.log("Author already exists.");
    }
    console.log(existingAuthor)
  } catch (error) {
    console.error("Error creating author:", error);
  }
};
