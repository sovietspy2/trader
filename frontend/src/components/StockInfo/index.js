import React, { useEffect } from "react";
import { List, Avatar, Space, Spin, Card, Descriptions, Badge } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, CaretUpOutlined, CaretDownOutlined, ApiFilled } from '@ant-design/icons';
import { getStocks, changeStocksPageSize } from "../../actions";
import { reducer, initialState } from "../../reducer";
import { useImmerReducer } from "use-immer";
import {
    Link,
    useParams
} from "react-router-dom";
import { getStockInfo } from "../../actions";
import Iframe from "react-iframe"

//const style = {
//    backgroundColor: "invalid"
//}

export default function StockInfo(props) {

    const { stockId } = useParams();

    useEffect(() => {
        if (!props.state.stockInfo.data && !props.state.stockInfo.loading) {
            getStockInfo(props.dispatch, stockId);
        }
    });

    console.log(props.state.stockInfo.data)
    if (!props.state.stockInfo.data) {
        return "LOADING"
    }

    console.log(props.state.stockInfo.data)

    return (
        <div>
            <Descriptions title={"Stock info for " + stockId} bordered>
                <Descriptions.Item label="Country">{props.state.stockInfo.data.country}</Descriptions.Item>
                <Descriptions.Item label="Currency">{props.state.stockInfo.data.currency}</Descriptions.Item>
                <Descriptions.Item label="IPO">{props.state.stockInfo.data.ipo}</Descriptions.Item>

                <Descriptions.Item label="Exchange" span={2}>{props.state.stockInfo.data.exchange}</Descriptions.Item>
                <Descriptions.Item label="Company Name" span={2}>{props.state.stockInfo.data.name}</Descriptions.Item>
                <Descriptions.Item label="Industry" span={2}>{props.state.stockInfo.data.finnhubIndustry}</Descriptions.Item>
                <Descriptions.Item label="Market capitalization">{props.state.stockInfo.data.marketCapitalization}</Descriptions.Item>
                <Descriptions.Item label="Website"><a href={props.state.stockInfo.data.weburl} >click</a></Descriptions.Item>
            </Descriptions>
            <Iframe url={`https://widget.finnhub.io/widgets/stocks/chart?symbol=${stockId}&watermarkColor=%231db954&backgroundColor=%23222222&textColor=white`}
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />


        </div>

    )
}