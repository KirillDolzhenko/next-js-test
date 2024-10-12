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
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
}

export const revalidate = 60;

export default async function () {
  const users: User[] = await fetchData();

  console.log(Date.now());

  return (
    <div>
      {users.map((el) => (
        <p key={el.id}>{`${el.name}, ${el.username}, ${el.id}`}</p>
      ))}
    </div>
  );
}
