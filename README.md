# MicroMentor's NodeJS Client

## Introduction
`micromentor-nodejs-client` is a NodeJS client for MicroMentor's API. 


## References
* [MicroMentor Homepage](https://micromentor.org)
* [MicroMentor API Schema](https://www.micromentor.org/api/v1/swagger-ui/#/)


## Dependencies
For now, we use [node-fetch](https://github.com/node-fetch/node-fetch), but will switch
to the built-in fetch once it becomes available in Node. Because `node-fetch` ver. 3 only
supports ESM modules, we use ver. 2.


## Getting Started
First make sure you're using the correct version of Node (>=17). If you use `nvm`, you can 
run `nvm use` and it will set the version specified in `.nvmrc`.

Now install the package with:

    yarn add micromentor-nodejs-client

or:

    npm install micromentor-nodejs-client

Then install the dependencies:

    yarn install

## Usage
First initialize the client like this:

    import micromentorClient from 'micromentor-nodejs-client
    
    const config = {
      apiRootUrl: 'https://micromentor.org/api/v1',
      authToken: <your API auth token>,
    }
    micromentorClient.init(config)

Alternatively to the parameter `config`, you can also specify the config values
as environment files:

    apiRootUrl: MM_API_API_ROOT_URL
    authToken: MM_API_AUTH_TOKEN

With these environment variables present, initialize the client with:

    micromentorClient.init()

Now you can retrieve and change data, i.e. create a profile/user:

    micromentorClient.upsertBaseProfile({
      user: {
        first_name: 'Anton',
        last_name: 'Zuflipuff',
      },
    })
      .then((baseProfile) => {
        console.log('Created new profile:', baseProfile)
      })
      .catch(error) {
        console.error(error)
      }

## Tests
Configure the test suite using an `.env` file: 

    MM_API_API_ROOT_URL=<url>
    MM_API_AUTH_TOKEN=<your auth token>

Run the test suite with:

    yarn test

Note: This library loads the `.env` config file *only* when running tests. In production, you
have to use the `config` parameter for `init()`, or load the environment variables elsewhere.

By default, the tests do not alter data through the API, i.e. no profiles are created. You
can force data updates in tests with the environment variable:

    TESTS_CAN_UPDATE_DATA=true

The tests need some object IDs to retrieve data. You can supply them as environment variables:

    MENTOR_PROFILE_ID_0=<mentor id>
