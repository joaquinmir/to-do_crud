# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Folder.create(name: 'Example')
Todo.create(folder_id: 2,content: 'This is an example', check: false)
Todo.create(folder_id: 2,content: 'This is another example', check: true)
Todo.create(folder_id: 2,content: 'This is an example', check: false)
Todo.create(folder_id: 2,content: 'This is another example', check: true)