import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

const baseUrl = 'https://lux-fidei.vercel.app'

/**
 * Gera automaticamente as URLs das abas dos santos
 * a partir dos arquivos .mdx existentes em:
 *
 * app/santos/_content/[categoria]/[santo]/
 */
function getSantosRoutes(): MetadataRoute.Sitemap {
  const contentPath = path.join(
    process.cwd(),
    'app',
    'santos',
    '_content'
  )

  if (!fs.existsSync(contentPath)) {
    console.warn(
      '[sitemap] Diretório de conteúdo dos santos não encontrado:',
      contentPath
    )

    return []
  }

  const routes: MetadataRoute.Sitemap = []

  const categorias = fs
    .readdirSync(contentPath, { withFileTypes: true })
    .filter((item) => item.isDirectory())

  for (const categoria of categorias) {
    const categoriaPath = path.join(
      contentPath,
      categoria.name
    )

    const santos = fs
      .readdirSync(categoriaPath, { withFileTypes: true })
      .filter((item) => item.isDirectory())

    for (const santo of santos) {
      const santoPath = path.join(
        categoriaPath,
        santo.name
      )

      const arquivos = fs
        .readdirSync(santoPath, { withFileTypes: true })
        .filter(
          (item) =>
            item.isFile() &&
            item.name.toLowerCase().endsWith('.mdx')
        )

      for (const arquivo of arquivos) {
        const slug = arquivo.name.replace(/\.mdx$/i, '')

        routes.push({
          url: `${baseUrl}/santos/${categoria.name}/${santo.name}/${slug}`,
          priority: 0.7,
          changeFrequency: 'monthly',
        })
      }
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  /*
   * Páginas principais
   */
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/biblioteca`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/estudos`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/liturgia_diaria`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/santos`,
      priority: 0.9,
    },
  ]

  /*
   * Biblioteca
   */
  const bibliotecaRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/biblioteca/biblia-vulgata`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca/historia-de-uma-alma`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca/sao-filipe-neri`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca/sao-filipe-neri/cartas`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-filipe-neri/maximas`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-filipe-neri/outros-escritos`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-filipe-neri/sonetos`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-joao-maria-vianney`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/biblioteca/sao-joao-maria-vianney/cartas`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-joao-maria-vianney/oracoes`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/sao-joao-maria-vianney/sermoes`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/biblioteca/ultimas-conversas`,
      priority: 0.8,
    },
  ]

  /*
   * Estudos
   */
  const estudosRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/estudos/calendario`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/carisma/santidade`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/concilios`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/concilios/niceia-1`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/datas-comemorativas/Corpus-Christi`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/hierarquia`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/mandamentos/dez-mandamentos`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/mandamentos/mandamentos-igreja`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/sacramentos/batismo`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/sacramentos/crisma`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/estudos/sacramentos/primeira-comunhao`,
      priority: 0.8,
    },
  ]

  /*
   * Santos
   *
   * Todas as abas são descobertas automaticamente
   * através dos arquivos .mdx reais.
   */
  const santosRoutes = getSantosRoutes()

  return [
    ...mainRoutes,
    ...bibliotecaRoutes,
    ...estudosRoutes,
    ...santosRoutes,
  ]
}