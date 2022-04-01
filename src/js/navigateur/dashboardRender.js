const DashboardRender = () => {
  return `
    <!DOCTYPE html>
    <html lang="fr" id="dashboard">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        <link href="./src/style/style.css" rel="stylesheet">
      </head>
      <body>
        <div class='dashboard' data-dashboard></div>

        <script src="./src/js/navigateur/dashboard.js" type="module"></script>
      </body>
    </html>
  `;
}

export default DashboardRender;