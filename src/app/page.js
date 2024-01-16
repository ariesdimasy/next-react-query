"use client";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { productUser } from "../../api/auth";

export default function Home() {
  const myData = [];
  const {
    data = myData,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: productUser,
  });

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setData(res);
  //     });
  // },[]);

  if (isLoading) {
    return <h3> Loading ... </h3>;
  }

  if (isError) {
    return <h3> Error ... </h3>;
  }

  if (isSuccess) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-100 hover:bg-sky-50">
        <h1> Hello </h1>

        {JSON.stringify(data)}
      </main>
    );
  }
}
