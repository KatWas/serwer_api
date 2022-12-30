class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/prices" exact component={Prices} />
          <Route path="/order-a-ticket" exact component={Order} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;