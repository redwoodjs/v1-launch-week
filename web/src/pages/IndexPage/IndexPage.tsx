import { MetaTags } from '@redwoodjs/web'
import Program from 'src/components/Program/Program'
import Header from 'src/components/Header/Header'
import { SocialLinks } from 'src/components/SocialLinks'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS v11 Launch"
        description="RedwoodJS v11 launch week is here!"
      />
      <Header />
      <div className="p-12 max-w-3xl m-auto">
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
    <div className="text-center mb-6">
      <h2 className="font-bold text-3xl mb-4">
        RedwoodJS <span className='italic underline text-yellow-400'><a href='https://twitter.com/redwoodjs/status/1509898766874206208?s=20&t=BKY-K8nWu0a4wQACqpLzAQ' target='_blank'>turns it up to v11</a></span> on April 4!
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
    <div className="mt-8 mb-8 grid place-content-center">
      <div className="p-4 border-l-2 ">
        The Redwood&nbsp;
        <a
          className="underline text-blue-400"
          href="https://community.redwoodjs.com/t/redwood-1-0-0-rc-final-is-available/2902"
        >
          1.0.0-rc.final is now Available
        </a>
      </div>
    </div>
    <p className=" text-gray-400">
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
    <div className="pt-4 text-center mx-auto max-w-md border-t-2 border-gray-900">
      <div className="text-xl pb-8">
        Ready to start your RedwoodJS adventure?
      </div>
      <a href="https://redwoodjs.com/tutorial">
        <button className="bg-orange-500 hover:bg-orange-400  text-white text-xl font-bold py-4 px-8 rounded">
          Start the Tutorial
        </button>
      </a>
    </div>
  </div>
)

export default IndexPage
