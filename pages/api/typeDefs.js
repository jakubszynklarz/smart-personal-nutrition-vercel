import { gql } from "apollo-server-micro";

const typeDefs = gql`
    type Query {
        recipes: [Recipe!]
    }

    type Recipe {
        _id: ID!
        name: String!
        products: [Product!]
        time: String!
        typesOfDiet: [TypeOfDiet]
        typesOfMeal: [TypeOfMeal!]
        tags: [Tag]
        description: String!
        photo: String!
    }

    type Product {
        _id: ID!
        name: String!
        quantity: String!
        calorificValue: Float!
        macronutrients: [Macronutrient!]
    }

    type TypeOfDiet {
        _id: ID!
        name: String!
    }

    type Macronutrient {
        _id: ID!
        name: String!
        quantity: Float!
    }

    type Micronutrients {
        _id: ID!
        name: String!
    }

    type TypeOfMeal {
        _id: ID!
        name: String!
    }

    type Tag {
        _id: ID!
        name: String!
    }
`;

export default typeDefs;