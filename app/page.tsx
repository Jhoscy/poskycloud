/** Components */
import Portal from "@/components/portal";
import Sea from "@/home/sea";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center">
      {/* <Sea /> */}
      <Portal totalDoors={8}/>
    </main>
  )
}
