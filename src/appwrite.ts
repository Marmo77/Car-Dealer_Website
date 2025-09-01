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
let userCountry = userLocale.country;

// ############################
// set user basic data (IP & Country)
export const setUserData = () => {
  if (
    userIpAddress !== localStorage.getItem("userIpAddress") ||
    userCountry !== localStorage.getItem("userCountry")
  ) {
    localStorage.setItem("userIpAddress", userIpAddress);
    localStorage.setItem("userCountry", userCountry);
  } else {
    console.log("User ip is: ", userIpAddress);
    console.log("User country is: ", userCountry);
  }
};

export const AllCarsLimit = async (limit: number) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(limit),
    ]);
    console.log("All cars: ", result.documents);
    return result.documents;
  } catch (error) {
    console.error("Error fetching All cars ❌: ", error);
    return [];
  }
};

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

export const getFilteredCars = async (
  brand: string[],
  //model: string, // -> not made yet
  search: string,
  priceRange: number[],
  sortBy: string,
  limit: number
) => {
  try {
    const queries = [];

    //limit
    // queries.push(Query.limit(limit));

    //brand
    if (brand && brand.length > 0) {
      queries.push(Query.equal("brand", brand));
    }

    //price range
    if (priceRange && priceRange.length === 2) {
      const [min, max] = priceRange;
      queries.push(
        Query.greaterThanEqual("price", min),
        Query.lessThanEqual("price", max)
      );
    }

    //search brand
    if (search && search.length > 1) {
      const terms = search.split(" ");
      terms.forEach((term) =>
        queries.push(
          Query.or([
            Query.contains("brand", term),
            Query.contains("model", term),
            // Query.contains("year", term),
            // Query.contains("fuel", term),
          ])
        )
      );
    }

    //sort by
    if (sortBy) {
      switch (sortBy) {
        case "price-low":
          queries.push(Query.orderAsc("price"));
          break;
        case "price-high":
          queries.push(Query.orderDesc("price"));
          break;
        case "year-new":
          queries.push(Query.orderDesc("year"));
          break;
        case "year-old":
          queries.push(Query.orderAsc("year"));
          break;
        case "mileage-low":
          queries.push(Query.orderAsc("mileage"));
          break;
        case "mileage-high":
          queries.push(Query.orderDesc("mileage"));
          break;
        default:
          queries.push(Query.orderAsc("price"));
          break;
      }
    }

    const result = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      queries
    );
    // console.log("Filtered cars: ", result.documents);
    return result.documents;
    //
  } catch (error) {
    console.error(error);
  }
};

// export const getHeroSearchBarFilters = async (
//   brand: string,
//   maxPrice: string,
//   year: string,
//   mileage: string
// ) => {
//   try {
//     const filtersQueries = [];

//     if (brand !== "all") {
//       filtersQueries.push(Query.equal("brand", brand));
//     }
//     if (maxPrice === "unlimited") {
//       filtersQueries.push(Query.greaterThanEqual("price", 0));
//     } else if (maxPrice) {
//       filtersQueries.push(Query.lessThanEqual("price", Number(maxPrice)));
//       filtersQueries.push(Query.greaterThanEqual("price", 0));
//     }

//     if (year === "older") {
//       filtersQueries.push(Query.lessThanEqual("year", 2023));
//     } else if (year) {
//       filtersQueries.push(Query.greaterThanEqual("year", Number(year)));
//     }

//     if (mileage === "unlimited") {
//       filtersQueries.push(Query.greaterThanEqual("mileage", 0));
//     } else if (mileage) {
//       filtersQueries.push(Query.lessThanEqual("mileage", Number(mileage)));
//     }

//     const result = await database.listDocuments(
//       DATABASE_ID,
//       COLLECTION_ID,
//       filtersQueries
//     );

//     console.log(result.documents);
//     return result.documents;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const getHeroSearchBarFilters = async (
  brand: string,
  maxPrice: string,
  year: string,
  mileage: string
) => {
  try {
    const filtersQueries = [];

    Query.limit(100);

    if (brand && brand !== "all" && brand !== "") {
      filtersQueries.push(Query.equal("brand", brand));
    }

    if (maxPrice === "unlimited") {
      filtersQueries.push(Query.greaterThanEqual("price", 0));
    } else if (maxPrice && maxPrice !== "") {
      filtersQueries.push(Query.lessThanEqual("price", Number(maxPrice)));
      filtersQueries.push(Query.greaterThanEqual("price", 0));
    }

    if (year === "older") {
      filtersQueries.push(Query.lessThanEqual("year", 2023));
    } else if (year && year !== "") {
      filtersQueries.push(Query.greaterThanEqual("year", Number(year)));
    }

    if (mileage === "unlimited") {
      filtersQueries.push(Query.greaterThanEqual("mileage", 0));
    } else if (mileage && mileage !== "") {
      filtersQueries.push(Query.lessThanEqual("mileage", Number(mileage)));
    }

    const result = await database.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      filtersQueries
    );

    console.log("Hero search results:", result.documents);
    return result.documents;
  } catch (error) {
    console.error("Hero search error:", error);
    return [];
  }
};
