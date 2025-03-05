import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIN = { firstName: 'Vipul', lastName: 'Sharma', email:'vipul07sharma@outlook.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIN?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTONS
      </div>
      <RightSidebar
        user={loggedIN}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home