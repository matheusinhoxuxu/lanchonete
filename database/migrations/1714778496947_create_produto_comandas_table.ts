import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produto_comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table.string('quantidade',45).notNullable().unique()

      // table.integer('produto_id').unsigned().references('id').inTable('produtos')
      // table.integer('comanda_id').unsigned().references('id').inTable('comanda')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}