Orgs = new Mongo.Collection('orgs')

Orgs.addLinks({
  parent: {
    type: 'one',
    collection: Orgs,
    field: 'parentId',
  },

  children: {
    collection: Orgs,
    inversedBy: 'parent',
  },
})
