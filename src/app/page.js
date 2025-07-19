import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FCF9F2",
        color: "#192129",
        fontFamily: "'Inter', Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        borderBottom: "2px solid #237381",
        paddingBottom: "1rem",
        marginBottom: "2rem",
        background: "#FCF9F2"
      }}>
        <Image
          src="/logo-dark.png"
          alt="EOZ Logo"
          width={80}
          height={80}
          priority
        />
        <div>
          <h1 style={{ margin: 0, color: "#237381", fontSize: "2.5rem" }}>EOZ</h1>
          <p style={{ margin: 0, fontSize: "1.25rem" }}>Your Smart Home Solution</p>
        </div>
      </header>

      <h2 style={{ color: "#237381", fontSize: "2rem" }}>Welcome to EOZ Smart Home Solutions</h2>
      <p style={{ fontSize: "1.15rem", marginTop: "1rem" }}>
        The best IoT and automation products, curated for you.<br />
        Start building your smarter, safer, more connected home!
      </p>
    </main>
  );
}
