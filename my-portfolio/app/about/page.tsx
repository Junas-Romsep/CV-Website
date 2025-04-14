export default function AboutPage() {
  return (
    <div className="container py-10 mx-auto flex flex-col">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-lg mb-4">
            I'm a passionate Application Developer with a focus on building clean, user-friendly, and secure digital
            experiences across web and mobile platforms. With a bachelor's degree in frontend development and web
            security from Jensen Yrkeshögskola, I’ve developed a solid foundation in modern development practices and a
            strong eye for detail.
          </p>
          <p className="text-lg mb-4">
            My technical experience spans frameworks like React, Vue, and React Native, with additional hands-on work in
            Flutter, Three.js, and a variety of backend technologies. Over the past few years, I’ve worked on various
            PLM (Product Lifecycle Management) projects, particularly within the industrial equipment sector. At Technia,
            I’ve contributed to developing and optimizing TVCs (Technia Value Components) such as Structure Browser,
            Report Generator, Dashboards, and more enhancing structure, performance, and user experience.
          </p>
          <p className="text-lg mb-4">
            I'm a hardworking, focused, and driven individual who enjoys solving problems and turning ideas into
            functional, well-crafted solutions. I take pride in my ability to adapt, collaborate, and bring value to any
            team through a combination of technical skill and a strong work ethic.
          </p>
          <p className="text-lg">
            My skillset spans across JavaScript, Java, C#, PHP, HTML/CSS, XML, MQL, and Dart, along with hands-on
            experience using frameworks like Three.js, Vue.js, and React Native. Whether it’s building out a new
            interface, streamlining a system, or diving into complex integrations, I’m always up for the challenge.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/junas.png"
            alt="Junas"
            className="w-90 h-90 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
        <div className="grid gap-12 md:grid-cols-3 justify-center">
          <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-900 w-full">
            <h3 className="font-medium mb-4 text-lg">Frontend</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Three.js</li>
              <li>Tailwind CSS</li>
              <li>Vue</li>
              <li>React Native</li>
              <li>Flutter</li>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Java</li>
              <li>C#</li>
              <li>MQL</li>
              <li>XML</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-900 w-full">
            <h3 className="font-medium mb-4 text-lg">Backend</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Git & GitHub</li>
              <li>Version Control</li>
              <li>MQL</li>
              <li>SQL</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-900 w-full">
            <h3 className="font-medium mb-4 text-lg">Tools & Others</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Git & GitHub</li>
              <li>CI/CD Pipelines</li>
              <li>Scrum</li>
              <li>JIRA</li>
              <li>Eclipse</li>
              <li>Postman</li>
              <li>Visual Studio Code</li>
              <li>IntelliJ IDEA</li>
              <li>Unity</li>
              <li>Blender</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}