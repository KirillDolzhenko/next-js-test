async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

export let revalidate = 15;

export default async function () {
  const data = await fetchData();

//   console.log(data);

  return <>ffff</>;
}
