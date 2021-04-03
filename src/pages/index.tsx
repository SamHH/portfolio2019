import { ReactElement } from "react"
import { graphql } from "gatsby"
import * as s from "./index.module.css"
import Page from "~/components/Page"
import Nav, { NavPage } from "~/components/Nav"
import Footer from "~/components/Footer"

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          slug: string
          title: string
          friendlyDate: string
          date: string
        }
      }[]
    }
  }
}

const Index = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}: Props): ReactElement => (
  <Page title="Blog" desc="A chronological list of all my blog posts.">
    <div className="u-page">
      <Nav activePage={NavPage.Blog} />

      <main>
        <ol className={s.postList}>
          {nodes.map(({ frontmatter: meta }) => (
            <li key={meta.slug}>
              <time dateTime={meta.date}>{meta.friendlyDate}</time>
              <br />
              <a href={`/blog/${meta.slug}`}>{meta.title}</a>
            </li>
          ))}
        </ol>
      </main>

      <Footer>
        <p>
          <a href="/rss.xml" target="_blank">
            RSS feed
          </a>
        </p>

        <p>
          <a
            href="https://github.com/samhh/dotfiles/blob/desktop-linux/home/.config/newsboat/urls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs I'm subscribed to
          </a>
        </p>
      </Footer>
    </div>
  </Page>
)

export default Index

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      nodes {
        frontmatter {
          slug
          title
          friendlyDate: date(formatString: "MMMM DD, YYYY")
          date
        }
      }
    }
  }
`
