export default function ({ params }: { params: { slug: string[] } }) {

  return (
    <>
      {params.slug ? (
        params.slug.map((el) => {
          return <span>{el}</span>;
        })
      ) : (
        <>empty</>
      )}
    </>
  );
}
