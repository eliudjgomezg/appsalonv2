import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Typography, Modal} from "antd";

const { Text } = Typography;


function modalErrorListClient(){
  Modal.error(
    {
      content:"Authorized personal only"
    }
  )
}

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const [Clients, setClients] = useState([]);
  let variable = { userfrom: localStorage.getItem("userId") };

  console.log("variable")

  useEffect(() => {
    fetchClient();
  }, []);

  const fetchClient = () => {
    axios
      .get("http://localhost:9000/api/client/listClient", variable)
      .then((response) => {
        console.log(response);
        if (user.data && user.data.isAuth) {
          if (response.data.success) {
            setClients(response.data.clients);
          } else {
            alert("error traer clients");
          }
        }
        modalErrorListClient();
      });
  };

  return (
    <div>
      <h3>List all Clients </h3>
      {Clients.map((clients) => {
        return (
          <div key={clients._id} className="site-card-wrapper" >
            <Row gutter={16}>
              <Col span={6}>
                <Card title="Sales" bordered={false}>
                  <Text strong>Name Client</Text>
                  <br></br>
                  <span>{clients.nameClient}</span>
                  <br></br>
                  <br></br>
                  <Text strong>Name Coiffeur</Text>
                  <br></br>
                  <span>{clients.nameCoiffeur}</span>
                  <br></br>
                  <br></br>
                  <Text strong>Number Ticket</Text>
                  <br></br>
                  <span>{clients.numberTicket}</span>
                  <br></br>
                  <br></br>
                  <Text strong>Number Voucher</Text>
                  <br></br>
                  <span>{clients.numberVoucher}</span>
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
