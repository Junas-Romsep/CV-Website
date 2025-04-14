export default function ExperiencePage() {
    return (
      <div className="container py-10">
        <h1 className="text-4xl font-bold mb-6">Experience</h1>
        <div className="space-y-8">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Senior Developer</h2>
            <p className="text-muted-foreground mb-4">Tech Company • 2020 - Present</p>
            <p>
              Led development of multiple web applications using React, Next.js, and TypeScript. Implemented CI/CD
              pipelines and mentored junior developers.
            </p>
          </div>
  
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Web Developer</h2>
            <p className="text-muted-foreground mb-4">Digital Agency • 2017 - 2020</p>
            <p>
              Developed responsive websites and web applications for various clients. Worked with React, Vue.js, and
              Node.js.
            </p>
          </div>
  
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Junior Developer</h2>
            <p className="text-muted-foreground mb-4">Startup • 2015 - 2017</p>
            <p>
              Assisted in the development of web applications using JavaScript and PHP. Implemented responsive designs and
              worked on bug fixes.
            </p>
          </div>
        </div>
      </div>
    )
  }
  