import {
  Client,
  Databases,
  Query,
  ID,
  Permission,
  Role,
  Locale,
} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const CONTACT_MESSAGE_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_CONTACT_MESSAGE_COLLECTION_ID;
const NEWSLETTER_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_NEWSLETTER_COLLECTION_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

// ############################
// GET MORE INFO ABOUT USER

const locale = new Locale(client);

const userLocale = await locale.get();
const userIpAddress = userLocale.ip;
const userCountry = userLocale.country;
// ############################

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

export const DummyCars = async () => {
  try {
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const LoginUser = async () => {
  try {
  } catch (error) {
    console.error(error);
  }
};

interface handleContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  questionType: string;
  subject: string;
  message: string;
}

export const handleContactForm = async ({
  firstName,
  lastName,
  email,
  phone,
  questionType,
  subject,
  message,
}: handleContactForm) => {
  try {
    // const result = await database.listDocuments(
    //   DATABASE_ID,
    //   CONTACT_MESSAGE_COLLECTION_ID
    // );

    const createNewMessage = await database.createDocument(
      DATABASE_ID,
      CONTACT_MESSAGE_COLLECTION_ID,
      ID.unique(),
      {
        firstName: firstName,
        lastName: lastName,
        Email: email,
        Phone: phone,
        QuestionType: questionType,
        Subject: subject,
        Message: message,
      },
      [
        Permission.read(Role.any()),
        Permission.update(Role.any()),
        Permission.delete(Role.any()),
      ]
    );
    // console.log(createNewMessage);
    return createNewMessage;
  } catch (error) {
    console.error(error);
  }
};

export const handleNewsletterUser = async ({ email }: { email: string }) => {
  try {
    const addNewsletterUser = await database.createDocument(
      DATABASE_ID,
      NEWSLETTER_COLLECTION_ID,
      ID.unique(),
      {
        email: email,
        user_ip: userIpAddress,
        user_country: userCountry,
      }
    );
    return addNewsletterUser;
  } catch (error) {
    console.error(error);
  }
};

export const featuredCars = async () => {
  try {
    //getting random number for result
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);

    if (!result.documents.length) return [];

    const sortCars = [...result.documents].sort(() => 0.5 - Math.random());

    const shuffledCars = sortCars.slice(0, 3);
    // const random_numb = Math.floor(Math.random() * result.documents.length);

    console.log("you got 3 cars: ", shuffledCars);
    return shuffledCars;
  } catch (error) {
    console.error(error);
  }
};

export const show_all_cars = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log("All cars: ", result.documents);
    return result.documents;
  } catch (error) {
    console.error("Error fetching All cars ❌: ", error);
    return [];
  }
};
// export const getFilteredCars = async (brand: string) => {
//   try {
//     const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
//       Query.equal("brand", brand.toLowerCase()),
//     ]);
//     console.log("Filtered cars: ", result.documents);
//     return result.documents;
//   } catch (error) {
//     console.error("Error fetching Filtered cars ❌: ", error);
//     return [];
//   }
// };
// export const getSearchedCars = async (search: string) => {
//   try {
//     const terms = search.split(" ");

//     const queries = terms.map((term) =>
//       Query.or([Query.contains("brand", term), Query.contains("model", term)])
//     );

//     const result = await database.listDocuments(
//       DATABASE_ID,
//       COLLECTION_ID,
//       queries
//     );
//     //   Query.contains("brand", search) || Query.contains("model", search),
//     //   Query.equal("brand", search) ||
//     console.log("Searched cars: ", result.documents);
//     return result.documents;
//   } catch (error) {
//     console.error("Error fetching Searched cars ❌: ", error);
//     return [];
//   }
// };

export const getFilteredAndSearchedCars = async (
  brand: string,
  search: string
) => {
  try {
    // tworze array z queires zeby zbieral queires
    const queries = [];

    // sprawdzam czy brand(marka z comboboxa nie jest pusta (wybrane - Wszystkie, jesli tak to nie dodaje tych Queries do arraya))
    if (brand && brand !== "all") {
      queries.push(Query.equal("brand", brand.toLowerCase()));
    }

    // teraz sprawdzamy czy użytkownik wyszukiwał (jeśli wyszukiwanie istnieje i ma długość większą niż 2 znaki to wtedy bierze pod uwage (pushuje do naszych kwerend))

    if (search && search.length > 1) {
      const terms = search.split(" ");
      terms.forEach((term) =>
        queries.push(
          Query.or([
            Query.contains("brand", term),
            Query.contains("model", term),
          ])
        )
      );
    }
    const result = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      queries
    );
    console.log("Filtered and Searched Cars: ", result);
    return result.documents;
  } catch (error) {
    console.error("Error in filtering and searching Cars! ", error);
  }
};
