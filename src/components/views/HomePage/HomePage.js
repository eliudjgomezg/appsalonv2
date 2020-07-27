import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

function HomePage() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [Clients, setClients] = useState([]);
  let variable = { userfrom: localStorage.getItem("userId") };

  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = () => {
    axios
      .get("http://localhost:9000/api/client/listClient", variable)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setClients(response.data.clients);
          {
            console.log(response.data.clients);
          }
        } else {
          alert("error traer clients");
        }
      });
  };

  return (
    <div>
      <h3>List all Clients </h3>
      {Clients.map((clients) => {
        return (
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Sales Today" bordered={false}>
                  <Text strong>Name Client</Text>
                  <br></br>
                  <span>{clients.nameClient}</span>
                  <br></br>
                  <Text strong>Name Coiffeur</Text>
                  <br></br>
                  <span>{clients.nameCoiffeur}</span>
                </Card>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
