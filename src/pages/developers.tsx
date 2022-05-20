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
        const responseArray = Object.entries(item.response);
        return (
          <div className="dev_ref" key={index}>
            <div className="dev_endpoint">
              <span>{item.method}</span>
              <span>{item.endpoint}</span>
            </div>
            <div className="dev_response">
              <table className="dev_response_table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {responseArray.map((response: any) => {
                    return (
                      <tr key={response[0]}>
                        <td>{response[0]}</td>
                        <td>{response[1].type}</td>
                        <td>{response[1].description}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
              Pages and API created by{" "}
              <a href="https://dhafit.xyz/" target="_blank" rel="noreferrer">
                Dhafit Farenza
              </a>
              . All media are obtained from{" "}
              <a href="https://www.jype.com/" target="_blank" rel="noreferrer">
                JYPE
              </a>
              {" & "}
              <a href="https://wmg.jp/" target="_blank" rel="noreferrer">
                Sony Music
              </a>
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
