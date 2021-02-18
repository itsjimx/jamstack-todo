const React = require("react")
const {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache
} = require("@apollo/client");
const wrapRootElement = require("./wrap-root-element");

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri:
            "https://jimx-jamstack-todo.netlify.app/.netlify/functions/graphql"
    })
});

exports.wrapRootElement = ({ element }) => {
    return (
        <ApolloProvider client={client}>
            {wrapRootElement({ element })}
        </ApolloProvider>
    )
}