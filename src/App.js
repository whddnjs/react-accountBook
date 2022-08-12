import { useState } from 'react';
import Total from './components/Total';
import History from './components/History';
import AddNewHistory from './components/AddNewHistory';
import DefaultLayout from './components/DefaultLayout';
import InputUser from './components/InputUser';

function App() {
  const [user, setUser] = useState('');
  const [money, setMoney] = useState({
    totalMoney: 0,
    inMoney: 0,
    outMoney: 0,
  });
  const [newHistoryModal, setNewHistoryModal] = useState(false);
  const [moneyHistory, setMoneyHistory] = useState([]);

  if (user === '') {
    // 유저 입력
    return <InputUser user={user} setUser={setUser} />;
  } else {
    return (
      <DefaultLayout>
        {/* 총액 및 출입금 */}
        <Total user={user} money={money} />
        {/* 내역 및 추가 버튼 */}
        <History
          moneyHistory={moneyHistory}
          setMoneyHistory={setMoneyHistory}
          newHistoryModal={newHistoryModal}
          setNewHistoryModal={setNewHistoryModal}
        />
        {/* 내역 추가 */}
        {newHistoryModal && (
          <AddNewHistory
            money={money}
            setMoney={setMoney}
            setMoneyHistory={setMoneyHistory}
            setNewHistoryModal={setNewHistoryModal}
          />
        )}
      </DefaultLayout>
    );
  }
}

export default App;
