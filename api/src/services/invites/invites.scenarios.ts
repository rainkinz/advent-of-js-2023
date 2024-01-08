import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:47:19.541Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String4592142',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String7467300',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:47:19.541Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String9942454',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        user: {
          create: {
            email: 'String7597909',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
