import React, { useEffect } from "react";
import { List, Avatar, Space, Spin, Input } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, CaretUpOutlined, CaretDownOutlined, ApiFilled } from '@ant-design/icons';
import { getStocks, changeStocksPageSize, searchStock } from "../../actions";
import { reducer, initialState } from "../../reducer";
import { useImmerReducer } from "use-immer";
import {
  Link
} from "react-router-dom";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const style = {
  backgroundColor: "gray",
};

const { Search } = Input;

export default function StockList(props) {

  //console.log(state);

  useEffect(() => {
    if (props.state.stocks.data === null) {
      if (!props.state.stocks.loading) {
        getStocks(props.dispatch);
      }
    }
  });




  const listData = [];
  if (props.state.stocks.data) {


    props.state.stocks.data.forEach(item => {
      listData.push({
        key: item.symbol,
        href: 'https://ant.design',
        title: `${item.symbol} (${item.type})`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          `Type ${item.type} \n ${item.description}`,
        content: `Currency: ${item.currency}`,
      });
    });
  }

  if (props.state.stocks.loading) {
    return <Space size="middle">
      <Spin size="large" />
    </Space>
  }

  return (
    <div>

      <Space size="middle">
        <Search
          addonBefore={'Stock name'}
          placeholder="input company/stock name"
          allowClear
          onSearch={(value) => searchStock(props.dispatch, value)}
          style={{ width: 400, margin: '0 10px' }}
        />
      </Space>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page, pageSize) => {
            //console.log(page, pageSize);
            changeStocksPageSize(props.dispatch, pageSize);
          },
          pageSize: props.state.stocks.pageSize,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>stocks menu</b> wortex trader sim
      </div>
        }
        renderItem={item => (
          <List.Item
            style={style}
            key={item.title}
            actions={[
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              <CaretUpOutlined />,
              <CaretDownOutlined />

            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >

            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Link to={`/stocks/${item.key}`}>{item.title}</Link>}
              description={item.description}
            />
            {item.content}
          </ List.Item>
        )}
      />
    </div>
  )
}