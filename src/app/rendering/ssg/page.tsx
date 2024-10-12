// import { GetStaticProps } from "next";

interface User {
  id: string;
  name: string;
  username: string;
}

interface IPropsSSR {
  users: User[];
}

// export const getStaticProps: GetStaticProps = async () => {
//   const users: User[] = await res.json();

//   return {
//     props: users,
//   };
// };

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });

  return res.json();
}

export default async function () {
  const users: User[] = await fetchData();
  console.log(Date.now());

  console.log("Render");
  return (
    <div>
      {users.map((el) => (
        <p key={el.id}>{`${el.name}, ${el.username}, ${el.id}`}</p>
      ))}
    </div>
  );
}
