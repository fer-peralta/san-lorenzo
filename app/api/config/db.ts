import knex from 'knex'
import config from './knex.config'

export const db = knex(config.development)
