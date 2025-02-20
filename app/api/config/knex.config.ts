import { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'buesy2zhg4iry7k0qclr-mysql.services.clever-cloud.com',
      user: 'ugzvdic4isy74ngg',
      password: 'rXDCoM06QX7rHWHrshzS',
      database: 'buesy2zhg4iry7k0qclr'
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 7 }
  }
}

export default config
