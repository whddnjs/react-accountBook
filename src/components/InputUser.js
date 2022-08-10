import DefaultLayout from './DefaultLayout';

function InputUser({ user, setUser }) {
  const nameChangeHandler = e => {
    e.preventDefault();
    setUser(e.target.user.value);
  };

  return (
    <DefaultLayout>
      <div className="w-[20rem] h-[12rem] bg-blue-200 rounded-md mt-[20rem] p-4 flex flex-col justify-around">
        <div className="text-xl text-center">이름을 입력해 주세요.</div>
        <form onSubmit={nameChangeHandler}>
          <input
            type="text"
            name="user"
            className="w-[77%] p-2 mr-[1%] outline-none"
            autoFocus
          />
          <button type="submit" className="px-4 py-2 bg-white w-[22%]">
            확인
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
}

export default InputUser;
