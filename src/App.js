import { useState } from 'react';

function App() {
  const [user] = useState('김종원');
  const [totalMoney, setTotalMoney] = useState(1040000);
  const [inMoney, setInMoney] = useState(640000);
  const [outMoney, setOutMoney] = useState(420000);

  return (
    <div className="w-full h-screen bg-blue-50 flex flex-col items-center p-2 font-nanum-regular">
      {/* 총액 및 출입금 */}
      <div className="w-[20rem] h-[13rem] bg-blue-100 rounded-t-lg p-4 mb-1">
        <div>★ {user}의 가계부</div>
        <div className="text-center h-[6.5rem] leading-[6.5rem] font-nanum-eb text-4xl">
          ￦ {totalMoney}
        </div>
        <div className="flex text-center justify-around">
          <div className="w-[49%] bg-white py-1 rounded-md">
            들어온돈
            <br />
            <span className="text-green-400">+{inMoney}</span>
          </div>
          <div className="w-[49%] bg-white py-1 rounded-md">
            나간돈
            <br />
            <span className="text-red-500">-{outMoney}</span>
          </div>
        </div>
      </div>
      {/* 내역 및 추가 버튼 */}
      <div className="w-[20rem] bg-blue-100 p-4">
        <ul className="flex w-full border-b pb-2 border-gray-400 mb-2">
          <li>전체 내역</li>
          <li className="text-gray-400 ml-3">수입</li>
          <li className="text-gray-400 ml-3">지출</li>
        </ul>
        <div className="bg-white w-full h-16 mt-1 rounded-md flex justify-between p-2">
          <div>
            <span className="text-sm text-gray-400">2022-08-08</span>
            <br />
            <span className="text-lg">저녁밥 배달</span>
          </div>
          <div className="leading-[3rem] text-lg mr-1 text-red-500">-12000</div>
        </div>
        <div className="bg-white w-full h-16 mt-1 rounded-md"></div>
        <div className="w-full h-28 bg-gray-100 mt-4 rounded-md border-dashed border border-blue-600">
          <div className="text-center p-2">
            <div className="text-6xl font-nanum-bold">+</div>
            <div>새 거래 내역 추가</div>
          </div>
        </div>
      </div>
      {/* 내역 추가 */}
    </div>
  );
}

export default App;
