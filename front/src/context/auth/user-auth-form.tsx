"use client"

export default function UserAuthForm() {
  return (
    <div className="grid gap-6">
      <form>
        <input
          className="border border-gray-400"
          type="text"
          name="name"
        />
        <input
          className="border border-gray-400"
          type="password"
          name="password"
        />
      </form>
    </div>
  )
};