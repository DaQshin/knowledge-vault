export function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg">
      <div className="flex flex-col gap-y-4 w-[360px]">
        <div className="flex items-center gap-2 font-serif text-[22px] italic tracking-tight text-ink-1 gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-teal" />
          memex
        </div>
        <div>
          <span className="shrink-0 rounded-full px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.08em] bg-teal-dim text-teal">
            Sign In
          </span>

          <div>
            <h1 className="font-serif text-[36px] font-normal leading-[1.15] tracking-tight text-ink-1">
              Welcome,
              <br />
              <em className="text-ink-3">back.</em>
            </h1>
          </div>
        </div>
        <div>
          <form className="text-ink-3 flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="uppercase font-mono text-xs">Email</span>
              <input
                placeholder="you@example.com"
                className="bg-bg-3 border rounded-xl p-2 focus:border-teal focus:outline-none"
                type="email "
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="uppercase font-mono text-xs">Password</span>
              <input
                placeholder="••••••••"
                className="bg-bg-3 border rounded-xl p-2 focus:border-teal focus:outline-none"
                type="password"
              />
            </label>
            <span className="font-mono text-xs flex justify-end">
              Forgot password?
            </span>
            <button className="bg-teal text-[#04342C] px-10 py-2 rounded-xl">
              Sign In →
            </button>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <hr className="border-[#FFFFFF12] flex-1" />
          <span className="text-ink-3 font-mono">OR</span>
          <hr className="border-[#FFFFFF12] flex-1" />
        </div>
        {/* <div>
        <GoogleSignInButton />
      </div> */}
        <div>
          <span className="text-ink-3 font-sans text-xs flex justify-center">
            No account? <span className="text-teal"> Create one</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bg">
      <div className="flex flex-col gap-y-4 w-[360px]">
        <div className="flex items-center gap-2 font-serif text-[22px] italic tracking-tight text-ink-1 gap-1">
          <span className="h-[7px] w-[7px] rounded-full bg-teal" />
          memex
        </div>
        <div>
          <span className="shrink-0 rounded-full px-[7px] py-[2px] font-mono text-[9px] uppercase tracking-[0.08em] bg-teal-dim text-teal">
            Sign In
          </span>

          <div>
            <h1 className="font-serif text-[36px] font-normal leading-[1.15] tracking-tight text-ink-1">
              Start building
              <br />
              <em className="text-ink-3">your brain.</em>
            </h1>
          </div>
        </div>
        <div>
          <form className="text-ink-3 flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <span className="uppercase font-mono text-xs">Email</span>
              <input
                placeholder="you@example.com"
                className="bg-bg-3 border rounded-xl p-2 focus:border-teal focus:outline-none"
                type="email "
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="uppercase font-mono text-xs">Password</span>
              <input
                placeholder="••••••••"
                className="bg-bg-3 border rounded-xl p-2 focus:border-teal focus:outline-none"
                type="password"
              />
            </label>
            <span className="font-mono text-xs flex justify-end">
              Forgot password?
            </span>
            <button className="bg-teal text-[#04342C] px-10 py-2 rounded-xl">
              Sign In →
            </button>
          </form>
        </div>
        <div className="flex items-center gap-2">
          <hr className="border-[#FFFFFF12] flex-1" />
          <span className="text-ink-3 font-mono">OR</span>
          <hr className="border-[#FFFFFF12] flex-1" />
        </div>
        {/* <div>
        <GoogleSignInButton />
      </div> */}
        <div>
          <span className="text-ink-3 font-sans text-xs flex justify-center">
            No account?<span className="text-teal">Create one</span>
          </span>
        </div>
      </div>
    </div>
  );
}
