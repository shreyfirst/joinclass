import React, { Component, useEffect }  from 'react';
import queryString from "query-string";
import axios from "axios";
import { useCookies } from "react-cookie";


export default function Auth() {
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    setCookie("token", parsed.token, {
      path: "/"
    });
    setCookie("refresh", parsed.refresh, {
      path: "/"
    });
    //dashboard page
    window.location.assign("/dashboard")
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
}