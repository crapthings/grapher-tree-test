Meteor.startup(() => {
  const root = Orgs.createQuery({
    $filters: { name: 'root org' },
    name: 1,
    children: { name: 1 },
  })

  const orgs = Orgs.createQuery({
    name: 1,
    parent: {
      name: 1,
      children: {
        name: 1,
        // if u remove the below comment, u will never get docs, unless u restart server
        // parent: {
        //   name: 1,
        // },
      },
    },
  })

  Meteor.autorun(() => {
    if (root.subscribe().ready() && orgs.subscribe().ready()) {
      console.log(JSON.stringify(root.fetchOne(), null, 4))
      console.log(JSON.stringify(orgs.fetch(), null, 4))
    }
  })

})
