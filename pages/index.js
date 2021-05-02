import Head from "next/head";
import DrumMachine from "components/DrumMachine";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drum Machine</title>
      </Head>
      <div className="w-screen min-h-screen bg-blue-900 flex items-center justify-center">
        <DrumMachine />
      </div>
    </div>
  );
}
