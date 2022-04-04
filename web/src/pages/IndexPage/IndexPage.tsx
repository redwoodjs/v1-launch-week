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
    <div className="mb-6 text-center">
      <h2 className="mb-4 text-4xl font-bold">
        RedwoodJS goes 1.0 on April 4!
      </h2>
    </div>

    <h3>
      From Monday April 4th through Thursday April 7th, we will celebrate the
      release of 1.0.0 with a series of announcements and events from around the
      Redwood ecosystem.
      <br />
      <br />
      It all leads up to a <span className="font-bold">BIG</span> announcement
      on Thursday.
    </h3>
    <div className="grid mt-8 mb-8 place-content-center">
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
      </div>
    </div>
    <p className="text-gray-400 ">
      Events require free Lu.ma registration. See specific details via
      &quot;RSVP&quot;s below.
      <br />
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
