# landing-app — sitio dummy para probar el widget de chat

Web de demostración (empresa ficticia "Nimbus") hecha con [Astro](https://astro.build).

Publicada en: https://rikardo816.github.io/landing-app/

## Cambiar el widget

Edita **[`widget.html`](./widget.html)** directamente en GitHub (icono del lápiz → *Commit changes*).
Lo que pongas ahí se inserta al final del `<body>` de todas las páginas.

## Build y publicación automática

Cada push/commit a `main` ejecuta el workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml),
que compila el sitio y lo publica en GitHub Pages. El progreso se ve en la pestaña **Actions**.
También se puede lanzar a mano desde Actions → *Deploy to GitHub Pages* → *Run workflow*.

## Desarrollo local

```sh
npm install
npm run dev      # http://localhost:4321/landing-app
npm run build    # genera ./dist
```
