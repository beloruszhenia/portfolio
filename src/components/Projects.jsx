export default function Projects() {
  const projects = [
    { name: "✅ ToDo App", link: "https://github.com/username/todo-app" },
    { name: "🛒 Shop App", link: "https://github.com/username/shop-app" },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Мої проєкти</h2>
      <ul className="space-y-2">
        {projects.map((p, i) => (
          <li key={i}>
            <a href={p.link} className="text-blue-600 hover:underline">{p.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}