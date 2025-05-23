# Backend

Express servers can be run with `node index.js`. 

1. [Basics Express Server](basic_server)

    Demonstrates how to bring up a basic express server, with only 1 basic route (to show it's working).

1. [Routing + Query Params](routing)

    Demonstrates how to set up some basic routes on an express server with query params

1. [CRUD](crud)

    Demonstrates how to set up some dynamic routes on the server and implements CRUD endpoints. Suggested to use Insomnia or Postman to demo the routes.

    Taken from codepath's demo repo with minor changes.

1. [DB Set up](routing_with_prisma)

    Demonstrates how to set up a table in a postgres database using prisma.

    1. Use pgAdmin to create a `users` database.
    2. Run `npm install prisma --save-dev` and `npx prisma init` to install and initialize Prisma.
    3. Update the `.env` file with the database credentials.
    4. Modify the `prisma/schema.prisma` to create a Users model.
    5. Run `npx prisma migrate dev --name init_users_table` to create the users table.
    6. Run `npx prisma studio` to see the schema.


    Taken from codepath's demo repo with minor changes.

1. [Routing with Prisma Client](routing_with_prisma)

    Demonstrates how to use prisma client to implement route handlers. Uses same dir as previous demo.

    1. Run `npx prisma generate` to generate the Prisma client.
    2. Create CRUD routes.
    3. Create `seed.js` to seed the database and update the `schema.prisma` and `package.json` to include the seed script.
    4. Seed the db with `npm run dev`
    4. Run `npx prisma studio` to see the populated values.
    
    Taken from codepath's demo repo with minor changes.
