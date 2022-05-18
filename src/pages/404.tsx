import Link from "next/link";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout title="Page not found" metaDescription="Page not Found">
      <style jsx>{`
        .container {
          min-height: 90vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        h1 {
          text-align: center;
          line-height: 2rem;
        }
        .button {
          background: #3a3d68;
          border-radius: 5px;
          padding: 10px;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a className="button">Back to Home</a>
        </Link>
      </div>
    </Layout>
  );
}
