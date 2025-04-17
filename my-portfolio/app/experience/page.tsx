export default function ExperiencePage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Experience</h1>

      {/* Job Experience Section */}
      <div className="space-y-12">
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Job Experience</h2>
          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Application Developer</h3>
              <p className="text-gray-600 mb-4">Technia Ab • 2022 - Present</p>
              <p>
                I’m working as an application developer with a few years of experience, mostly focused on PLM projects.
                Over time, I’ve built a solid understanding of 3DEXPERIENCE/ENOVIA and Technia Value Components (TVCs), especially through projects in the industrial equipment industry.
              </p>
              <p>
                In one of my roles, I was part of a team developing solutions using TVCs like Structure Browser, Forms, Grid Browser, Report Generator, and Dashboards.
                I also worked with tools like Helium and LMW (Light My Way) to improve structure and performance across different parts of the system.
                It’s been a great way to combine technical skills with real-world problem-solving and create tools that actually help people get things done more efficiently.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Mobile Developer</h3>
              <p className="text-gray-600 mb-4">OneTek Svergie AB - Intern • Dec 2021 - May 2022</p>
              <p>
                During my internship as a mobile developer,
                I worked with Flutter to build apps that run on both Android and iOS.
                It was a hands-on experience where I got to dive into real projects building features, fixing bugs, and just learning how everything comes together in a real app.
                I really enjoyed turning ideas into something people can actually use, and it taught me a lot about writing clean code and thinking about the user experience.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Freelance Web Developer</h3>
              <p className="text-gray-600 mb-4">Digital Agency • 2019 - 2022</p>
              <p>
                I work as a freelance web developer, helping people and businesses bring their ideas to life online.
                Whether it’s building a clean, modern website from scratch or improving an existing one,
                I focus on making things both functional and easy to use. I enjoy working closely with clients, understanding what they need, and turning that into something real that looks good and works well on any device.
              </p>
            </div>
          </div>
        </div>

        {/* Course Experience Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Course Experience</h2>
          <div className="space-y-6">

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Code of Conduct and Sustainability Policy</h3>
              <p className="text-gray-600 mb-4">Completion Date: 2022-11-17</p>
              <p>
                This course focused on understanding the principles of ethical behavior and sustainability in the
                workplace.
              </p>
              <img
                src="/CodeOfConduct.png"
                alt="Code of Conduct and Sustainability Policy"
                className="w-full h-auto rounded-lg mt-4 shadow-md"
              />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Code of Configuration and Development Essentials – Exam Level 1</h3>
              <p className="text-gray-600 mb-4">Completion Date: 2023-04-17</p>
              <p>
                This course covered the foundational concepts of configuration and development essentials for modern
                platforms.
              </p>
              <img
                src="/ConfAndDevEssentials.png"
                alt="Code of Configuration and Development Essentials – Exam Level 1"
                className="w-full h-auto rounded-lg mt-4 shadow-md"
              />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">3DEXPERIENCE on the Cloud Fundamentals – Level 1</h3>
              <p className="text-gray-600 mb-4">Completion Date: 2023-09-15</p>
              <p>
                This course introduced the fundamentals of working with the 3DEXPERIENCE platform on the cloud.
              </p>
              <img
                src="/CloudFundamentals.png"
                alt="3DEXPERIENCE on the Cloud Fundamentals – Level 1"
                className="w-full h-auto rounded-lg mt-4 shadow-md"
              />
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">3DEXPERIENCE Platform Basics Exam</h3>
              <p className="text-gray-600 mb-4">Completion Date: 2024-05-30</p>
              <p>
                This course provided an overview of the 3DEXPERIENCE platform, covering its basic functionalities and
                tools.
              </p>
              <img
                src="/BasicsExam.png"
                alt="3DEXPERIENCE Platform Basics Exam"
                className="w-full h-auto rounded-lg mt-4 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Education Experience Section */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Education Experience</h2>
          <div className="space-y-6">

            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Bachelor’s Degree in Frontend Technologies and Web Security</h3>
              <p className="text-gray-600 mb-4">JENSEN yrkeshögskola • 2020 - 2022</p>
              <p>
                This course focuses on modern frontend development with an emphasis on building secure, responsive web applications for both desktop and mobile platforms. Students work with JavaScript, frameworks, HTML, and CSS to create interactive user interfaces, while also gaining a basic understanding of backend development, project management, testing, and UX/UI design.
              </p>
              <p>
                The program includes dedicated training in web security, enabling students to develop secure applications and understand security considerations in frontend workflows. Graduates will be equipped to take responsibility for frontend development in web projects and contribute to quality assurance by aligning with project requirements and identifying potential issues and solutions.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">IT Program</h3>
              <p className="text-gray-600 mb-4">Väsby Nya Gymnasium • 2016 - 2019</p>
              <p>
                Completed the IT program with a focus on programming, game development, and web design. Gained hands-on experience with modern technologies such as C#, PHP, JavaScript, and SQL, and developed skills in creating games using Unity and designing 3D models.
              </p>
              <p>
                The program emphasized both theoretical and practical learning, preparing students for higher education or careers in engineering, system development, or programming. Specialized in web server programming and artificial intelligence, with a strong focus on game development and real-world applications.
              </p>
              <p>
                This education provided a solid foundation in technology and problem-solving, fostering creativity and logical thinking while exploring the role of technology in society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}