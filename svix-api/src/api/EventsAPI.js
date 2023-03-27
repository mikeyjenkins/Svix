import { svix } from "./Svix";

//function to create an event type through Svix connection
export const createEvent = async (event) => {
  return new Promise(async (resolve, reject) => {
    await svix.eventType
      .create({
        name: event.name,
        description: event.description,
        featureFlag: event.featureFlag || null,
        // schemas: event.schemas,
      })
      .then((res) => {
       resolve(res)
      })
      .catch((error) => {
        reject(error);
      });
  });
};

