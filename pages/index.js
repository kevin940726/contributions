import React from 'react';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Contributions</title>
      <meta
        name="description"
        content="View the Github contributions of a user"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <form
        role="search"
        aria-labelledby="label"
        onSubmit={e => {
          e.preventDefault();

          window.location.assign('/' + e.currentTarget.elements.userName.value);
        }}
      >
        <h1>Contributions</h1>

        <h2 id="label">View the Github contributions of</h2>

        <input name="userName" placeholder="kevin940726" />
      </form>
    </main>

    <style jsx global>{`
      html,
      body {
        margin: 0;
        font-family: 'Helvetica';
        background-color: #24292e;
      }
    `}</style>

    <style jsx>{`
      main {
        width: 100%;
        max-width: 600px;
        margin: auto;
        padding-top: 40px;
      }

      h1,
      h2 {
        margin-top: 0;
      }

      h2 {
        font-size: 18px;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 186;
        width: 100%;
        padding: 16px;
        font-size: 16px;
        background-color: #24292e;
        line-height: 1.5;
        color: #fff;
        font-weight: 600;
        box-sizing: border-box;
      }

      input {
        background-color: hsla(0, 0%, 100%, 0.125);
        border: none;
        height: 28px;
        width: 300px;
        border-radius: 3px;
        padding: 6px 8px;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        box-sizing: border-box;
        outline: none;
      }

      input:focus {
        background-color: #fff;
        color: #000;
      }
    `}</style>
  </>
);

export default Home;
