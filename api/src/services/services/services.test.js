import {
  services,
  service,
  createService,
  updateService,
  deleteService,
} from './services'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('services', () => {
  scenario('returns all services', async (scenario) => {
    const result = await services()

    expect(result.length).toEqual(Object.keys(scenario.service).length)
  })

  scenario('returns a single service', async (scenario) => {
    const result = await service({ id: scenario.service.one.id })

    expect(result).toEqual(scenario.service.one)
  })

  scenario('creates a service', async () => {
    const result = await createService({
      input: { name: 'String7386484', cost: 8783978 },
    })

    expect(result.name).toEqual('String7386484')
    expect(result.cost).toEqual(8783978)
  })

  scenario('updates a service', async (scenario) => {
    const original = await service({ id: scenario.service.one.id })
    const result = await updateService({
      id: original.id,
      input: { name: 'String83666932' },
    })

    expect(result.name).toEqual('String83666932')
  })

  scenario('deletes a service', async (scenario) => {
    const original = await deleteService({
      id: scenario.service.one.id,
    })
    const result = await service({ id: original.id })

    expect(result).toEqual(null)
  })
})
