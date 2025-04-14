export default function ProjectsPage() {
    return (
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-6">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">E-commerce Platform</h2>
              <p className="text-muted-foreground mb-4">
                A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Next.js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">TypeScript</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Stripe</span>
              </div>
            </div>
          </div>
  
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">📊</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Analytics Dashboard</h2>
              <p className="text-muted-foreground mb-4">
                A real-time analytics dashboard with data visualization using D3.js and React.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">React</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">D3.js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Firebase</span>
              </div>
            </div>
          </div>
  
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">🎮</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">3D Game Experience</h2>
              <p className="text-muted-foreground mb-4">
                An interactive 3D game experience built with Three.js and React Three Fiber.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Three.js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">React</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">WebGL</span>
              </div>
            </div>
          </div>
  
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">💬</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Chat Application</h2>
              <p className="text-muted-foreground mb-4">
                A real-time chat application with end-to-end encryption using Socket.io and Node.js.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Node.js</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Socket.io</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">React</span>
              </div>
            </div>
          </div>
  
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Mobile App</h2>
              <p className="text-muted-foreground mb-4">
                A cross-platform mobile application built with React Native and Expo.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">React Native</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Expo</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Firebase</span>
              </div>
            </div>
          </div>
  
          <div className="border rounded-lg overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
              <p className="text-muted-foreground mb-4">
                An AI-powered assistant that helps users with daily tasks using natural language processing.
              </p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded-md">Python</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">TensorFlow</span>
                <span className="px-2 py-1 bg-muted text-xs rounded-md">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  