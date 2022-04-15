import { MetaTags } from '@redwoodjs/web'
import Program from 'src/components/Program/Program'
import Header from 'src/components/Header/Header'
import { SocialLinks } from 'src/components/SocialLinks'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS v1.0 Launch"
        description="RedwoodJS v1.0 launch week is here!"
        ogUrl="https://redwoodjs.com"
        ogContentUrl="https://redwoodjs.com/images/rw-og.png"
      />
      <Header />
      <div className="max-w-3xl p-12 m-auto">
        <Overview />
        <Program />
        <CTA />
      </div>
      <div>
        <SocialLinks />
      </div>
    </>
  )
}

const Overview = () => (
  <div>
    <p className="text-gray-400 mb-8">
      Redwood is an opinionated, full-stack, JavaScript/TypeScript web app
      framework designed to keep you moving fast as your app grows from side
      project to startup. With React, GraphQL, Prisma, Storybook, and Jest all
      integrated, you can focus on building your app!&nbsp;
      <a className="text-blue-400 underline" href="https://redwoodjs.com/">
        Learn More
      </a>
    </p>
    <div className="mt-6 mb-6">
      <div className="p-4 text-center">
        📬 <span className="font-bold">You&apos;re invited:</span> RedwoodJS 1.0
        Meetup on April 28th
        <br />
        <a
          className="text-blue-400 underline"
          href="https://lu.ma/exbn205k"
          target="_blank"
          rel="noreferrer"
        >
          Details and Free Registration on Lu.ma
        </a>
      </div>
    </div>

    <div className="mb-6 text-center">
      <h2 className="mb-4 text-4xl font-bold">
        RedwoodJS went 1.0 on April 4!
      </h2>
    </div>

    <h3>
      From Monday April 4th through Thursday April 7th, we celebrated the
      release of 1.0.0 with a series of announcements and events from around the
      Redwood ecosystem.
      <br />
      <br />
      It all led up to a <span className="font-bold">BIG</span> announcement on
      Thursday (announcement of the Redwood Startup Fund).
    </h3>
    <div className="mt-6 mb-6 ml-8">
      <div className="p-4 border-l-2 ">
        Redwood&nbsp;
        <a
          className="text-blue-400 underline"
          href="https://community.redwoodjs.com/t/redwood-1-0-is-now-available/2958"
        >
          1.0.0 is now Available 🚀
        </a>
        <br /> <br />
        Read Tom Preston-Werner&apos;s&nbsp;
        <a
          className="text-blue-400 underline"
          href="https://tom.preston-werner.com/2022/04/04/redwood-v1-and-funding.html"
        >
          $1M Funding Announcement
        </a>
        <br /> <br />
        Read the&nbsp;
        <a
          className="text-blue-400 underline"
          href="https://tom.preston-werner.com/2022/04/07/the-redwood-startup-fund.html"
        >
          Redwood Startup Fund Announcement
        </a>
        <br /> <br />
        Watch the&nbsp;
        <a
          className="text-blue-400 underline"
          href="https://youtube.com/playlist?list=PL1HNO86XPhd2cbIHNet06aaTS2TqQ2ORT"
        >
          Event Recordings on YouTube
        </a>
      </div>
    </div>
    <p className="text-gray-400 ">
      Dates and times below shown in your{' '}
      <span>
        local time zone ({Intl.DateTimeFormat().resolvedOptions().timeZone})
      </span>
      .
    </p>
  </div>
)

const CTA = () => (
  <div className="mt-36">
    <div className="max-w-md pt-4 mx-auto text-center border-t-2 border-gray-900">
      <div className="pb-8 text-xl">
        Ready to start your RedwoodJS adventure?
      </div>
      <a href="https://redwoodjs.com/tutorial">
        <button className="px-8 py-4 text-xl font-bold text-white bg-orange-500 rounded hover:bg-orange-400">
          Start the Tutorial
        </button>
      </a>
    </div>
  </div>
)

export default IndexPage
