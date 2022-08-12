// 치킨먹고옴
let id = 0;
function AddNewHistory({
  money,
  setMoney,
  setMoneyHistory,
  setNewHistoryModal,
}) {
  const onSubmitHandler = e => {
    e.preventDefault();

    const formData = {
      id: id++,
      date: e.target.date.value,
      inOut: e.target.inout.value,
      money: Number(e.target.money.value),
      content: e.target.content.value,
    };

    // console.log(formData);

    if (
      formData.inOut === '' ||
      formData.money === 0 ||
      formData.content === ''
    ) {
      alert('양식을 채워주세요.');
    } else {
      setMoneyHistory(prevState => {
        return [formData, ...prevState];
      });

      const copy = { ...money };

      if (e.target.inout.value === 'in') {
        copy.totalMoney += formData.money;
        copy.inMoney += formData.money;
      } else {
        copy.totalMoney -= formData.money;
        copy.outMoney += formData.money;
      }

      setMoney(copy);

      setNewHistoryModal(false);
    }
  };

  return (
    <div className="w-[20rem] bg-blue-100 p-4 rounded-b-lg">
      <div className="pb-2 mb-2 border-b border-gray-400">새로운 거래</div>
      <form onSubmit={onSubmitHandler} className="flex flex-col">
        <label className="mb-1">날짜</label>
        <input
          type="date"
          name="date"
          className="p-2 mb-2"
          defaultValue={new Date().toISOString().substring(0, 10)}
        />
        <label className="mb-1">내용</label>
        <div className="mb-2">
          <label className="box-radio-input">
            <input type="radio" name="inout" value="in" className="hidden" />
            <span className="inline-block w-[49%] px-2 mr-[1%] leading-10 text-center bg-white rounded-md cursor-pointer bg-none h-10">
              들어온 돈
            </span>
          </label>
          <label className="box-radio-input">
            <input type="radio" name="inout" value="out" className="hidden" />
            <span className="inline-block w-[49%] ml-[1%] leading-10 text-center bg-white rounded-md cursor-pointer bg-none h-10">
              나간 돈
            </span>
          </label>
        </div>
        <input
          type="number"
          name="money"
          className="p-2 mb-2 rounded-md"
          placeholder="금액"
        />
        <label className="mb-1">메모</label>
        <input
          type="text"
          name="content"
          className="p-2 mb-2 rounded-md"
          placeholder="내용"
        />
        <button
          type="submit"
          className="w-full py-3 mb-1 bg-blue-700 rounded-md"
        >
          추가
        </button>
        <button
          type="button"
          className="w-full py-3 bg-white rounded-md"
          onClick={() => setNewHistoryModal(false)}
        >
          닫기
        </button>
      </form>
    </div>
  );
}

export default AddNewHistory;
