import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://www.marinactonci.xyz/',
      lastModified: new Date()
    }
  ]
}