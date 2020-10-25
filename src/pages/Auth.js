import React, { Component, useEffect }  from 'react';
import queryString from "query-string";
import axios from "axios";

export default function Auth() {
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    sessionStorage.setItem("token", parsed.token);
    sessionStorage.setItem("refresh", parsed.refresh);
    //TODO: change page to dashboard
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
}