import {useState, useEffect} from 'react';

function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const mouseMoveHandler = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  }

  useEffect(() => {
    // 监听鼠标绑定事件
    window.addEventListener('mousemove', mouseMoveHandler)

    // 组件销毁，解绑DOM事件
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    };
  }, []);

  return {x, y};
}

export default useMouse;