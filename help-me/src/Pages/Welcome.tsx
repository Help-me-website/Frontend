export default function Welcome() {
  return (
    <div className="h-screen flex justify-center items-center">
      {/* <h1 className="text-2xl font-bold text-center mb-40">
        {Array.from("Welcome to HelpMe! website").map((char, index) => (
          <span
            key={index}
            className="inline-block animate-pulse-character"
            style={{ animationDelay: ${(index / 20) * 2}s }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1> */}
    </div>
  );
}