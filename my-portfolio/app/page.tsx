import ComputerModel from "@/components/computer-model"

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-center">Welcome to My Portfolio</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl">
        I'm a developer passionate about creating amazing web experiences
      </p>
      <div className="w-full h-[500px] md:h-[600px] flex justify-center">
        <ComputerModel />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <p>I specialize in front-end development, 3D modeling, and creating interactive web experiences.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
          <p>Check out my projects section to see my latest work and the technologies I've been using.</p>
        </div>
      </div>
    </div>
  )
}
