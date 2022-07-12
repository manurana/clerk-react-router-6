const dotenv = require("dotenv");

// load from all 3 env files
dotenv.config();

const { REACT_APP_HASURA_HTTP_ENDPOINT, HASURA_ADMIN_SECRET } = process.env;

module.exports = {
  schema: [
    {
      [REACT_APP_HASURA_HTTP_ENDPOINT]: {
        headers: {
          "x-hasura-admin-secret": [HASURA_ADMIN_SECRET],
        },
      },
    },
  ],
  documents: ["./src/**/*.graphql"],
  extensions: {
    codegen: {
      generates: {
        "./src/graphql/generated.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
          ],
        },
      },
    },
  },
};
