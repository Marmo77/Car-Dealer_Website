import { Client, Databases, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const database = new Databases(client);

export const update = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("brand", "BMW"),
    ]);
    //     // jesli istnieje bmw zmien dostepnosc na false
    if (result.documents.length > 0) {
      console.log(result);
      const doc = result.documents[0];

      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        isAvailable: true,
      });
    } else {
      console.log(result);
    }
    // const response = await database.getDocument(DATABASE_ID,COLLECTION_ID,)
  } catch (error) {
    console.error(error);
  }
};
