export default function ({ modall, children }: any) {
  // console.log(modall);

  return (
    <div
      style={{
        background: "gray",
        height: "100vh",
      }}
    >
      <>{modall}</>
      <>{children}</>
      LAYOUT
    </div>
  );
}
