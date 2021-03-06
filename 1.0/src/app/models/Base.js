const db = require('../../config/db')

function find(filters, table) {
  try {
    let query = ` SELECT * FROM ${table} `
    
    if(filters) {
      Object.keys(filters).map(key => {
      query += `${key}`
      Object.keys(filters[key]).map(field => {
      query += ` ${field} = '${filters[key][field]}' `
       })
     })
    }
    return db.query(query)
  } catch (error) {
    console.error(error)
  }
}


const Base = {
  init({table}) {
    if(!table) throw new  Error(`Invalid Params`);
    this.table = table

    return this
  },

  async create(fields) {
    try {
      let keys = [],
          values = []

        Object.keys(fields).map(key => {
          keys.push(key)
          values.push(`'${fields[key]}'`)
        });

        const query = `INSERT INTO ${this.table} (${keys.join(',')})
          VALUES (${values.join(',')})
          RETURNING id`

          const results = await db.query(query);
          return results.rows[0].id;

    } catch (error) {
      console.error(error)
    }
  },

  async find(id) {
    try {
      const results = await find({ where: { id } }, this.table)
      return results.rows[0]
    } catch (error) {
      console.error(error)
    }
    
  },

  async findAll(filters) {
    try {
     const results = await find(filters, this.table)
     return results.rows
    } catch (error) {
      console.error(error)
    }
  },

}

module.exports = Base