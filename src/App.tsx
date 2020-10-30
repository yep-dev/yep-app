import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout';
import 'antd/dist/antd.dark.less';

import useHandleStatusWebsocket from './hooks/websocketHandlers';
import Routing from './routing';

function App() {
  useHandleStatusWebsocket();

  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

export default App;
