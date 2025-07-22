const loadComponent = async (id, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

// Load components
loadComponent("header", "components/header.html");
loadComponent("home", "components/home.html");
loadComponent("rollball", "components/rollball.html");
loadComponent("mission", "components/mission.html");
loadComponent("about", "components/about.html");
loadComponent("news", "components/news.html");
loadComponent("gallery", "components/gallery.html");
loadComponent("officer", "components/officer.html");
loadComponent("contact", "components/contact.html");
loadComponent("footer", "components/footer.html");
