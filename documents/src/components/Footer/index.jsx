import React from "react"
import { products, misc } from "../../data/links.yml"

export default () => (
  <footer>
    <ul>
      {products.map(product => (
        <li key={product.title}>
          <a href={product.url}>{product.title}</a>
        </li>
      ))}
    </ul>
    <ul>
      {misc.map(site => (
        <li key={site.title}>
          <a href={site.url}>{site.title}</a>
        </li>
      ))}
    </ul>
    <p>&copy; 2019 RIDI Corp. All right reserved.</p>
  </footer>
)
