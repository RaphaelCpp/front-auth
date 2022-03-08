import Head from "next/dist/shared/lib/head";
import React from "react";
import Link from "next/link";
import axios from "axios";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link> */}
      </Head>

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>

          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link active">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register">
                  <a className="nav-link active">Register</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="form-signin">{children}</main>
    </>
  );
};

export default Layout;
