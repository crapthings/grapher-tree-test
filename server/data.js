Orgs.remove({})

const isRootExist = Orgs.findOne({ name: 'root org' })

!isRootExist && Orgs.insert({
  name: 'root org',
}, (e, rootId) => {
  for (let i in Array(10).fill(n => n + 1)) {
    Orgs.insert({
      name: 'org' + i,
      parentId: rootId
    })
  }
})


