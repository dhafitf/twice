/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Layout, Section } from "~components/layout";
import developersPage from "~lib/developersPage.json";

interface Props {
  name: string;
  description: string;
  apiReference: any;
}

const Items = ({ name, description, apiReference }: Props) => {
  return (
    <div className="dev_item">
      <h2 className="dev_title">{name}</h2>
      <p className="dev_desc">{description}</p>
      {apiReference?.map((item: any, index: number) => {
        return (
          <div className="dev_ref" key={index}>
            <h3>{item.name}</h3>
            <div className="dev_endpoint">
              <span>{item.method}</span>
              <span>{item.endpoint}</span>
            </div>
            {item.params && (
              <div className="dev_params">
                <h4>Params</h4>
                <table className="dev_params_table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.params.map((param: any, index: number) => {
                      return (
                        <tr key={index}>
                          <td>{param.name}</td>
                          <td>{param.type}</td>
                          <td>{param.description}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <div className="dev_response">
              <h4>Response</h4>
              <pre>
                <code>{JSON.stringify(item.response, null, 4).replace(/"/g, "")}</code>
              </pre>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Developer = () => {
  return (
    <>
      <Layout title="Developers" metaDescription="Developers">
        <Container style={{ marginTop: "5rem" }} isSmall>
          <Section title="For Developers">
            <p style={{ paddingBottom: "1.5rem" }}>
              All media are obtained from{" "}
              <a href="https://www.jype.com/" target="_blank" rel="noreferrer nofollow">
                JYPE
              </a>
              {" & "}
              <a href="https://wmg.jp/" target="_blank" rel="noreferrer nofollow">
                Sony Music
              </a>
              .
            </p>
            <div className="apiReference">
              {developersPage.map((item, index) => {
                return <Items key={index} {...item} />;
              })}
            </div>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

export default Developer;
