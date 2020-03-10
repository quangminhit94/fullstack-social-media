cp .env.sample .env
createdb my_social_app
yarn
knex migrate:latest
knex seed:run
