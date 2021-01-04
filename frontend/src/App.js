import logo from './logo.svg';
import './App.css';
import { useImmerReducer } from "use-immer";
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Iframe from 'react-iframe'
import StockInfo from './components/StockInfo';
import reportWebVitals from './reportWebVitals';


import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StockList from './components/StockList';
import { reducer, initialState } from "./reducer";

const { Header, Content, Footer, Sider } = Layout;



function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState);
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>

          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/owned">Owned</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/buy">Buy</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/sell">Sell</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            <Link to="/stocks">Stocks</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
        </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
        </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
        </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
        </Menu.Item>
        </Menu>

      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header id="header-background" className="header-background site-layout-background" />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', backgroundColor: "white" }}>
            <Switch>
              {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
              <Route path="/buy">

              </Route>
              <Route path="/stocks/:stockId">
                <StockInfo state={state} dispatch={dispatch} />
              </Route>
              <Route path="/stocks">
                <StockList state={state} dispatch={dispatch} />
              </Route>

            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Wortex.stream ©2021 Created by SovietSpy2</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
