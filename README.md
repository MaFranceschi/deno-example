# deno-example
Getting started with Deno with a simple Rest API project.

The API connects to the [Medium API](https://github.com/Medium/medium-api-docs) it requires an `IntegrationKey` it can be generated from your Medium [account](https://medium.com/me/settings). It only contains four possible endpoints describe it below:
- **GET /**  - Gets a friendly API Message
- **GET /users** - Get user profile.
- **GET /publications** - Gets publications based on the user profile.
- **POST /posts** - Creates a new post.

## Setup

Before start, you should have deno installed on your machine if you don't have deno yet, go to [deno.land](https://deno.land/#installation) and come back soon.

- Create `.env` file with the following variables and replace the content for each one. 

``` shell
APP_PORT=[port]
MEDIUM_API_URL=[url]
MEDIUM_INTEGRATION_KEY=[key]
```

-  Then execute the next command, it should be running on http://localhost at the port you set up before.

``` shell
$ deno run --allow-read --allow-net server.ts
```

That's all. Up and running. You can hit the server URL to get a response like this

``` shell
{ message: "Welcome to Deno example application." }
```

## Testing

Unit tests are located at the `tests/` folder. To run our tests, run the next command

``` shell
$ deno test --allow-read tests/*.ts
```