export const Schedule: Day[] = [
  {
    ordinal: 1,
    date: new Date(Date.UTC(2022, 3, 4, 15)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        title: 'RedwoodJS 1.0 Announcement',
        description: (
          <>
            <p>
              So. Many. Amazing things to show you. Tune in for announcements
              starting at 9am PDT:
            </p>
            <ul className="list-disc ml-8 mt-2">
              <li>
                <a
                  className="underline text-blue-400"
                  href="https://twitter.com/redwoodjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="underline text-blue-400"
                  href="https://community.redwoodjs.com/c/announcements/5"
                  target="_blank"
                  rel="noreferrer"
                >
                  Forum Announcements
                </a>
              </li>
              <li>
                <a
                  className="underline text-blue-400"
                  href="https://redwoodjs.us19.list-manage.com/subscribe/post?u=0c27354a06a7fdf4d83ce07fc&id=09f634eea4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Newsletter
                </a>
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    ordinal: 2,
    date: new Date(Date.UTC(2022, 3, 5, 16)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 18, 0)),
        title: 'Redwood Startup Showcase',
        description: (
          <>
            <p className="mb-4">
              Startups built with Redwood have raised over $18M in the past six
              months. 🤯 Come watch both funded startups and indie devs share
              their experience with Redwood and the community.
            </p>
            <p>This event will include live demos and panel discussions.</p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/fh8ejd3j',
        },
      },
    ],
  },
  {
    ordinal: 3,
    date: new Date(Date.UTC(2022, 3, 6, 16)),
    description: (
      <>
        <p className="mb-4">
          Redwood has over 25 partner integrations covering deployment,
          authentication, databases, and more. During these two Office Hour
          sessions, we&#39;ll sit down with representatives from many partner
          companies. The format will be casual and intended for Q&amp;A and open
          discussion.
        </p>
      </>
    ),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 15, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 16, 30)),
        title: 'Partner Office Hours - Block 1',
        description: (
          <>
            <p className="mb-2">
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Supabase
              </a>
              : Paul Copplestone
            </p>
            <p className="mb-2">
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Stripe
              </a>
              : Paul Asjes
            </p>
            <p className="mb-2">
              <a
                href="https://prisma.io"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Prisma
              </a>
              : Nikolas Burk
            </p>
            <p className="mb-2">
              <a
                href="https://www.the-guild.dev"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                The Guild
              </a>
              : Uri Goldshtein, Dotan Simha, Arda Tanrikulu, Charly Poly, Jamie
              Barton, and Laurin Quast
            </p>
            <p className="mb-2">
              <a
                href="https://serverless.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Serverless.com
              </a>
              : Matthieu Napoli
            </p>
            <p className="mb-2">
              <a
                href="https://chakra-ui.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Chakra-UI
              </a>
              : Segun (Sage) Adebayo and Lazar Nikolov
            </p>
            <p className="mb-2">
              <a
                href="https://fly.io"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Fly.io
              </a>
              : Joshua Sierles
            </p>
            <p className="mb-2">
              <a
                href="https://clerk.dev"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Clerk
              </a>
              : Colin
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/2gxawl5t',
        },
      },
      {
        time: new Date(Date.UTC(2022, 3, 4, 20, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 21, 30)),
        title: 'Partner Office Hours - Block 2',
        description: (
          <>
            <p className="mb-2">
              <a
                href="https://netlify.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Netlify
              </a>
              : Matt Biilmann
            </p>
            <p className="mb-2">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Vercel
              </a>
              : Lee Robinson
            </p>
            <p className="mb-2">
              <a
                href="https://storybook.js.org"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Storybook
              </a>
              : Michael Chan
            </p>
            <p className="mb-2">
              <a
                href="https://planetscale.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Planetscale
              </a>
              : James Q Quick
            </p>
            <p className="mb-2">
              <a
                href="https://render.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Render
              </a>
              : Anurag Goel
            </p>
            <p className="mb-2">
              <a
                href="https://gitpod.io"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Gitpod
              </a>
              : Mike Nikles
            </p>
            <p className="mb-2">
              <a
                href="https://layer0.co"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Layer0
              </a>
              : Ishan Anand and Tristan Lee
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/dz7zj5ca',
        },
      },
    ],
  },
  {
    ordinal: 4,
    date: new Date(Date.UTC(2022, 3, 7, 16)),
    events: [
      {
        time: new Date(Date.UTC(2022, 3, 4, 16, 0)),
        endTime: new Date(Date.UTC(2022, 3, 4, 18, 0)),
        title: 'The BIG Announcement + Startup Office Hours',
        description: (
          <>
            <p className="mb-4">
              Redwood is all about helping more startups explore more territory
              more quickly. Join us for Office Hours Q&amp;A and discussion
              about startups with the Core Team and founders using Redwood.
            </p>
            <p>
              We’ll kick off the event with a{' '}
              <span className="font-bold">BIG</span> announcement… any guesses
              as to what it might be???
            </p>
          </>
        ),
        action: {
          label: 'RSVP',
          url: 'https://lu.ma/qyxzkb02',
        },
      },
    ],
  },
]

export type Day = {
  ordinal: number
  date: Date
  events: Event[]
  description?: React.ReactNode
}

export type Event = {
  time: Date
  endTime?: Date
  title: string
  description?: string | React.ReactNode
  action?: Action
}

export type Action = {
  label: string
  url: string
}
