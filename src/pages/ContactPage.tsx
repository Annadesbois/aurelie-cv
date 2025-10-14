const ContactPage = () => {
  return (
    <div className="bg-base-100 px-[2rem] md:px-[8rem] lg:px-[10rem] py-12 relative">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
        <p className="text-neutral-400">
          Feel free to get in touch, I'll reply as soon as I can.
        </p>
      </div>

      <form className="mx-auto mt-12 max-w-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-secondary mb-2"
            >
              First name
            </label>
            <input
              id="first-name"
              type="text"
              name="first-name"
              className="input input-bordered rounded-md w-full bg-base-100"
              required
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-secondary mb-2"
            >
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              name="last-name"
              className="input input-bordered rounded-md w-full bg-base-100"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-secondary mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="input input-bordered rounded-md w-full bg-base-100"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-secondary mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="textarea textarea-bordered rounded-md w-full bg-base-100"
              required
            ></textarea>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="btn btn-primary w-full rounded-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
export default ContactPage