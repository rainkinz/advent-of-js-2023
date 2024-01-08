import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        userId: 6939259,
        order: 1491983,
        siteImage: 'String',
        siteTitle: 'String',
        siteDescription: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:47:54.926Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String4974872',
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
        name: 'String',
        url: 'String',
        userId: 3974007,
        order: 28912,
        siteImage: 'String',
        siteTitle: 'String',
        siteDescription: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-01-08T21:47:54.926Z',
            sendReminder: true,
            owner: {
              create: {
                email: 'String32744',
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

export type StandardScenario = ScenarioData<WishList, 'wishList'>
