import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Row, Col, Statistic } from "antd";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";

import "./homepage.css";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { tokens } from "../theme";

const Homepage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data, iseFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(globalStats, "globalStats");

  return iseFetching ? (
    <p>Loading..</p>
  ) : (
    <>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        className="heading"
      >
        Global Crypto Stats
      </Typography>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total Cryptocurrencies
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total Exchanges
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total Market Cap:
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={`$${millify(globalStats?.totalMarketCap)}`}
          />
        </Col>
        <Col span={12} valueStyle={{ color: "grey" }}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total 24h Volume
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={`$${millify(globalStats?.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total Cryptocurrencies
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Typography variant="h2" color={colors.grey[100]}>
            Total Markets
          </Typography>
          <Statistic
            valueStyle={{ color: "grey" }}
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          className="home-Typography"
        >
          Top 10 Cryptos In The World
        </Typography>
        <Typography variant="h2" color={colors.grey[100]} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          className="home-Typography"
        >
          Latest Crypto News
        </Typography>
        <Typography variant="h2" color={colors.grey[100]}>
          <Link to="/news">Show more</Link>
        </Typography>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
