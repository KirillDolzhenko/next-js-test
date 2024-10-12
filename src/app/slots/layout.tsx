export default function ({
  children,
  test,
  other,
}: {
  children: React.ReactNode;
  test: React.ReactNode;
  other: React.ReactNode;
}) {
  // console.log(children);

  return (
    <>
      <b>children:</b> {children}
      <br />
      <b>test:</b> {test}
      <br />
      <b>other:</b> {other}
    </>
  );
}
