function Total({ user, money }) {
  const { totalMoney, inMoney, outMoney } = money;
  return (
    <div className="w-[20rem] h-[12rem] bg-blue-100 rounded-t-lg p-4 mb-1">
      <div>★ {user}의 가계부</div>
      <div className="text-center h-[5.5rem] leading-[5.5rem] font-nanum-eb text-4xl">
        ￦ {totalMoney.toLocaleString('ko-KR')}
      </div>
      <div className="flex justify-around text-center">
        <div className="w-[49%] bg-white py-1 rounded-md">
          들어온돈
          <br />
          <span className="text-green-400">
            +{inMoney.toLocaleString('ko-KR')}
          </span>
        </div>
        <div className="w-[49%] bg-white py-1 rounded-md">
          나간돈
          <br />
          <span className="text-red-500">
            -{outMoney.toLocaleString('ko-KR')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Total;
