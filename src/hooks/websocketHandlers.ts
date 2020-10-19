import useWebSocket from 'react-use-websocket';
import status from '../data/status';
import { useAction } from './index';

const useHandleStatusWebsocket = () => {
  const setStatus = useAction(status.actions.setStatus);

  const handleMessage = (message: any) => {
    console.log(message);
    const messages = JSON.parse(message.data);
    for (const { device, type } of messages) {
      setStatus({ device, type });
    }
  };

  useWebSocket('ws://localhost/api/stream/status', {
    onOpen: () => console.log('opened'),
    onMessage: handleMessage,
    // Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: () => true,
  });
};

export default useHandleStatusWebsocket;
