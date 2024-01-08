import type { Pairing } from '@prisma/client'

import {
  pairings,
  pairing,
  createPairing,
  updatePairing,
  deletePairing,
} from './pairings'
import type { StandardScenario } from './pairings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('pairings', () => {
  scenario('returns all pairings', async (scenario: StandardScenario) => {
    const result = await pairings()

    expect(result.length).toEqual(Object.keys(scenario.pairing).length)
  })

  scenario('returns a single pairing', async (scenario: StandardScenario) => {
    const result = await pairing({ id: scenario.pairing.one.id })

    expect(result).toEqual(scenario.pairing.one)
  })

  scenario('creates a pairing', async (scenario: StandardScenario) => {
    const result = await createPairing({
      input: {
        url: 'String',
        personId: scenario.pairing.two.personId,
        santaId: scenario.pairing.two.santaId,
        order: 7599958,
        eventId: scenario.pairing.two.eventId,
        siteImage: 'String',
      },
    })

    expect(result.url).toEqual('String')
    expect(result.personId).toEqual(scenario.pairing.two.personId)
    expect(result.santaId).toEqual(scenario.pairing.two.santaId)
    expect(result.order).toEqual(7599958)
    expect(result.eventId).toEqual(scenario.pairing.two.eventId)
    expect(result.siteImage).toEqual('String')
  })

  scenario('updates a pairing', async (scenario: StandardScenario) => {
    const original = (await pairing({ id: scenario.pairing.one.id })) as Pairing
    const result = await updatePairing({
      id: original.id,
      input: { url: 'String2' },
    })

    expect(result.url).toEqual('String2')
  })

  scenario('deletes a pairing', async (scenario: StandardScenario) => {
    const original = (await deletePairing({
      id: scenario.pairing.one.id,
    })) as Pairing
    const result = await pairing({ id: original.id })

    expect(result).toEqual(null)
  })
})
