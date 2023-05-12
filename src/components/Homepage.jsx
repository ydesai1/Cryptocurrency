import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Row, Col, Statistic } from "antd";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

import "./homepage.css";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const Homepage = () => {
  const { data, iseFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <>
      <Typography variant="h5" color="grey" fontWeight="bold">
        Global Crypto Stats
      </Typography>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Typography variant="h5" color="grey" fontSize="22px">
            Total Cryptocurrencies
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h5" color="grey" fontSize="22px">
            Total Exchanges
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={globalStats?.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h5" color="grey" fontSize="22px">
            Total Market Cap:
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={`$${millify(globalStats?.totalMarketCap)}`}
          />
        </Col>
        <Col span={12} valueStyle={{ color: "grey" }} fontSize="22px">
          <Typography variant="h5" color="grey" fontSize="22px">
            Total 24h Volume
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={`$${millify(globalStats?.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h5" color="grey" fontSize="22px">
            Total Cryptocurrencies
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h5" color="grey" fontSize="22px">
            Total Markets
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography variant="h5" color="grey" className="home-Typography">
          Top 10 Cryptos In The World
        </Typography>
        <Typography variant="h5" color="grey" className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography variant="h5" color="grey" className="home-Typography">
          Latest Crypto News
        </Typography>
        <Typography variant="h5" color="grey">
          <Link to="/news">Show more</Link>
        </Typography>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
