export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div
        className="relative bg-cover bg-center w-full h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/Contact_Bk.jpg')",
        }}
      >
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="w-full max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Let’s get in touch</h2>
        <p className="text-center text-lg mb-10">
          Feel free to reach out using the contact form below.
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col items-start">
            <p className="text-lg mb-6">
              I’d love to hear about your projects, ideas, or how I can contribute to bringing your vision to life. Let’s connect!
            </p>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-medium">Email:</span>
                <a href="mailto:Junas.romsep@gmail.com" className="text-blue-500 hover:underline">
                  Junas.romsep@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Location:</span>
                <span>Stockholm, Sweden</span>
              </div>
            </div>
            <div className="mt-8">
              <img
                src="/Stockholm.png"
                alt="Stockholm"
                className="w-3/4 rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    placeholder="Your first name"
                    className="flex h-12 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    placeholder="Your last name"
                    className="flex h-12 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="flex h-12 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="flex w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-blue-500 text-white px-6 py-3 text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}