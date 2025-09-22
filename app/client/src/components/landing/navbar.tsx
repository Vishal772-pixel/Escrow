import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true); // toggle between login/signup
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "buyer" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    setError(null);
    setSuccess(null);
    setFormData({ name: "", email: "", password: "", role: "buyer" }); // reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const url = isLoginForm
      ? "https://localhost:3000/api/v1/login"
      : "https://localhost:3000/api/v1/register";

    const payload = isLoginForm
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password, role: formData.role };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Something went wrong");
      }

      const data = await res.json();
      setSuccess(isLoginForm ? "Login successful!" : "Signup successful!");
      setFormData({ name: "", email: "", password: "", role: "buyer" });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <nav className="bg-white border-b border-gray-200 px-4 py-3 md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">MyApp</div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`mt-3 md:mt-0 md:flex md:items-center ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        {/* Login/Signup toggle buttons */}
        <div className="flex space-x-4 mb-4 md:mb-0 md:mr-6">
          <button
            onClick={() => setIsLoginForm(true)}
            className={`px-4 py-2 rounded ${
              isLoginForm ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginForm(false)}
            className={`px-4 py-2 rounded ${
              !isLoginForm ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-72">
          {!isLoginForm && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded"
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="px-3 py-2 border border-gray-300 rounded"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-3 py-2 border border-gray-300 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLoginForm ? "Login" : "Signup"}
          </button>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
        </form>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
