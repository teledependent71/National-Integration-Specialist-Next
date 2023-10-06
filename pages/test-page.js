import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - National Integration Specialist</title>
          <meta
            property="og:title"
            content="test-page - National Integration Specialist"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_ffgl3) => (
            <>
              <h1>{context_ffgl3?.Name}</h1>
            </>
          )}
          initialData={props.contextFfgl3Prop}
          persistDataDuringLoading={true}
          key={props?.contextFfgl3Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextFfgl3Prop = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextFfgl3Prop: contextFfgl3Prop?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
