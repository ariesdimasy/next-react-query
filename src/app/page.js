"use client";
import { useQuery, useIsFetching } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      );
    },
  });

  if (isLoading) {
    return <h1> Loading </h1>;
  }

  if (isError) {
    return <div> Error </div>;
  }

  if (isSuccess) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-100 hover:bg-sky-50">
        <h1> Hello </h1>
        <ul>
          {data?.map((item) => (
            <ol>
              {item.id} . {item.title}
            </ol>
          ))}
        </ul>
      </main>
    );
  }
}
