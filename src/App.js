import { useState } from 'react';

function App() {
  const [user, setUser] = useState('김종원');
  const [totalMoney, setTotalMoney] = useState(1040000);
  const [inMoney, setInMoney] = useState(640000);
  const [outMoney, setOutMoney] = useState(420000);

  return (
    <div className="flex flex-col items-center w-full py-4 bg-blue-50 font-nanum-regular">
      {/* 총액 및 출입금 */}
      <div className="w-[20rem] h-[12rem] bg-blue-100 rounded-t-lg p-4 mb-1">
        <div>★ {user}의 가계부</div>
        <div className="text-center h-[5.5rem] leading-[5.5rem] font-nanum-eb text-4xl">
          ￦ {totalMoney}
        </div>
        <div className="flex justify-around text-center">
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
      <div className="w-[20rem] bg-blue-100 p-4 mb-1">
        <ul className="flex w-full pb-2 mb-2 border-b border-gray-400">
          <li>전체 내역</li>
          <li className="ml-3 text-gray-400">수입</li>
          <li className="ml-3 text-gray-400">지출</li>
        </ul>
        <div className="flex justify-between w-full h-16 p-2 mt-1 bg-white rounded-md">
          <div>
            <span className="text-sm text-gray-400">2022-08-08</span>
            <br />
            <span className="text-lg">저녁밥 배달</span>
          </div>
          <div className="leading-[3rem] text-lg mr-1 text-red-500">-12000</div>
        </div>
        <div className="w-full h-16 mt-1 bg-white rounded-md"></div>
        <div className="w-full mt-4 bg-gray-100 border border-blue-600 border-dashed rounded-md h-28">
          <div className="p-2 text-center cursor-pointer select-none">
            <div className="text-6xl font-nanum-bold">+</div>
            <div>새 거래 내역 추가</div>
          </div>
        </div>
      </div>
      {/* 내역 추가 */}
      <div className="w-[20rem] bg-blue-100 p-4 rounded-b-lg">
        <div className="pb-2 mb-2 border-b border-gray-400">새로운 거래</div>
        <form className="flex flex-col">
          <label className="mb-1">날짜</label>
          <input type="date" name="" id="" className="p-2 mb-2" />
          <label className="mb-1">내용</label>
          <div className="mb-2">
            <label className="box-radio-input">
              <input
                type="radio"
                name="inout"
                value="inMoney"
                className="hidden"
              />
              <span className="inline-block w-[49%] px-2 mr-[1%] leading-10 text-center bg-white rounded-md cursor-pointer bg-none h-10">
                들어온 돈
              </span>
            </label>
            <label className="box-radio-input">
              <input
                type="radio"
                name="inout"
                value="outMoney"
                className="hidden"
              />
              <span className="inline-block w-[49%] ml-[1%] leading-10 text-center bg-white rounded-md cursor-pointer bg-none h-10">
                나간 돈
              </span>
            </label>
          </div>
          <input
            type="text"
            className="p-2 mb-2 rounded-md"
            placeholder="메모"
          />
          <label className="mb-1">금액</label>
          <input
            type="number"
            className="p-2 mb-2 rounded-md"
            placeholder="얼마용"
          />
          <button
            type="submit"
            className="w-full py-3 mb-1 bg-blue-700 rounded-md"
          >
            추가
          </button>
          <button type="button" className="w-full py-3 bg-white rounded-md">
            닫기
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
