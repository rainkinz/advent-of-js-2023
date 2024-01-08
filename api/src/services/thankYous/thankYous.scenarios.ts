import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        fromUser: {
          create: {
            email: 'String4034756',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        toUser: {
          create: {
            email: 'String3700518',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:49:19.663Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String6130877',
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
        message: 'String',
        fromUser: {
          create: {
            email: 'String1000541',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        toUser: {
          create: {
            email: 'String6266593',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:49:19.663Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String5123387',
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

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
