"use client";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { posts } from "../../api/auth";

export default function Home() {
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: posts,
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

        <ul>
          {data?.data?.map((item) => (
            <ol>
              {item.id} . {item.title}
            </ol>
          ))}
        </ul>
      </main>
    );
  }
}
