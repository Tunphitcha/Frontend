import { ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
//import { setContext } from "@apollo/client/link/context";

const uri = 'http://localhost:4000/graphql';

//function connect Apollo
export const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri:uri,
        }),
        cache: new InMemoryCache(),
    });
};