import Hello from "./components/Hello";


export default function Home() {

  console.log("What am I? ---Client/Server")
  return (<>
   <h1 className="text-3xl">Brian Trial</h1>
   <Hello/>
   </>
  );
}
