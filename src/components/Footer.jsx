export default function Footer(){
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© 2025 Fyndra. All Rights Reserved</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-gray-700 hover:text-[#1A73E8]">Home</a>
          <a href="#about" className="text-gray-700 hover:text-[#1A73E8]">About</a>
          <a href="#skills" className="text-gray-700 hover:text-[#1A73E8]">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-[#1A73E8]">Projects</a>
          <a href="#services" className="text-gray-700 hover:text-[#1A73E8]">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-[#1A73E8]">Contact</a>
        </div>
      </div>
    </footer>
  )
}
