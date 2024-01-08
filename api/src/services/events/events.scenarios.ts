import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-01-08T21:47:28.885Z',
        sendReminder: true,
        owner: {
          create: {
            email: 'String9567374',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-01-08T21:47:28.885Z',
        sendReminder: true,
        owner: {
          create: {
            email: 'String2695427',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
