import {
  categories,
  category,
  createCategory,
  updateCategory,
  deleteCategory,
} from './categories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('categories', () => {
  scenario('returns all categories', async (scenario) => {
    const result = await categories()

    expect(result.length).toEqual(Object.keys(scenario.category).length)
  })

  scenario('returns a single category', async (scenario) => {
    const result = await category({ id: scenario.category.one.id })

    expect(result).toEqual(scenario.category.one)
  })

  scenario('creates a category', async () => {
    const result = await createCategory({
      input: { name: 'String8592280' },
    })

    expect(result.name).toEqual('String8592280')
  })

  scenario('updates a category', async (scenario) => {
    const original = await category({
      id: scenario.category.one.id,
    })
    const result = await updateCategory({
      id: original.id,
      input: { name: 'String8074922' },
    })

    expect(result.name).toEqual('String8074922')
  })

  scenario('deletes a category', async (scenario) => {
    const original = await deleteCategory({
      id: scenario.category.one.id,
    })
    const result = await category({ id: original.id })

    expect(result).toEqual(null)
  })
})
