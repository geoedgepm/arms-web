/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export default class Helper {
   private static instance: Helper;

   /**
    * The Singleton's constructor should always be private to prevent direct
    * construction calls with the `new` operator.
    */
   private constructor() { }

   /**
    * The static method that controls the access to the singleton instance.
    *
    * This implementation let you subclass the Singleton class while keeping
    * just one instance of each subclass around.
    */
   public static getInstance(): Helper {
       if (!Helper.instance) {
         Helper.instance = new Helper();
       }

       return Helper.instance;
   }

   /**
    * Finally, any singleton should define some business logic, which can be
    * executed on its instance.
    */
   public transformArrayToObject(collection: any[]) {
      const object: Record<string, { count: number; status: string }> = {};

      collection.forEach((item: any) => {
         object[item.status] = item.count;
      });

      return object;
   }
}