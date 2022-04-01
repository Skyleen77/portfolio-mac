const Dashboard = () => {

  const dashboard = document.querySelector('[data-dashboard]')

  initDashboard();

  const itemList = [
    {
      name: "Skyleen",
      img: "src/img/skyleen.png",
      link: "https://skyleen.fr/"
    },
    {
      name: "Virtuabot",
      img: "src/img/virtuabot.png",
      link: "https://virtuabot.fr/"
    },
    {
      name: "DMH",
      img: "src/img/dmh.png",
      link: "https://dmh77.com/"
    }
  ]

  itemList.forEach(item => {
    const grid = document.querySelector('.grid');

    const itemRender = document.createElement("div");
    grid.appendChild(itemRender);
    itemRender.setAttribute("class", "grid-item");
    itemRender.style.background = `url('${item.img}')`;
    itemRender.style.backgroundSize = 'cover';
    itemRender.style.backgroundRepeat = 'no-repeat';

    const overlay = document.createElement("div");
    itemRender.appendChild(overlay);
    overlay.setAttribute("class", "grid-item-overlay");

    const span = document.createElement("span");
    span.textContent = item.name;
    overlay.appendChild(span);

    itemRender.addEventListener("click", () => {
      dashboard.innerHTML = '';

      const itemIframe = document.createElement("iframe");
      dashboard.appendChild(itemIframe);
      itemIframe.setAttribute("frameborder", "0");
      itemIframe.style.height = "100%";
      itemIframe.style.width = "100%";
      itemIframe.src = item.link;
      document.body.style.overflowY = "hidden";
    });
  });

  function initDashboard() {
    const h1 = document.createElement("h1");
    h1.textContent = 'Dashboard';
    dashboard.appendChild(h1);

    const div = document.createElement("div");
    dashboard.appendChild(div);
    div.setAttribute("class", "grid");

    document.body.style.overflowY = "auto";
  }
}

Dashboard();