import React from "react"
import { Link } from "gatsby"
import PagesData from "../../data/pages.yml"

export default () => (
  <header>
    <h1>
      <Link to="/">RIDI DesignSystem Beta</Link>
    </h1>
    <nav>
      <ul>
        {PagesData.map(page => (
          <li key={page.title}>
            <Link to={page.url}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
