import {
  masters,
  master,
  createMaster,
  updateMaster,
  deleteMaster,
} from './masters'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('masters', () => {
  scenario('returns all masters', async (scenario) => {
    const result = await masters()

    expect(result.length).toEqual(Object.keys(scenario.master).length)
  })

  scenario('returns a single master', async (scenario) => {
    const result = await master({ id: scenario.master.one.id })

    expect(result).toEqual(scenario.master.one)
  })

  scenario('creates a master', async (scenario) => {
    const result = await createMaster({
      input: {
        firstName: 'String',
        secondName: 'String',
        categoryId: scenario.master.two.categoryId,
      },
    })

    expect(result.firstName).toEqual('String')
    expect(result.secondName).toEqual('String')
    expect(result.categoryId).toEqual(scenario.master.two.categoryId)
  })

  scenario('updates a master', async (scenario) => {
    const original = await master({ id: scenario.master.one.id })
    const result = await updateMaster({
      id: original.id,
      input: { firstName: 'String2' },
    })

    expect(result.firstName).toEqual('String2')
  })

  scenario('deletes a master', async (scenario) => {
    const original = await deleteMaster({
      id: scenario.master.one.id,
    })
    const result = await master({ id: original.id })

    expect(result).toEqual(null)
  })
})
