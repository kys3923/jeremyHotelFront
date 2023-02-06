const DashboardHeader = ({currentSection, setCurrentSection}) => {

  const tailwindDistributor = (section) => {
    if (section === currentSection) {
      return 'w-1/3 p-2 bg-blue-800 rounded-md text-center text-white'
    } else {
      return 'w-1/3 p-2 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white text-center rounded-md hover:cursor-pointer'
    }
  }

  const clickHandler = (e, section) => {
    e.preventDefault();
    if (section === currentSection) {
      return
    }
    setCurrentSection(section);
  }

  return (
    <nav>
      <ul className="flex flex-row gap-3 px-3 pt-3">
        <li className={tailwindDistributor('new')} onClick={(e) => clickHandler(e, 'new')}>New reservations</li>
        <li className={tailwindDistributor('current')} onClick={(e) => clickHandler(e, 'current')}>Current reservations</li>
        <li className={tailwindDistributor('history')} onClick={(e) => clickHandler(e, 'history')}>Past reservations</li>
      </ul>
    </nav>
  );
}
export default DashboardHeader;