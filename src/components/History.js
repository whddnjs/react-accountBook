function History({
  newHistoryModal,
  setNewHistoryModal,
  moneyHistory,
  historyState,
  setHistoryState,
}) {
  return (
    <div
      className={`w-[20rem] bg-blue-100 p-4 mb-1 ${
        newHistoryModal ? 'rounded-none' : 'rounded-b-lg'
      }`}
    >
      <ul className="flex w-full pb-2 mb-2 border-b border-gray-400">
        <li className="cursor-pointer">전체 내역</li>
        <li className="ml-3 text-gray-400 cursor-pointer">수입</li>
        <li className="ml-3 text-gray-400 cursor-pointer">지출</li>
      </ul>
      {moneyHistory.map(his => {
        return (
          <div
            key={his.id}
            className="flex justify-between w-full h-16 p-2 mt-1 bg-white rounded-md"
          >
            <div>
              <span className="text-sm text-gray-400">{his.date}</span>
              <br />
              <span className="text-lg">{his.content}</span>
            </div>
            <div
              className={`leading-[3rem] text-lg mr-1 ${
                his.inOut === 'in' && 'text-green-400'
              } ${his.inOut === 'out' && 'text-red-500'}`}
            >
              {his.inOut === 'in' && <span>+</span>}
              {his.inOut === 'out' && <span>-</span>}
              {his.money.toLocaleString('ko-KR')}
            </div>
          </div>
        );
      })}

      <div className="w-full mt-4 bg-gray-100 border border-blue-600 border-dashed rounded-md h-28">
        <div
          className="p-2 text-center cursor-pointer select-none"
          onClick={() => setNewHistoryModal(true)}
        >
          <div className="text-6xl font-nanum-bold">+</div>
          <div>새 거래 내역 추가</div>
        </div>
      </div>
    </div>
  );
}

export default History;
