import { Button } from "@mui/material";
import DonutChart from "react-donut-chart";
import { DasboardHeader } from "../../components/dashboard-header";
import { Container, Content } from "./style";

export const DashboardPage = () => {
  return (
    <Container>
      <Content>
        <DasboardHeader />
        <div className="graphics">
          <DonutChart
            data={[
              {
                label: "Algo",
                value: 25,
              },
              {
                label: "Algo",
                value: 50,
              },
              {
                label: "Algo",
                value: 15,
              },
              {
                label: "Algo",
                value: 5,
              },
            ]}
            height={200}
            width={310}
            strokeColor="none"
          />
          <Button variant="contained" href="/dashboard">
            Botão
          </Button>
        </div>
      </Content>
    </Container>
  );
};
