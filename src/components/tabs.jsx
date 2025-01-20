function Tabs (props) {
      const {tasks,selectedTab,setSelectedTab}=props
      const tabs=['All','Open','Completed']
      return (
            <>
            <nav className="nav_bar">
                  {tabs.map((tab, tabIndex)=>{
                        const numOfTasks = tab ==="All"?
                              tasks.length:
                              tab==='Open' ?
                                    tasks.filter(val => !val.complete).
                                    length:
                                    tasks.filter(val => val.complete).length
                        return (
                              <button 
                                    key={tabIndex}
                                    className={'tab_btn ' + (tab === selectedTab ?'selected':'')} 
                                    onClick={()=>{
                                          setSelectedTab(tab)
                                    }} 
                              >
                                    <h4>{tab}</h4>
                                    <span>({numOfTasks})</span>
                              </button>
                        )
                  })}
            </nav>
            <hr />
            </>
      )
}

export default Tabs;