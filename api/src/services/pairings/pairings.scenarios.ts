import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        url: 'String',
        order: 1081626,
        siteImage: 'String',
        person: {
          create: {
            email: 'String6521879',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        santa: {
          create: {
            email: 'String5567083',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:48:23.122Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String4397105',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        url: 'String',
        order: 4206363,
        siteImage: 'String',
        person: {
          create: {
            email: 'String3133231',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        santa: {
          create: {
            email: 'String6451348',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:48:23.122Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String4931223',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
