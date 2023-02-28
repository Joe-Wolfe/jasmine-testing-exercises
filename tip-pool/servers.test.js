describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not allow empty server names', function(){
    serverNameInput.value = '';
    submitServerInfo();
    let newEntry = document.querySelectorAll("#server1 td");
    expect(newEntry.length).toBe(0);
  })

  it('should create new tds with updateServerTable()', function(){
    //
    submitServerInfo();
    updateServerTable();

    let newEntry = document.querySelectorAll("#server1 td");
    
    expect(newEntry[0].textContent).toBe("Alice");
    expect(newEntry[1].textContent).toBe("$0.00");

  });

  afterEach(function() {
    // teardown logic

    //reset variables
    allServers = {};
    serverId = 0;

    //reset UI
    serverTbody.innerHTML = "";
  });
});