/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-21 23:29:05
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-22 08:37:37
 * @FilePath: /react_project/project/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import './App.css';

function App() {
  const number = 28;
  const name = 'Yijing'
  // STATEMENT CANNT BE PUT IN {}
  return (
    <div className="App">
      <h1>HELLO</h1>
      {name+' lucky number is '+number}
    </div>
  );
}

export default App;
