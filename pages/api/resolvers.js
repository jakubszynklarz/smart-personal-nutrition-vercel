import { connectToDatabase } from "../../util/mongodb";

const resolvers = {
    Query: {
        recipes: async () => {
            const { db } = await connectToDatabase();
          
            const data = await db.collection("recipe").find({}).toArray();
              
            return data;
        },
    }   
};

export default resolvers;