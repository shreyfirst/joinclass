import React, { Component, useEffect }  from 'react';
import queryString from "query-string";
import axios from "axios";

export default function Auth() {
  useEffect(() => {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);
    axios.post(`https://google.com`, parsed).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Lol</h1>
    </div>
  );
}