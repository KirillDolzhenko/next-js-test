// "use server";

interface User {
  id: string;
  name: string;
  username: string;
}

interface IPropsSSR {
  users: User[];
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users: User[] = await res.json();

//   return {
//     props: users,
//   };
// }

// export default function ({ users }: IPropsSSR) {
//   return (
//     <div>
//       {users.map((el) => (
//         <p>{`${el.name}, ${el.username}, ${el.id}`}</p>
//       ))}
//     </div>
//   );
// }

async function fetchRes() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });

  return await res.json();
}

export default async function () {
  const res = await fetchRes();
  console.log(Date.now());

  const users: User[] = res;
  return (
    <div>
      {users.map((el) => (
        <p key={el.id}>{`${el.name}, ${el.username}, ${el.id}`}</p>
      ))}
    </div>
  );
}
