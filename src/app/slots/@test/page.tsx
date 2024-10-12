async function fetchData() {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("FFF");

      resolve("f");
    }, 1000);
  });

  const f = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-cache",
      next: {
        revalidate: 10
      },
    }
  );

  console.log(99);

  return "ffff";
}

export default async function () {
  console.log("hhhh");

  const data = await fetchData();

  console.log("reefff");

  return (
    <>
      {data} {new Date().getTime()}
    </>
  );
}
